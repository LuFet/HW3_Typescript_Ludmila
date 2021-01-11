import { DictionaryTree, Order } from './notes.js';
class ContentGenerator {
    constructor(selector, data, data2) {
        this.data = data;
        this.data2 = data2;
        this.container = document.querySelector(selector);
    }
    showData() {
        var _a;
        const ulElem = document.createElement('ul');
        this.data2.forEach((order) => {
            console.log(order);
            this.data.add(order);
            const liElem = document.createElement('li');
            liElem.innerHTML =
                `<b>Name: ${order.getName()}</b> , description: ${order.getDescription()} `;
            console.log(liElem);
            ulElem.append(liElem);
        });
        console.log(ulElem);
        (_a = this.container) === null || _a === void 0 ? void 0 : _a.append(ulElem);
    }
}
let content = new ContentGenerator('.notes', new DictionaryTree, [
    new Order(1, "Robin", "Mobile Phone"),
    new Order(1, "Robin", "Mobile Phone"),
    new Order(2, "Bob", "Book"),
    new Order(3, "Stephan", "Book"),
    new Order(4, "John", "Laptop"),
]);
console.log(content);
content.showData();
console.log(content);
