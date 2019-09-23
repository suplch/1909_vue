

let itemstr = localStorage.getItem('cartItem');

let items = [];

if (itemstr) {
    try {
        items = JSON.parse(itemstr);
    } catch (e) {
        items = [];
    }
}


export const cartItems = items;


export function add2Cart(goods) {
    let item = cartItems.find(function (item) {
        return goods.id === item.id
    });
    if (item) {
        item.count++
    } else {
        cartItems.push({...goods, count: 1});
    }

    localStorage.setItem("cartItem", JSON.stringify(cartItems));


}

export function delCart(goods_id) {
    let index = cartItems.findIndex((item) => {
        return goods_id === item.id
    });

    if (index !== -1) {
        cartItems.splice(index, 1);
    }
    localStorage.setItem("cartItem", JSON.stringify(cartItems));

}
