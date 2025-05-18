// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html


const {ccclass, property} = _decorator;
import { _decorator, Component, Node, Vec3,Skeleton,sp, AnimationState, tween, Tween, find, Color, Texture2D,  Rect, SpriteFrame, UIOpacity, UITransform, Vec2, director, Label } from 'cc';
import ComponentBase from "../BASE/ComponentBase";
import GeZi from "../Ditu/Gezi/GeZi";
import DESManager from "../Ditu/des/DESManager";
import label from "../UIS/label";
import sideUI from "../UIS/sideUI";
import state from "../game/time/state";
import turn from "../game/time/turn";
import player from "../game/player";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import UIManager from "./UIManager";
import AnimalManager from "./AnimalManager";
import ManagerBase from "./ManagerBase";
import Obstacles from "../BASE/ Obstacles";
import Character from "../BASE/Character";
import Qin from "../BASE/qin";
import DES from "../Ditu/des/DES";
import realThing from "../BASE/realThing";
import QinManager from "./QinManager";
import grass from "../../node/Dixing/grass";
import qizi from "../../node/Dixing/qizi";

import KHD2 from "../Message/KHD2";
import box from '../../node/Dixing/box';
import { Material } from 'cc';
import { resources } from 'cc';
import { dir } from 'console';
import { start } from 'repl';
import node from '../../../@cocos/creator-types/editor/packages/engine/@types/editor-extends/manager/node';
import { JsonAsset } from 'cc';
import { UIm } from '../UIS/UIm';

@ccclass('GeZiManager')
export default class GeZiManager extends ManagerBase {
    static UIm:UIm[]=[]
    static aos:number[]=[];
    static BDZD:number[]=[];
    static AllObstacles:ComponentBase[]=[];//新加的表示所有障碍物 
    static GR:grass[]=[];
    static TNC:number[]=[1,3,3,4,4,2];
static SUC:number=0;
static GeZis:number[]=[];
static BanMove:number[]=[65];
static GeZi:number;  
messageLevel: number=1
messageType: String="GeZiManager"
static AM:AnimalManager=null
static Ban:number[]=[];
static blue:number[]=[];
static red:number[]=[0];    
static qin:Qin[]=[];
static YuanGong:GeZi[]=[]
static trees:number[]=[]; 
static DL:number[][]=[[]]; 
static SGeZi:number[][]=[[]]; 
static Qi:number=0;
static HP:number=0;
static TNJM:number[]=[1,1,2,3,4,5,6,2,2,2]
static PCP:Character=null
static  qins:number[] =[];
static  WD:number[] =[];
static label:label[]=[];
static rock:number[]=[];
static boxs:number[]=[]
static Bu:number[]=[];
static WindSon:ComponentBase[]=[];
static KillSon:ComponentBase[]=[];
static ShopSon:ComponentBase[]=[];
static magic:ComponentBase[]=[];
static P1:Character=null;
static P2:Character=null;
static P3:Character=null;
static P4:Character=null;
static P5:Character=null;
static P6:Character=null;
static sideUI:sideUI[]=[];
static blueP:Character[]=[];
static redP:Character[]=[];
   static BOL: boolean=false;
static addDis:ComponentBase[]=[]
static Tcharacters:Character[]=[]
static Tcharacter:realThing=null
static TF:qizi=null

static p6F:ComponentBase[]=[]
static FTPN:number=0
    static face:number=0;//风向选择
    static AT: number=0;//伤害赋值
    static JL: number=0;//距离
   static ms: number=0;//免伤
   static un: number=0;//免伤前受到的总伤害
   static dlU: number=0;//初始伤害
   static free:number=0;//与气数消耗有关的加减
   static dm:number=0;//与伤害有关的加减
   static DLLM:string="n"
   static PK:number=0;
static redM:number[]=[];
static blueM:number[]=[];
static redD21:number=0;
static blueD21:number=0;
static grass:number[]=[]
static waterPool:number[]=[2,3,4,5,6,7,9,17,25,33,41,49,57,58,59,60,61,62,63,64,48,40,32,24,16]
static by:number[]=[0,0,0,0,0,0]
static LSban:number[]=[0,0,0,0,0,0]
    static kxg: number=0;
static Bhun:number=0;
static Rhun:number=0;
static BQ:number[][]=[]
static RQ:number[][]=[]
static YINXR:number[]=[]
static skillDataMap: { [key: string]: SkillData } = {};
    protected onLoad(): void {
   
           resources.load("EQW", JsonAsset, (err: Error, data: JsonAsset) => {
               if (err) {
                   console.error("Failed to load skills data:", err);
                   return;
               }
           
               // 确保 data.json 是一个有效的 JSON 数组
               let skillList: SkillData[] = data.json;
           
               // 检查 skillList 是否有效
               if (!Array.isArray(skillList)) {
                   console.error("Invalid skill data format:", skillList);
                   return;
               }
           
               // 解析 JSON 数据并存储到字典中
               GeZiManager.skillDataMap = {}; // 确保 skillDataMap 是一个空对象
               skillList.forEach((skill: SkillData) => {
                GeZiManager.skillDataMap[skill.id] = skill;
               });
           
               // 现在可以访问 this.skillDataMap["A110"]
       
           
               console.log("Skills data loaded successfully.");
           });
       
         
       }  






start() {
        function findNodeInScene(node: Node, targetName: string): Node | null {
            if (node.name === targetName) {
                return node;
            }
            for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i];
                const result = findNodeInScene(child, targetName);
                if (result) {
                    return result;
                }
            }
            
            return null;
         }
         let rootNode = director.getScene().getChildByName("Canvas");
         
         const targetNode = findNodeInScene(rootNode, "UIManager"); // 假设要查找的节点名为"TargetNodeName"
         if (targetNode) {
             // 找到了目标节点
             console.log("找到了目标节点");
         } else {
             // 没有找到目标节点
             console.log("没有找到目标节点");
         }
         
         targetNode.getComponent(UIManager).addReceive(this)
         
        GeZiManager.AM =find("Canvas/DituManager/New Node/AnimalManager").getComponent(AnimalManager)
         
    if(player.Pturn.includes(turn.turn)){}else{ MessageCenter.MakeMessage("UIManager","change",0)}
    
    GeZiManager.changeChoose();
    }
    static QQ(){
    
       this.face=0;//风向选择
       this. AT=0;//伤害赋值
        this.JL=0;//距离
       this.ms=0;//免伤
       this.un=0;//免伤前受到的总伤害
       this.dlU=0;//初始伤害
       this.free=0;//与气数消耗有关的加减
       this.dm=0;//与伤害有关的加减
    
    
    
    }
    static getHUN(){
    let k=find("Canvas/DituManager/New Node/ZD")
       
if (GeZiManager.Rhun>4) {
    GeZiManager.Rhun=4
}
if (GeZiManager.Bhun>4) {
    GeZiManager.Bhun=4
}
if (GeZiManager.Rhun<0) {
    GeZiManager.Rhun=0
}
if (GeZiManager.Bhun<0) {
    GeZiManager.Bhun=0
}
    for (let index = 0; index < 8; index++) {
      
       k.children[index].active=false

        
    }



    for (let index = 0; index < 4; index++) {
       if (GeZiManager.Bhun>index) {
        k.children[index].active=true
      //  GeZiManager.fadeINAndA(k.children[index],200)
      
       } 
        
    }

    for (let index = 4; index < 8; index++) {
        if (GeZiManager.Rhun>index-4) {
            k.children[index].active=true
         // GeZiManager.fadeINAndA(k.children[index],200)
        } 
         
     }






    }
    
    static Liget(ZB:number[]){
        for(let o of GeZiManager.GR){
            if (ZB.includes(o.ZB)) {
             o.XX()   
            }
        }
    }
        
    static getMB(){
        GeZiManager.redM=[]
        GeZiManager.blueM=[]
    for(let o of GeZiManager.AllObstacles){
        if (o instanceof qizi||o.tt=="C20") { if (o.color=="Blue") {
            
       
           for (let j of o.getNIG(o.ZB)) {
          GeZiManager.redM.push(j)
            
           } 
        }else {
    
            for (let j of o.getNIG(o.ZB)) {
                GeZiManager.blueM.push(j)
                  
                 } 
        }
    
    
    }
    }
    
    
    
    }
    
    static getQin(ZB:number,TZB:number){
    
    if(GeZiManager.qin!=null){
    
    for(let a of GeZiManager.qin){
        console.log(a.ZB)
       if(a.ZB==ZB){a.getQinType(ZB,TZB);   }
    
    }
    }
    }
    
    static FgetQin(ZB:number,TZB:number){
    
        if(GeZiManager.qin!=null){
        
        for(let a of GeZiManager.qin){
            console.log(a.ZB)
           if(a.ZB==ZB){
           a.FgetQinType(ZB,TZB); 
        console.log(a.ZB)
        }
        
        }
        }
        }
    
    
    static XQin(){
        GeZiManager.qin=[]
        MessageCenter.MakeSHMessage("AM",[65],1,null,"getQin")
        for (let i = 0; i <64; i++) {
          GeZiManager.getQin(i,0)        
        }
    }
    
    static changeChoose(){
    switch(state.ST){
      case 0  :for(let mannger of this.YuanGong){
            
            
            let a=""
            
         
            let message=new Message(a,[65],1)
            mannger.ReceiveMessage(message)
         
    if(turn.turn%2==0){GeZiManager.redBan();}else {GeZiManager.blueBan()}
    
           message=new Message(a,[GeZiManager.GeZi],2)
            mannger.ReceiveMessage(message)
        }
    break;
    
    
    
    
    
    
    }}
    
    
    
    
    
    static blueBan(){
       // console.log(GeZiManager.red)
        GeZiManager.kxg=0
        for(let mannger of this.YuanGong){
            
            
            let a=""
            
         
            let k= GeZiManager.mArr1Arr2(GeZiManager.red,GeZiManager.LSban)
           let message=new Message(a,k,"blueBan")
            mannger.ReceiveMessage(message)
            
         
        }
        
            /*    
        if (state.state==0&&GeZiManager.kxg>=64) {
            let message=new Message("",[10],2)
            for(let mannger of this.YuanGong){
    
                mannger.ReceiveMessage(message)
    
            }
        } */   
    }
    
    
    
    static redBan(){
        GeZiManager.kxg=0
      //  console.log(GeZiManager.blue)
        for(let mannger of this.YuanGong){
            
            
            let a=""
            
         let k= GeZiManager.mArr1Arr2(GeZiManager.blue,GeZiManager.LSban)
       
           let message=new Message(a,k,"redBan")
            mannger.ReceiveMessage(message)
            
    
        }
    
    
        /*    
        if (state.state==0&&GeZiManager.kxg>=64) {
            let message=new Message("",[15],2)
            for(let mannger of this.YuanGong){
    
                mannger.ReceiveMessage(message)
    
            }
        } */   
    }
    
    
    
    
    
    
    
    
    
    static Gtree(){ 
        for(let mannger of this.YuanGong){
            
            
            let a=""
            let message2=new Message(a,GeZiManager.mArr1Arr2(this.trees,GeZiManager.boxs),5)
            mannger.ReceiveMessage(message2);}
    
    
        }
    
    
    
    
    
    static qing(){
    
        for(let mannger of this.YuanGong){
            
            
            let a=" "
            
         
         
           let message=new Message(a,[65],1)
            mannger.ReceiveMessage(message)
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    
    static getc(nu:number){
    
    
        switch (nu) {
          case -1:
          break;
           case 1:return GeZiManager.P1
              
              break;
              case 2:return GeZiManager.P2
              
              break;
              case 3:return GeZiManager.P3
              
              break;
              case 4:return GeZiManager.P4
              
              break;
              case 5:return GeZiManager.P5
              
              break;
              case 6:return GeZiManager.P6
              
              break;
        
           default:return GeZiManager.P6
              break;
        }
        } 
    
    
    
    
    
    
        static shanchuALL(arr:any,target:any){
            let index=arr.indexOf(target); // 获取要删除元素的索引
               if (index !== -1) {
                 arr.splice(index, 1); // 删除指定索引的元素
               }
           
           console.log(arr)
           console.log(index)
           
           }
    
    
    
    static shanchu(arr:any,target:any){
     let index=arr.indexOf(target); // 获取要删除元素的索引
        if (index !== -1) {
          arr.splice(index, 1); // 删除指定索引的元素
        }
    
    console.log(arr)
    console.log(index)
    
    }
    
    
    static getWD(face:number){
    
    
    switch (face) {
        case 2:
            
        
        for(let WD of GeZiManager.WD){
            let X
            let Y
            if(WD%8==0){X=8}else{
           X=WD%8;}
           Y=Math.ceil(WD/8)
    for(let manager of GeZiManager.onX(X)){
    if(manager<WD){GeZiManager.Ban.push(manager)}
    
    } }
     
            break;
        case 4:
            
        
            for(let WD of GeZiManager.WD){
                let X
                let Y
                if(WD%8==0){X=8}else{
               X=WD%8;}
               Y=Math.ceil(WD/8)
        for(let manager of GeZiManager.onY(Y)){
        if(manager<WD){GeZiManager.Ban.push(manager)}
        
        } }
         
                break;
        case 6:
            
        
                for(let WD of GeZiManager.WD){
                    let X
                    let Y
                    if(WD%8==0){X=8}else{
                   X=WD%8;}
                   Y=Math.ceil(WD/8)
                   for(let manager of GeZiManager.onY(Y)){
                    if(manager>WD){GeZiManager.Ban.push(manager)}
            
            } }
             
                    break;
        case 8:
            
        
                    for(let WD of GeZiManager.WD){
                        let X
                        let Y
                        if(WD%8==0){X=8}else{
                       X=WD%8;}
                       Y=Math.ceil(WD/8)
                for(let manager of GeZiManager.onX(X)){
                if(manager>WD){GeZiManager.Ban.push(manager)}
                
                } }
                 
                        break;
        default:
            break;
    }
    
    
    
    
    
    }
    
      
    static getxy(ZB:number){
    let a:number[]=[]
    if(ZB%8==0){a.push(8);}else{a.push(ZB%8);}
    a.push(Math.ceil(ZB/8));
    return a;
    }
    
    
    
    static onY(Y:number){
    let YS:number[]=[];
    for(let mannger of this.BanMove){
    if(Y==Math.ceil(mannger/8)){
    
    
    YS.push(mannger);
    
    }
    
    }
    
    
    for(let mannger of GeZiManager.boxs){
        if(Y==Math.ceil(mannger/8)&&YS.includes(mannger)==false){
        
        
        YS.push(mannger);
        
        }
        
        }
    
    return YS;
    }
    
    
    
    
    static onX(X:number){
        let XS:number[]=[];
        for(let mannger of this.BanMove){
        if(mannger==65){}else{
            if(X==8){if(mannger%8==0){XS.push(mannger);}}else{if(X==mannger%8){XS.push(mannger);}}
       
        }}
    
        for(let mannger of GeZiManager.boxs){
            if(mannger==65){}else{
                if(X==8){if(mannger%8==0){XS.push(mannger);}}else{if(X==mannger%8&&XS.includes(mannger)==false){XS.push(mannger);}}
           
            }}
        
    
        
        return XS;
        }
        
      
        
    static DLBZ(ZB:number,preZB:number,zi:boolean){
     
       if(GeZiManager.AllObstacles!=null){for (let a of GeZiManager.AllObstacles) {
        
        
        if(a.FW.includes(preZB)&&(a.FW.includes(ZB)==false)){a.LK(ZB)}
        if(a.ZB==ZB){a.BZ(preZB,zi)}
        if((a.FW.includes(preZB)==false)&&a.FW.includes(ZB)){a.JR(ZB)}
    }}
       
           
          
              
        
        
    }
    
    static DLBX(ZB:number){
        let a=GeZiManager.DL
        for (let i = 0; i <a.length; i++) {
            if (a[i][0] == ZB) {
           
                a[i][1]-=1;
           if(a[i][1]==0){
               // DESManager.Des(ZB);
                GeZiManager.shanchu(GeZiManager.DL,a[i])
          
            }}
          }
    
    }
    
    static getFirstDigit(number: number): number {
        // 将数字转换为字符串
        const numberStr = number.toString();
        // 取字符串的第一个字符
        const firstChar = numberStr.charAt(0);
        // 将第一个字符转换回数字
        const firstDigit = parseInt(firstChar, 10);
        return firstDigit;
    }
    
    // 示例用法
    
    
    
    static KCLR(){
     let m=[]
    
    
    
    
    
    
    
    let an=find("Canvas/DituManager/New Node/AnimalManager").getComponent(AnimalManager).YuanGong
    
    if (turn.DorN=="day") {
        for (let a of an) {
            if (a instanceof Character||a instanceof box&&GeZiManager.grass.includes(a.ZB)) {
                for(let a2 of GeZiManager.AllObstacles){
                    if (a2 instanceof grass &&a2.ZB==a.ZB&&a2.HP>0) {
                  
                        a2.ZCL()  
                  
                  
                
                    
                        a2.T()
                }
            }
    
        
    }
        }}else{
    
    
    
    
    for (let a of an) {
    
    
        if (a instanceof Character||a instanceof box&&KHD2.PT.includes(GeZiManager.getFirstDigit(a.Pturn))) {
       
            m.push(a.findGe(a.faceTo,1))
        }
    }
    
    
    
    for (let a of an) {
            if (a instanceof Character||a instanceof box&&GeZiManager.grass.includes(a.ZB)) {
                for(let a2 of GeZiManager.AllObstacles){
                    if (a2 instanceof grass &&a2.ZB==a.ZB&&a2.HP>0) {
                    if (KHD2.PT.includes(GeZiManager.getFirstDigit(a.Pturn))) {
                        a2.BKS()
                    }else{   a2.yinxR()  }
                  
                
                    if (m.includes(a2.ZB)) {
                        a2.BKS()
                       }
                a2.T()
                }
                }
         
         
      }
      
        
     }
     
     
     
    }
    
    
    }
    
    
    
     static line(pos:number,ptr:number,dir:number,Enemy:number[]):number[]{
            let land:number[][]=[[57,58,59,60,61,62,63,64],[49,50,51,52,53,54,55,56],[41,42,43,44,45,46,47,48],[33,34,35,36,37,38,39,40],[25,26,27,28,29,30,31,32],[17,18,19,20,21,22,23,24],[9,10,11,12,13,14,15,16],[1,2,3,4,5,6,7,8]];
       
            let row:number,col:number;
            let res:number[]=[];
            row=-1;
            col=-1;
            if(ptr<=0){
                console.log("输入穿透不合法");
                return res;
            }
            if(pos>=57&&pos<=64){
                row=0;
                col=pos-57;
            }
            else if(pos>=49&&pos<=56){
                row=1;
                col=pos-49;
            }
            else if(pos>=41&&pos<=48){
                row=2;
                col=pos-41;
            }
            else if(pos>=33&&pos<=40){
                row=3;
                col=pos-33;
            }
            else if(pos>=25&&pos<=32){
                row=4;
                col=pos-25;
            }
            else if(pos>=17&&pos<=24){
                row=5;
                col=pos-17;
            }
            else if(pos>=9&&pos<=16){
                row=6;
                col=pos-9;
            }
            else if(pos>=1&&pos<=8){
                row=7;
                col=pos-1;
            }
            else{
                console.log("输入位置不合法");
                return res;
            }
            let count:number=0;
            if(dir==6){
                for(let i=col+1;i<8;i++)
                {
                    for(let num of Enemy)
                    {
                        if(count==ptr) return res;
                        if(num==land[row][i])
                        {
                            res[count]=num;
                            count+=1;
                        }
                    }
                }
                return res;
            }
            else if(dir==9)
            {
                let i=col+1;
                let j=row-1;
                while(i<8&&j>=0)
                {
                    for(let num of Enemy)
                    {
                        if(count==ptr) return res;
                        if(num==land[j][i])
                        {
                            res[count]=num;
                            count+=1;
                        }
                    }
                    i+=1;
                    j-=1;
                }
                return res;
            }
            else if(dir==8)
            {
                let i=row-1;
                while(i>=0)
                {
                    for(let num of Enemy)
                    {
                        if(count==ptr) return res;
                        if(num==land[i][col])
                        {
                            res[count]=num;
                            count+=1;
                        }
                    }
                    i-=1;
                }
                return res;
            }
            else if(dir==7)
            {
                let i=col-1;
                let j=row-1;
                while(i>=0&&j>=0)
                {
                    for(let num of Enemy)
                    {
                        if(count==ptr) return res;
                        if(num==land[j][i])
                        {
                            res[count]=num;
                            count+=1;
                        }
                    }
                    i-=1;
                    j-=1;
                }
                return res;
            }
            else if(dir==4)
            {
                for(let i=col-1;i>=0;i--)
                {
                    for(let num of Enemy)
                    {
                        if(count==ptr) return res;
                        if(num==land[row][i])
                        {
                            res[count]=num;
                            count+=1;
                        }
                    }
                }
                return res;
            }
            else if(dir==1)
            {
                let i=col-1;
                let j=row+1;
                while(i>=0&&j<6)
                {
                    for(let num of Enemy)
                    {
                        if(count==ptr) return res;
                        if(num==land[j][i])
                        {
                            res[count]=num;
                            count+=1;
                        }
                    }
                    i-=1;
                    j+=1;
                }
                return res;
            }
            else if(dir==2)
            {
                let i=row+1;
                while(i<8)
                {
                    for(let num of Enemy)
                    {
                        if(count==ptr) return res;
                        if(num==land[i][col])
                        {
                            res[count]=num;
                            count+=1;
                        }
                    }
                    i+=1;
                }
                return res;
            }
            else if(dir==3)
            {
                let i=col+1;
                let j=row+1;
                while(i<8&&j<8)
                {
                    for(let num of Enemy)
                    {
                        if(count==ptr) return res;
                        if(num==land[j][i])
                        {
                            res[count]=num;
                            count+=1;
                        }
                    }
                    i+=1;
                    j+=1;
                }
                return res;
            }
           
         else if(dir==5)
            {
               
                    for(let num of Enemy)
                    {
                        if(count==ptr) return res;
                        if(num==pos)
                        {
                            res[count]=num;
                          
                        }
                    }
                    
                
                return res;
            }
            else
            {
                console.log("输入方向不合法");
                return res;
            }
        }
    
    
    
    static getOnes(ZB:number[]){
    
    MessageCenter.MakeSHMessage("AM",ZB,1,null,"getOnes")
    
    
    
    }
    
    static clean(){
        GeZiManager.GeZi=0;
        GeZiManager.AT=0;
        GeZiManager.JL=0;
        GeZiManager.free=0;
        GeZiManager.dm=0;
        GeZiManager.GeZis=[];
       
      }
    
    static theDIS(){}
    
    
    static getAllOZB(){
    let k=[]
    for(let a of GeZiManager.AllObstacles){
      if (a instanceof grass==false&&a.getComponent(realThing)) {
        k.push (a.getComponent(realThing).ZB)
      }
       
    }
    return k
    }
    
    static blueC(ZB,x){
        GeZiManager.blue.push(ZB)
    
    switch (x) {
        case 2:GeZiManager.by[0]+=1
     
            break;
            case 3:GeZiManager.by[1]+=1
          
            break;
            case 4:GeZiManager.by[2]+=1
            
            break;
    
        default:
            break;
    }
    
    if (x==2) {
       GeZiManager.LSban=[7]
    }
    if (x==3) {
        GeZiManager.LSban=[6]
     }
     if (x==4) {
        GeZiManager.LSban=[5]
     }
    }
    
    
    static redC(ZB,x){
        GeZiManager.red.push(ZB)
    
    switch (x) {
        case 5:GeZiManager.by[3]+=1
       
            break;
            case 6:GeZiManager.by[4]+=1
           
          
            break;
            case 7:GeZiManager.by[5]+=1
            
            break;
    
        default:
            break;
    }
    
    if (x==7) {
        GeZiManager.LSban=[2]
    }
    if (x==6) {
        GeZiManager.LSban=[3]
     }
     if (x==5) {
        GeZiManager.LSban=[4]
     }
    }
    
    static mArr1Arr2<T>(...arrays: T[][]): T[] {
        const mergedArray: T[] = [].concat(...arrays);
        return mergedArray;
      }
    
    
    
    
      static getF(N:number,dis:number){
        let x;
        let y;
          let j=[]  
                if(N%8==0){x=8}else {x=N%8;}
            y=Math.ceil(N/8);
          for(let o of this.YuanGong){
    
            if(Math.abs(x-o.X)+Math.abs(y-o.Y)>=dis){ }
            else{j.push(o.ZB)}
          }
       
    return j
    
    
    
      }



static Baos(ZB:number){

if (GeZiManager.aos.includes(ZB)) {
    if (GeZiManager.grass.includes(ZB)) {
        return 0.5
    }else {return 1}
}else {
    if (GeZiManager.grass.includes(ZB)) {
        return 0.5
    }else {return 0} }
}



static Bret(ZB:number){

    if (GeZiManager.BanMove.includes(ZB)&&GeZiManager.YINXR.includes(ZB)==false) {
        if (GeZiManager.grass.includes(ZB)&&turn.DorN=="nigth") {
            return 0.5
        }else {return 1}
    }else { if (GeZiManager.grass.includes(ZB)&&turn.DorN=="nigth") {
        return 0.5
    }else {return 0}}
    }



    static fadeOutAndDisappear(node: Node, duration: number) {
 
        tween(node.getComponent(UIOpacity))
        .to(duration/1000,{opacity:0})
    
        .start()
       }
       
       static   fadeINAndA(node:Node, duration:number) {
        tween(node.getComponent(UIOpacity))
       
        .to(duration/1000,{opacity:255})
      
        .start()
       }
getc(nu:number){

if (nu>=10) {
  let k=nu.toString()
  let j
  switch (k[0]) {
    case "1":j=GeZiManager.P1
      break;
      case "2":j=GeZiManager.P2
      break;
      case "3":j=GeZiManager.P3
      break;
      case "4":j=GeZiManager.P4
      break;
      case "5":j=GeZiManager.P5
      break;
      case "6":j=GeZiManager.P6
      break;
    default:
      break;
  }
 return j.CHF[parseInt(k[1])]
}else{
  switch (nu) {
    
    
     case 1:return GeZiManager.P1
        
        break;
        case 2:return GeZiManager.P2
        
        break;
        case 3:return GeZiManager.P3
        
        break;
        case 4:return GeZiManager.P4
        
        break;
        case 5:return GeZiManager.P5
        
        break;
        case 6:return GeZiManager.P6
        
        break;
  case -10:return new realThing()
     default:return null
        break;


  }}
  } 

    }
    