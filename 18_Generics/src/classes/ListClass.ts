import { Formatter } from "../Interfaces/Formatter"

export class ListClass {
    constructor (private container: HTMLUListElement){};

        
    render(item : Formatter, heading : string, position : 'start' | 'end'){
        const li = document.createElement('li');  

        const h4 = document.createElement('h4');  
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p'); 
        p.innerText = item.format();  //Because Formatter is assigned to it
        li.append(p);

        if(position == 'start'){
            this.container.prepend(li);   // *prepend means - put it at the start of the tag
        }else{
            this.container.append(li);
        }
    }
};
