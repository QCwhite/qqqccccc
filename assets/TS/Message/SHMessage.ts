// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import { Message } from "./Message";
export  class SHMessage extends Message {
    from:number;
    SHtype:any;
    
    
    
    
    toJSON(){
        return{
    Type:this.Type,
    Command:this.Command,
    Content:this.Content,
    from:this.from,
    SHtype:this.SHtype,
        }
    }
    
    
        constructor(Type:any,Command:any,Content:any,from:any,SHtype:any){
            super(Type,Command,Command);
        this.Type=Type;
        this.Command=Command;
        this.Content=Content;
           this.SHtype=SHtype;
    this.from=from
            }
       
    
        }
    
     
    
    