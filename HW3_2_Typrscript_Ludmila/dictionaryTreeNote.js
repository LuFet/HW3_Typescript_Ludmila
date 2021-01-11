"use strict";
// class KeyValueTree<TKey, TValue,TNote> {
//     private _key!: TKey;
//     public set key(value: TKey) {
//         if (value == null || value == undefined) {
//             throw new Error("Значение value не может быть пустым.");
//         }
//         this._key = value;
//     }
//     public get key(): TKey {
//         return this._key;
//     }
//     private _value!: TValue;
//     public set value(value: TValue) {
//         if (value == null || value == undefined) {
//             throw new Error("Значение value не может быть пустым.");
//         }
//         this._value = value;
//     }
//     public get value(): TValue {
//         return this._value;
//     }
//     private _note!: TNote;
//     public set note(value: TNote) {
//         if (value == null || value == undefined) {
//             throw new Error("Значение value не может быть пустым.");
//         }
//         this._note = value;
//     }
//     public get note(): TNote {
//         return this._note;
//     }
// }
// class DictionaryNote<TKey, TValue, TNote> {
//     private data: KeyValueTree<TKey, TValue, TNote>[] = [];
//     public add(key: TKey, value: TValue, note:TNote) {
//         let entry = new KeyValueTree<TKey, TValue,TNote>();
//         entry.key = key;
//         entry.value = value;
//         entry.note = note;
//         this.data.push(entry);
//     }
//     public getValue(key: TKey) : TValue | null {
//         console.log(this.data)
//         for(let i = 0; i < this.data.length; i ++) {
//             if(this.data[i].key == key) {
//                 return this.data[i].value;
//             }
//         }
//         return null;
//     }
//     public getNote(key: TKey) : TNote | null {
//         console.log(this.data)
//         for(let i = 0; i < this.data.length; i ++) {
//             if(this.data[i].key == key) {
//                 return this.data[i].note;
//             }
//         }
//         return null;
//     }
// }
