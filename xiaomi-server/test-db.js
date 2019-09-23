const mongodb = require('mongodb');  // 映入 mongodb 官方依赖模块   npm install mongodb --save
const MongoClient = mongodb.MongoClient;  // 返回 mongodb 客户端对象
const ObjectId = mongodb.ObjectId;

const DB_URL = 'mongodb://localhost:27017';   // mongodb 数据库连接字符串

let cacheClient;  // 设置一个 客户端连接 缓存对象
function getClient() {
    return new Promise(function (resolve, reject) {
        if (cacheClient) { // 如果缓存对象 有效 直接返回
            resolve(cacheClient);
            return;
        }
        MongoClient.connect(DB_URL, { useNewUrlParser: true,  useUnifiedTopology: true }, function (err, client) {  // client 表示连接成功后的客户端对象
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            console.log('一个连接客户端建立');
            cacheClient = client;  // 将 客户端对象 赋值给缓存对象
            resolve(cacheClient);
        });
    });
}
async function getUsers() {
    const client = await getClient();
    const testDB = client.db('mi');
    return new Promise(function (resolve, reject) {
        testDB.collection('user')
            .toArray(function (err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
    })
}

async function existUser(phone) {
    const client = await getClient();
    const testDB = client.db('mi');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').find({login_name: phone}).toArray(function (err, result) {
            if (err) {
                return reject(err)
            }

            resolve(result.length > 0);
        });
    });
}

async function getUserByPhone(phone) {
    const client = await getClient();
    const testDB = client.db('mi');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').find({login_name: phone}).toArray(function (err, result) {
            if (err) {
                return reject(err)
            }
            resolve(result[0]);
        });
    });
}

async function createUser(user) {
    const client = await getClient();
    const testDB = client.db('mi');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').insertOne(user, function (err, cmdResult) {
            if (err) {
                return reject(err)
            }

            resolve({
                ok: true,
                id: cmdResult.insertedId
            })
        });
    });
}

/*
{
    "_id" : ObjectId("5d883cf333a1aca6257b5d61"),
    "user_id" : "5d85f492106bbd47be9083de",
    "state" : "unpay",
    "goods_list" : [
        {
            "id" : "111",
            "name" : "电脑",
            "price" : 1000,
            "count" : 2
        },
        {
            "id" : "222",
            "name" : "手机",
            "price" : 100,
            "count" : 2
        }
    ],
    "address" : {
        "city" : "深圳",
        "detail" : "西部硅谷"
    }
}


 */

async function createOrder(order) {
    const client = await getClient();
    const testDB = client.db('mi');
    return new Promise(function (resolve, reject) {
        testDB.collection('order').insertOne(order, function (err, cmdResult) {
            if (err) {
                return reject(err)
            }

            resolve({
                ok: true,
                order_id: cmdResult.insertedId
            })
        });
    });
}



async function getOrderTotal(order_id) {
    const client = await getClient();
    const testDB = client.db('mi');
    return new Promise(function (resolve, reject) {
        testDB.collection('order').find({_id: ObjectId(order_id)}).toArray(function (err, results) {
            if (err) {
                return reject(err)
            }

            let total = 0;
            for (let goods of results[0].goods_list) {
                total = goods.price * goods.count;
            }

            resolve(total);

        });
    });
}


async function pay(user_id, amount) {
    const client = await getClient();
    const testDB = client.db('mi');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').find({_id: ObjectId(user_id)}).toArray(function (err, results) {
            if (err) {
                return reject(err)
            }

            if (results[0].amount >= amount) {
                let latestAmount = results[0].amount - amount;
                let ret = updateUserAmount(user_id, latestAmount)
                if (ret.ok) {
                    resolve({
                        ok: true,
                        msg: '支付成功'
                    })
                } else {
                    resolve({
                        ok: false,
                        msg: '数据库错误'
                    })
                }
            } else {
                resolve({
                    ok: false,
                    msg: '金额不足'
                })
            }

        });
    });
}


async function updateUserAmount(user_id, amount) {
    const client = await getClient();
    const testDB = client.db('mi');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').updateOne({_id: ObjectId(user_id)}, {$set: {amount: amount}}, function (err, cmdResult) {
            if (err) {
                return reject(err)
            }

            resolve({
                ok: cmdResult.modifiedCount === 1,
                count: cmdResult.modifiedCount
            })
        })
    });
}



// async function updateStudent(filter, setObj) {
//     const client = await getClient();
//     const testDB = client.db('test');
//     return new Promise(function (resolve, reject) {
//         testDB.collection('c1909').updateMany(filter, setObj, function (err, cmdResult) {
//             if (err) {
//                 return reject(err)
//             }
//             resolve({
//                 ok: true,
//                 count: cmdResult.modifiedCount
//             })
//         })
//     });
// }
//
// async function removeStudent(filter) {
//     const client = await getClient();
//     const testDB = client.db('test');
//     return new Promise(function (resolve, reject) {
//         testDB.collection('c1909').remove(filter, function (err, cmdResult) {
//             if (err) {
//                 return reject(err)
//             }
//             resolve({
//                 ok: true,
//                 count: cmdResult.deletedCount
//             })
//         });
//     });
// }
// async function insertStudent(student) {
//     const client = await getClient();
//     const testDB = client.db('test');
//     return new Promise(function (resolve, reject) {
//         testDB.collection('c1909').insertOne(student, function (err, cmdResult) {
//             if (err) {
//                 return reject(err)
//             }
//
//             resolve({
//                 ok: true,
//                 id: insertedId
//             })
//         })
//     });
// }
module.exports = {
    createUser,
    existUser,
    getUserByPhone,
    createOrder
};
