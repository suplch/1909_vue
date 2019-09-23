
let addressStr = localStorage.getItem('address_list');

let addr_list = [];

if (addressStr) {
    try {
        addr_list = JSON.parse(addressStr);
    } catch (err) {
        addr_list = [];
    }


}


export const address_list = addr_list;


export function addAddress(address) {
    address_list.push(address)
    localStorage.setItem('address_list', JSON.stringify(address_list))
}


export function choice_Address(address) {

    localStorage.setItem('current_address', JSON.stringify(address))
}


export function currentAddress() {
    let addr_str = localStorage.getItem('current_address');
    if (addr_str) {
        try {
            return JSON.parse(addr_str);
        } catch (err) {
            return null;
        }
    }
    return null;
}
