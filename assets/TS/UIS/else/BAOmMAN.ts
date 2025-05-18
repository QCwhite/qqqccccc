// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Prefab, Node, instantiate } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import GeZiManager from "../../Manager/GeZiManager";
import { SHMessage } from "../../Message/SHMessage";
import BAOMU from "./BAOMU";

@ccclass('BAOmMAN')
export default class BAOmMAN extends ComponentBase {
        @property(Prefab)
        baoTX:Prefab=null
    
    
    BAOML:Node[]=[]
    
    
    jj(message:SHMessage,get:number){
    
    
    
    
    //   this.baom(message.from,message.Content+"",get,message.SHtype)
    
    
    
        
    }
    
    
    cs(k){setTimeout(()=>{if (this.BAOML.length==0) {
       
       k.getComponent(BAOMU).playAnimation()
        
       
       }else{this.cs(k)}
   },1000)
    }
    
    baom(P1:number,D1:string,P2:number,end:string){
       let k= instantiate(this.baoTX)
       k.setParent(this.node)
       k.getComponent(BAOMU).Baomu(P1,D1,P2,end);
    this.BAOML.push(k)
    k.active=false
    
     this.cs(k)
    
    }
    
    
    
    }
    
    