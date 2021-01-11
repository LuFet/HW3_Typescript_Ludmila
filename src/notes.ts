
interface EqualityComparer<T> {
    equals(item: T): boolean;
}

// // Для EqualityComparer<T> type variable будет такой же как для UniqueCollection
export class DictionaryTree<T extends EqualityComparer<T>> {
    private data: T[] = [];
    public add(item: T) {
        let unique: boolean = this.data.every(x => !x.equals(item));
        if (unique) {
            this.data.push(item);
        }
    }
    public showData() {
        console.log(this.data)
        this.data.forEach(x => console.log(x));
    }    
}
export class Order implements EqualityComparer<Order> {
    id:number = 0;
    name: string;
    description: string;

    constructor(id:number=0,name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    
    equals(item: Order): boolean {
        return item.id == this.id;
    }
}
