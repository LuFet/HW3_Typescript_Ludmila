
import{generateContent} from './interfaces.js';
import{DictionaryTree, Order} from './notes.js';

class ContentGenerator implements generateContent{
    container: HTMLDivElement | null;
    constructor(selector:string,private data:DictionaryTree<Order>,private data2:Order[]){        
        this.container=document.querySelector(selector);
    }
    showData(){  
        const ulElem:HTMLUListElement=document.createElement('ul');        
        this.data2.forEach((order) =>{
                    console.log(order);
                    this.data.add(order);
                    const liElem: HTMLLIElement = document.createElement('li');
                    liElem.innerHTML = 
                    `<b>Name: ${order.getName()}</b> , description: ${order.getDescription()} `;
                    console.log(liElem)
                    ulElem.append(liElem);
                });      
                console.log(ulElem)
                this.container?.append(ulElem);
            }
    }

    let content = new ContentGenerator('.notes', new DictionaryTree,
    [
        new Order(1,"Robin","Mobile Phone"),
        new Order(1,"Robin","Mobile Phone"),
        new Order(2,"Bob","Book"),
        new Order(3,"Stephan","Book"),
        new Order(4,"John","Laptop"),
    ]);
    console.log(content);
    content.showData();
    console.log(content);