// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Prefab, Label, instantiate } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../BASE/Character";
import realThing from "../BASE/realThing";
import Cspine from "../BASE/spineANDgif/Cspine";
import GeZiManager from "../Manager/GeZiManager";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import JNUM from "../UIS/else/JNUmanager";
import state from "../game/time/state";
import turn from "../game/time/turn";
import SXX from "./SXX";
import class_rope from "./class_rope";
import { SubtitleManager } from '../UIS/baom';
@ccclass('S05')
export default class S05 extends SXX {
    xjj:number=6
        Snumber="S05"
        JX:boolean=false;
        cType: string ="human"
        Sex="man";
        PN:number;  //牛仔的编号
        BPN:number=0; //被套的人的编号 一开始没使用技能置0
       LDF:number=0
        SZR:number=0;
        STt:number=0;
        YX:number=-1;
        SZA:class_rope=null
    kj:boolean=true
    
        JX1: string[]=["S05-闪电","S05-冰霜","S02-掠夺P","S02-掠夺","S05-闪电","S04-冰霜","S02-掠夺"];
        
       @property(Prefab)
        SZ:Prefab=null
        start(): void {
            this.node.getChildByName("name").getComponent(Label).string="牛仔";
            this.node.getComponent(Character).behurt3.push(this);      
            this.node.getComponent(Character).move3.push(this);    
            this.node.getComponent(Character).move2.push(this);   
             this.node.getComponent(Character).weapon.Wtype=2;//武器类型改为2
             this.PN=this.node.getComponent(Character).Pturn;//初始化牛仔的玩家编号
             this.node.getComponent(Character).t1.push(this);    
                     this.target=this.node.getComponent(Character);
        
    
             this.target.walk3.push(this)
             this.target.attack25.push(this)
                  //重写weapon的attack
             
                //  this.node.getComponent(Character).changeE("A505")
            
              //武器不可更换重写changE
           
        
        }
        
    Walk3(ZB: number): void {
      
            this.YX++
            if (this.YX==3) {
                MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"Qi+");
                this.YX=0
                this.node.parent.getComponent(JNUM).JNF("S游侠",this.target.ZB)  
            }
        
    }
        
        
        skill1(): void {
            
            //选完人后 需要获得被选人的pturn置给BPN
          //暂时存被套的人的编号
            //
       if (this.SZR==0) {
       
    
        
        state.ST=9;
        GeZiManager.DLLM="S05"
        MessageCenter.MakeMessage("UIManager","change",-1);
        for(let manager of GeZiManager.YuanGong){
    let a=new Message("",[65],-1)
            manager.ReceiveMessage(a)    
    }
    MessageCenter.MakeMessage("AM",turn.turn,"getZB")
    
    for(let manager of GeZiManager.YuanGong){
    manager.getFar(3);
    
    }
    
       }   
    
        }
        
       QDS(N:number){
       
       GeZiManager.Tcharacter=null;
       MessageCenter.MakeSHMessage("AM",[N],3,this.PN,"getOne");
       if (GeZiManager.Tcharacter!=null) {
        GeZiManager.Tcharacter.move2.push(this)
        GeZiManager.Tcharacter.move3.push(this)
    let a=instantiate(this.SZ)
    a.setParent(GeZiManager.Tcharacter.node)
    a.getComponent(class_rope).endD=GeZiManager.Tcharacter
    a.getComponent(class_rope).QD=this.node.getComponent(Character)
    a.getComponent(class_rope).TZ()
    
    this.SZA=a.getComponent(class_rope)
    this.SZR=2

    
       this.node.parent.getComponent(JNUM).JNF("S套牛",this.target.ZB)  
    this.STt=2
    this.BPN=GeZiManager.Tcharacter.Pturn
    //GeZiManager.Tcharacter.move2.push(this)
    if (this.target.getdis(N)>this.SZR) {
    this.target.move(this.turn8([this.target.faceIs(N)])[0],1)
    this.target.moveto(0.6,this.target.ZB)
    }
    MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],2,this.node.getComponent(Character).Pturn,"Qi-");
    MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],2,this.node.getComponent(Character).Pturn,"TN-");
    
    
       }
    
        
           /* switch(i){
                case 1:
                    if(this.node.getComponent(Character).qi>=3){
                        MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],3,this.PN,"Qi-");
                        this.BPN=t;
                        this.MaxSt=3;
                    }
                    break;
                    case 2:
                        if(this.node.getComponent(Character).qi>=1){
                            MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.PN,"Qi-");
                            this.MaxSt-=1;
                            if(this.node.getComponent(Character).getc(this.BPN).getdis(this.node.getComponent(Character).ZB)>this.MaxSt){
                                //被套向牛仔移动
                                this.node.getComponent(Character).getc(this.BPN).Move2(this.node.getComponent(Character).faceTo,1);
                            }
                        }
                        break;
                        default:
                        break;
            }*/
       
        
        }
        Move3(ZB: number,Pturn: number): void {
    if (this.STt!=0) {
        
    
            if (this.BPN!=0) {
                if(Pturn==this.PN&&this.kj)
                    {
                         //牛仔hp大
                 
                           //将牛仔将要移动的位置与被套的人比较
                         
                            if(this.node.getComponent(Character).getc(this.BPN).getdis(ZB)>this.SZR){
                       let a=this.node.getComponent(Character).getc(this.BPN)
                       let b=this.SZR
                       let c=0
                       let j=[2,4,6,8]
                  //     console.log(this.LDF)
                    //   console.log(this.target.faceIs(a.ZB))
                       if (this.LDF==this.target.faceIs(a.ZB)) {
                        j=[this.LDF]
                       }else{     GeZiManager.shanchu(j,this.LDF)}
                  
                    
                      
                             for (let index = 1; index <10; index++) {
                                if(this.node.getComponent(Character).getdis(a.findGe(index,1))==b&&j.includes(index)){b=this.node.getComponent(Character).getdis(a.findGe(index,1));c=index}
                              
                             }    this.kj=false
                                MessageCenter.MakeSHMessage("AM", [this.node.getComponent(Character).getc(this.BPN).ZB],[c,0.8],this.PN,"move")
                                setTimeout(() => {
                                    this.kj=true
                                }, 900);
                            }
                        
                        //牛仔hp小
                     
                    }
                
                    //此时的move2为被套人的
                    else if(Pturn==this.BPN&&this.kj){
                         //被套hp大
                         if(this.node.getComponent(Character).getc(this.PN).getdis(ZB)>this.SZR){
                            let a=this.node.getComponent(Character).getc(this.PN)
                            let d=this.node.getComponent(Character).getc(this.BPN)
                            let b=this.SZR
                            let c=0
                            let j=[2,4,6,8]
                        //    console.log(this.LDF)
                        //    console.log(this.target.faceIs(a.ZB))
                            if (this.LDF==this.target.getc(this.BPN).faceIs(a.ZB)) {
                             j=[this.LDF]
                            }else{     GeZiManager.shanchu(j,this.LDF)}
                       
                         
                          //  console.log(j)
                                  for (let index = 1; index <10; index++) {
                                     if(d.getdis(a.findGe(index,1))==b&&j.includes(index)){b=d.getdis(a.findGe(index,1));c=index}
                                  //   console.log(d.getdis(a.findGe(index,1))==b)
                                    
                                  }   this.kj=false
                                     MessageCenter.MakeSHMessage("AM", [this.node.getComponent(Character).getc(this.PN).ZB],[c,0.8],this.BPN,"move")
                                     setTimeout(() => {
                                        this.kj=true
                                    }, 900);
                                 }
                       
                    }
                
          
                //此时的move2为牛仔的
                if ( this.SZR!=0) { this.SZA.change_rope()}
   // console.log(this.BPN)
            if(this.node.getComponent(Character).getc(this.BPN).getdis(this.node.getComponent(Character).getc(this.PN).ZB)>this.SZR){ 
          //      console.log(this.BPN)
                this.SZA.shan();
                GeZiManager.shanchu(this.node.getComponent(Character).getc(this.BPN).move2,this)
                GeZiManager.shanchu(this.node.getComponent(Character).getc(this.BPN).move3,this)
                 this.SZR=0;
           } 
          } }
        }
        Move2(arg0: number, Pturn: number,time:number): void {
        if (this.BPN!=0) {
            let a=this.node.getComponent(Character).getc(this.BPN)
            if(Pturn==this.PN)
                {
    
               
                  this.LDF=this.turn8([this.target.faceIs(arg0)])[0]
                 
                }
            
                //此时的move2为被套人的
                else if(Pturn==this.BPN){
                     //被套hp大
                     this.LDF=this.turn8([a.faceIs(arg0)])[0]
                }
            
        }
            //此时的move2为牛仔的
          
        }
    
    T1(): void {
      // if(this.SZR!=0){this.SZR--;}
       // this.Move2(this.node.getComponent(Character).ZB,this.node.getComponent(Character).Pturn)
       // this.Move3(this.node.getComponent(Character).ZB)
    if (this.STt>0) {
        this.STt--
        if (this.STt==0) {
            GeZiManager.shanchu(this.node.getComponent(Character).getc(this.BPN).move2,this)
            GeZiManager.shanchu(this.node.getComponent(Character).getc(this.BPN).move3,this)
            this.SZR=0;;this.SZA.shan()
        }
    }
    
    }
    Attack25(at:realThing,csh: number): void {
            
      
        if (at!=null&&at instanceof Character&&(at.weapon.Wtype==this.target.weapon.Wtype||at.Pturn==this.BPN)) {
            GeZiManager.dm+=1;
            this.node.parent.getComponent(JNUM).JNF("S对决",this.target.ZB)  
        }
        if (this.JX&&at!=null&&at instanceof Character&&(at.HP>=this.target.HP||at.Pturn==this.BPN)) {
            GeZiManager.dm+=1;
            this.node.parent.getComponent(JNUM).JNF("S对决2",this.target.ZB)  
        }
       
        
      }
        
    
    
      choseS(n:string): void {
        switch (n) {
            case "S对决2":GeZiManager.shanchu(this.JX2,"S对决2")
                
                break;
                case "S套牛2": GeZiManager.shanchu(this.JX2,"S套牛2")
                
                break;
      
              
                case "S游侠": GeZiManager.shanchu(this.JX1,"S游侠");this.target.TNJJ[0]-=1
                  
                
      
                break;
                case "S对决": GeZiManager.shanchu(this.JX1,"S对决");
                  
                
      
                break;
            default:
                break;
        }
        console.log(n)
      }
      
    
      
      NWNA(e:string[],n:number){
      
      
        let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],2)   
        let a
          /*
        switch (this.target.NWS) {
            case 1: a=this.mArr1Arr2(["S游侠","S游侠","S游侠"],e);return a
            break
            
            case 2:a=this.mArr1Arr2(this.JX1,this.JX2)
                
                break;
                case 3:a=this.mArr1Arr2(this.JX2,this.JX2)
                
                break;
                case 4:a=this.mArr1Arr2(this.JX2)
                
                break;
              
        
            default:a=this.JX2
                break;
        }
        */
        return e
        
        
        
        }
    
    
    
    
    
    Dead2(dead: number): void {
      if(this.BPN!=0){
    
        this.BPN=0;this.SZA.shan()
    
      }
    }
    
    
    
    
    
    getTO (n: number):string[] {
        switch(n){
    
    case 1:return ["S游侠","S对决","TNS"]
    
    case 2:
     let a=this.getRA(["FU0",'FU1','FU2','FU3'],1)
    return ["S对决2","S套牛2",this.JX1[0]]
    
    
    default: 
    let k="qi"
    let k1=this.mArr1Arr2(this.JX1,this.JX2)
        if ( this.mArr1Arr2(this.JX1,this.JX2).length>0) {
            k= this.mArr1Arr2(this.JX1,this.JX2)[0] 
        }
        let o=this.getRA(["FU0",'FU1','FU2','FU3'],1)[0]
        if ( this.mArr1Arr2(this.JX1,this.JX2).length>1) {
           o= this.mArr1Arr2(this.JX1,this.JX2)[1] 
       }
        
    return[k,o,"TNS"]
    
    
    
    
    
    
    
    }
    
    
    }
    getJNF(n: number[]): void {
        function sumArray(numbers: number[]): number {
          return numbers.reduce((sum, current) => sum + current, 0);
      }
       
      for (let index = 0; index < n[4]+n[5]; index++) {
        for( let a of n){if (index<4) {
           a++
        }}
      }
       
       
       
       
      
        if (this.getFUn()>=3){
            this.JX=true
            SubtitleManager.show(
                {
                    bgSprite:this.target.color,
                    image1:this.Toux,
                    text1: "这个家伙觉醒啦",
                    image2: this.skiil4,
                    text2: "",
                    duration: 5
                }
               )
          }else{   this.JX=false}//套牛的汉子2
        
      
      }
    
    
    
        }
        
        
        
        
        
        
        
        
        
    
    
    
    
    