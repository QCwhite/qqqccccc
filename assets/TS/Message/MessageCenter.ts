// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";

import { SHMessage } from "./SHMessage";
import { Message } from "./Message";
import GMessage from "./GMessage";

import KHD2 from "./KHD2";
import AnimalManager from "../Manager/AnimalManager";
import GeZiManager from "../Manager/GeZiManager";
import TNanager from "../Manager/TNanager";
import ZManager from "../Manager/ZManager";

@ccclass('MessageCenter')
export default class MessageCenter  {
        static Managers:ComponentBase[]=[];
        static Text:boolean=false
        
    
    
    static addReceive(xin:ComponentBase){
    
        MessageCenter.Managers.push(xin);
    }
    
    
      
        
    static SendMessage(message:Message){
     console.log(message)
        for(let mannger of this.Managers){
        mannger.ReceiveMessage(message)
    
    }
    
    }
    
    static MakeMessage(Type:string,Command:any,Content:any){
    
    let message=new Message(Type,Command,Content)
    
    for(let mannger of this.Managers){
        mannger.ReceiveMessage(message)
    }
    console.log(message)
    
    }
    
    static MakeGMessage(Type:any,Command:any,Content:any,from:any,SHtype:any){
      
        console.log(SHtype)
        console.log(from)
        console.log(new GMessage(Type,Command,Content,from,SHtype))
      
        if(this.Text){
        let message=new SHMessage(Type,Command,Content,from,SHtype)
        for(let mannger of this.Managers){
            mannger.ReceiveMessage(message)
        }
    
       }else{
        let message=new GMessage(Type,Command,Content,from,SHtype)
        
        setTimeout(() => {
            console.log(message)
            KHD2.send(message) 
        }, 200);
        
    
    
    }
    
        }
    
    
    
    static MakeSHMessage(Type:string,Command:any,Content:any,from:number,SHtype:string){
    
        let message=new SHMessage(Type,Command,Content,from,SHtype)
        for(let mannger of this.Managers){
            mannger.ReceiveMessage(message)
    
        }
        console.log(message)
        }
    
    
    
    static ok(){
    
    
        
    
           
           
           
           
                   
    
    
    
                   }
                
                
                
                
                
                
                }
    
    