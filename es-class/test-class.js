
// function Animal(name) {
//     this.name = name;
//     this.age = 28;
//     console.log('this', this); // this 就是 我
//
//     temp = this;
// }
//
// Animal.prototype.eat = function(food) {
//     console.log(this.name + '正在吃 ' + food);
// };
//
// Animal.prototype.age = 18;




let temp;

class Animal {
    constructor(name) {
        this.name = name;

        console.log('this', this); // this 就是 我

        temp = this;
    }

    eat(food) {
        console.log(this.name + ' 正在吃 ' + food);
    }
}


class Human extends Animal{

    eat(food, fruit) {
        console.log(this.name + ' eating ' + food + ', 炒菜')
        this.play();
    }

    play() {
        console.log('玩游戏')
    }
}

let a1 = new Animal('tom');
a1.eat('jerry');
console.log('a1', a1);
console.log(a1 === temp);

console.log('--------------------')

let a2 = new Animal('jerry');
a2.eat('cream');
console.log('a2', a2);
console.log(a2 === temp);
console.log(a1 === a2);

let t1 = new Animal('tigger');
let t2 = new Animal('tigger');

console.log(t1 === t2);

console.log('-------------')

let zhangsan = new Human('张三');
console.log(zhangsan)
zhangsan.eat('米饭')

// let eat = zhangsan.eat;
//
//
// let person = {
//     name: '李四',
//
//     play: function () {
//         console.log(this.name, '玩游戏')
//     }
// };
//
// eat.call(person, '苹果', '🍇');
//
// let list = ['苹果', '🍇'];
//
// eat.apply(person, list);
