// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import CXX from "./CXX";

@ccclass('C07')
export default class C07 extends CXX {
target:Character=null;
TheNumber:string ='C07';
in:boolean=false
        Cname:string="CR8"
     
        start () {
            this.target=this.node.getComponent(Character);
            this.target.move3.push(this);
         this.target.TNJJ[0]-=1;
            this.Move3(this.target.ZB)
        }
        
        /*
        T1(){
        let a=GeZiManager.blueP[0].HP+GeZiManager.blueP[1].HP+GeZiManager.blueP[2].HP;
        let b=GeZiManager.redP[0].HP+GeZiManager.redP[1].HP+GeZiManager.redP[2].HP;
        
        if(GeZiManager.blueP.includes(this.target)&&a<b){MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"turn+")}
        if(GeZiManager.redP.includes(this.target)&&a>b){MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"turn+")}
        
        }*/
        Move3(ZB: number): void {
            if (GeZiManager.grass.includes(this.target.ZB)&&this.in==false){
          
           this.target.TNJJ[1]-=2;
           this.in=true
            }else{
                
                if (this.in) {
                   
                    this.target.TNJJ[1]+=2 ;
                    this.in=false
                }
              }
        }
        remove(){
            if (this.in) {
                   
                this.target.TNJJ[1]+=2 ;
                this.in=false
            }
            GeZiManager.shanchu(this.target.move3,this)
            this.target.TNJJ[0]+=1;
         }
        }
        