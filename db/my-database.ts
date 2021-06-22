import {Items} from '../interfaces/items';

const items: Items[] = [];

export const myDatabase = {

    add(item: Items) : void {
        items.push(item);
    },

    remove(index: number) : void {
        items.splice(index,1);
    },
  
    show() : void {
        for(const item of items){
            console.log(item);
        }
    }


}

    



