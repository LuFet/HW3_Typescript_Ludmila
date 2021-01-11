// // Для EqualityComparer<T> type variable будет такой же как для UniqueCollection
export class DictionaryTree {
    constructor() {
        this.data = [];
    }
    add(item) {
        let unique = this.data.every(x => !x.equals(item));
        if (unique) {
            this.data.push(item);
        }
    }
    showData() {
        console.log(this.data);
        this.data.forEach(x => console.log(x));
    }
}
export class Order {
    constructor(id = 0, name, description) {
        this.id = 0;
        this.name = name;
        this.description = description;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    equals(item) {
        return item.id == this.id;
    }
}
