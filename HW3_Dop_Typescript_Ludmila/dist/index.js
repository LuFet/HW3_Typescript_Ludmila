"use strict";
class StringCollection {
    constructor(stringArray) {
        this.stringArray = stringArray;
        this.values = [];
        for (let i = 0; i < stringArray.length; i++)
            this.values[i] = stringArray[i];
    }
    ;
    *getValues() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
    newFunction() {
        for (let value of this.getValues()) {
            if (Number.isInteger(value)) {
                console.log("Ошибка, надо передавать строковые значения, а это числовое значение!");
                return;
            }
            else {
                console.log(value);
            }
        }
    }
}
let myArray1 = new StringCollection(["gg", "ggh", 5, "hhhhj", "ffff", "hhh"]);
let myArray2 = new StringCollection(["Simbol", 100, "словарь", "выбор", "определений", "реализацию", "данных"]);
myArray1.newFunction();
myArray2.newFunction();
