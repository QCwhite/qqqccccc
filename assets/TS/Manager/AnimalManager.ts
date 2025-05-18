// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Node, Prefab, SpriteAtlas, find, instantiate, Sprite, UIOpacity, resources } from 'cc';


import realThing from "../BASE/realThing";
import DES from "../Ditu/des/DES";
import DESManager from "../Ditu/des/DESManager";
import S00 from "../Scharacter/S00";
import S01 from "../Scharacter/S01";
import S02 from "../Scharacter/S02";
import S03 from "../Scharacter/S03";
import S04 from "../Scharacter/S04";
import S06 from "../Scharacter/S06";
import S07 from "../Scharacter/S07";
import S09 from "../Scharacter/S09";
import S14 from "../Scharacter/S14";
import S17 from "../Scharacter/S17";
import turn from "../game/time/turn";

import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import GeZiManager from "./GeZiManager";
import ManagerBase from "./ManagerBase";
import { SHMessage } from "../Message/SHMessage";
import Character from "../BASE/Character";
import player from "../game/player";
import state from "../game/time/state";
import Obstacles from "../BASE/ Obstacles";
import qizi from "../../node/Dixing/qizi";
import Qin from "../BASE/qin";
import { gif1 } from "../BASE/spineANDgif/gif";
import shopM from "../UIS/shop/ShopM";
import S05 from "../Scharacter/S05";
import fireball from "../Ditu/des/fireball";
import SXX from "../Scharacter/SXX";
import TNanager from "./TNanager";
import ZManager from "./ZManager";
import grass from "../../node/Dixing/grass";
import box from "../../node/Dixing/box";
import NWshopM from "../UIS/shop/NWshopM";
import grassQ from "../../node/Dixing/grassQ";
import JNUM from "../UIS/else/JNUmanager";
import S10 from "../Scharacter/S10";
import Wpig from "../dNM/Wpig";

import NG from "../../node/Dixing/NG";
import Wsheep from "../dNM/Wsheep";
import GeZi from "../Ditu/Gezi/GeZi";
import TG from "../../node/Dixing/TG";
import FH from "../../node/Dixing/FHT";
import FHT from "../../node/Dixing/FHT";
import KHD2 from "../Message/KHD2";

import { UIComponent } from '../../../extensions/plugin-import-2x/creator/components/UIComponent';

import { color } from 'cc';
import Wdog from '../dNM/Wdog';
import tree from '../../node/Dixing/tree';
import Wwa from '../dNM/Wwa';
import { AudioManager } from '../BASE/music';
import { WebSocketManager } from '../Message/websocket';
import { TUJ } from '../../node/Dixing/TUJ';
import { sp } from 'cc';
import { Material } from 'cc';
import { SubtitleManager } from '../UIS/baom';
import FHT2 from '../../node/Dixing/FHT2';


const {ccclass, property} = _decorator;

@ccclass
export default class AnimalManager extends ManagerBase {


ac:Node[]=[]
P1SN:number=0;
 P2SN:number=0;   
 P3SN:number=0;
 P4SN:number=0;
 P5SN:number=0;
 P6SN:number=0;
juese:string[]=["SXX","S09","S02","S05","S04","S00","S01"];
@property(Prefab)
 s00:Prefab=null;
 @property(Prefab)
 s01:Prefab=null;
 @property(Prefab)
s02:Prefab=null;;
 @property(Prefab)
 s03:Prefab=null;;
 @property(Prefab)
 s04:Prefab=null;;
 @property(Prefab)
 s05:Prefab=null;;
 @property(Prefab)
 s06:Prefab=null;;
 @property(Prefab)
 s07:Prefab=null;;
 @property(Prefab)
 s08:Prefab=null;
 @property(Prefab)
 s09:Prefab=null;
 @property(Prefab)
 s10:Prefab=null;;
 @property(Prefab)
 s11:Prefab=null;
 @property(Prefab)
s12:Prefab=null;;
 @property(Prefab)
 s13:Prefab=null;;
 @property(Prefab)
 s14:Prefab=null;;
 @property(Prefab)
 s15:Prefab=null;;
 @property(Prefab)
 s16:Prefab=null;;
 @property(Prefab)
 s17:Prefab=null;;
 @property(Prefab)
 s18:Prefab=null;
 @property(Prefab)
 s19:Prefab=null;
 @property(Prefab)
 s20:Prefab=null;;
P1P:Character=null;
messageType: String="AM"

 YuanGong:realThing[]=[];
static FF:number[]=[]


@property(Prefab)
 FDUIs:Prefab=null;;
 @property(Prefab)
 FH2:Prefab=null;;
 @property(Prefab)
 FH:Prefab=null;;
@property(Prefab)
tree:Prefab=null;;
@property(Prefab)
rock:Prefab=null;;
@property(Prefab)
DL:Prefab=null;;
@property(Prefab)
banana:Prefab=null;
@property(Prefab)
Apple:Prefab=null;
@property(Prefab)
fireball:Prefab=null;
@property(Prefab)
GE:Prefab=null;
@property(Prefab)
qin:Prefab=null;
@property(Prefab)
qizi:Prefab=null;
@property(Prefab)
water:Prefab=null;
@property(Prefab)
grass:Prefab=null;
@property(Prefab)
grassQ:Prefab=null;
@property(Prefab)
box:Prefab=null;
@property(Prefab)
sheep:Prefab=null;
@property(Prefab)
cow:Prefab=null;
@property(Prefab)
wa:Prefab=null;
@property(Prefab)
pig:Prefab=null;
@property(Prefab)
dog:Prefab=null;
@property(Prefab)
ng:Prefab=null;
@property(Prefab)
tg:Prefab=null;

@property(Prefab)
tuj:Prefab=null;
@property(Prefab)
tuj2:Prefab=null;
@property(SpriteAtlas)
TouX:SpriteAtlas=null;
@property(Material)
 NB:Material=null


 @property(Prefab)
 tooltipPrefab:Prefab=null;
makeDL(ZB:number){
if (!GeZiManager.aos.includes(ZB)) {
    let DL=instantiate(this.DL)

    //GeZiManager.DL.push([ZB,3])
    GeZiManager.AllObstacles.push(DL.getComponent(DES))
    GeZiManager.aos.push(ZB)
    DL.setParent(this.node)
    DL.getComponent(realThing).ghost=true;
    DL.getComponent(realThing).ZB=ZB;
    DL.getComponent(realThing).setXY(0.8);
    DL.getComponent(realThing).moveto(0,ZB)
    if (GeZiManager.grass.includes(ZB)) {
       if (KHD2.PT.includes(GeZiManager.PCP.Pturn)) {
        DL.getComponent(UIOpacity).opacity=155;
       } else{DL.active =false}
    }

    function isDarkSquare(n) {
        // 校验输入是否在 1~64 范围内
        if (n < 1 || n > 64) return false;
    
        // 计算行号与列号
        const row = Math.floor((n - 1) / 8) + 1;
        const col = (n - 1) % 8 + 1;
    
        // 判断是否为深色格（行号+列号为奇数）
        return (row + col) % 2 === 1;
    }


if (isDarkSquare(ZB)) {
    DL.getChildByName('d').getComponent(gif1).color=color(181,231,191)
}

SubtitleManager.show(
    {
        bgSprite:GeZiManager.PCP.color,
        image1:GeZiManager.PCP.getComponent(SXX).Toux,
        text1: "偷偷放了一个地雷",
        image2: DL.children[0].getComponent(Sprite).spriteFrame,
        text2: "",
        duration: 3
    })
   
}

 
}

makeNG(ZB:number){
    if (!GeZiManager.aos.includes(ZB)) {
        let NG1=instantiate(this.ng)
       // NG1.getComponent(NG).DJ=NWshopM.NGS
       NG1.getComponent(NG).DJ=2
        //GeZiManager.DL.push([ZB,3])
    //    GeZiManager.AllObstacles.push(NG1.getComponent(DES))
       // GeZiManager.aos.push(ZB)
       NG1.setParent(this.node)
       // NG1.getComponent(realThing).ghost=true;
        NG1.getComponent(realThing).ZB=ZB;
        NG1.getComponent(NG).VC()
        NG1.getComponent(realThing).setXY(0.8);
        NG1.getComponent(realThing).moveto(0,ZB)
        NG1.getComponent(realThing).M="正常";
        this.node.getComponent(AnimalManager).YuanGong.push(NG1.getComponent(realThing))
 
for(let a of GeZiManager.AllObstacles){
        if(GeZiManager.grass.includes(a.ZB)&&this.getNIG(ZB).includes(a.ZB)){
                
a.node.getComponent(UIOpacity).opacity=155


        }

    
     
    }
    NG1.getComponent(UIOpacity).opacity=255 
    SubtitleManager.show(
        {
            bgSprite:GeZiManager.PCP.color,
            image1:GeZiManager.PCP.getComponent(SXX).Toux,
            text1: "放置了一个照亮世界的南瓜",
            image2:  NG1.getComponent(Sprite).spriteFrame,
            text2: "",
            duration: 3
        })
    }

}

    

makeTree(ZB:number,n:number){

let tree1=instantiate(this.tree)
tree1.setParent(this.node)
tree1.getComponent(realThing).ZB=ZB;
tree1.getComponent(realThing).WD=true;
tree1.getComponent(realThing).M="扎了根";

tree1.getComponent(realThing).moveto(0,ZB)
tree1.getComponent(realThing).setXY(0);
this.node.getComponent(AnimalManager).YuanGong.push(tree1.getComponent(realThing))
tree1.getComponent(realThing).HP=2;
if (n==1) {
    tree1.getComponent(tree).app=true
 //   tree1.getComponent(gif1).color= color(255,0,0)
}
GeZiManager.trees.push(ZB)

}
makeRock(ZB:number){


let rock=instantiate(this.rock)
rock.setParent(this.node)
rock.getComponent(realThing).ZB=ZB;
rock.getComponent(realThing).WD=true;
rock.getComponent(realThing).M="沉甸甸";
GeZiManager.rock.push(ZB);
rock.getComponent(realThing).tt="rock"
rock.getComponent(realThing).moveto(0,ZB)
rock.getComponent(realThing).setXY(0);
this.node.getComponent(AnimalManager).YuanGong.push(rock.getComponent(realThing))
rock.getComponent(realThing).HP=5;
GeZiManager.trees.push(ZB)
}

makeBox(ZB:number,type:number){


    let box1=instantiate(this.box)
   box1.setParent(this.node)
   box1.getComponent(box).ZB=ZB;
  
  
    box1.getComponent(realThing).M="正常";
   // GeZiManager.rock.push(ZB);

   box1.getComponent(box).moveto(0,ZB)
   box1.getComponent(realThing).setXY(0);
    this.node.getComponent(AnimalManager).YuanGong.push(box1.getComponent(realThing))
    box1.getComponent(box).sk(type);
    box1.getComponent(box).move(5,1)
    GeZiManager.boxs.push(ZB)

    }
    makePig(ZB:number,type:number){
//let j=parseInt(type);

        let pig1=instantiate(this.pig)
        pig1.setParent(this.node)
        pig1.getComponent(Wpig).ZB=ZB;
   // GeZiManager.boxs.push(ZB)

   pig1.getComponent(Wpig).M="正常";
       // GeZiManager.rock.push(ZB);
    
       pig1.getComponent(Wpig).moveto(0,ZB)
        this.node.getComponent(AnimalManager).YuanGong.push(pig1.getComponent(Wpig))
        pig1.getComponent(Wpig).T=4;
        pig1.getComponent(Wpig).faceTo=type
        pig1.getComponent(Wpig).move(5,1)
       
    
        }



        makecow(ZB:number,type:number){
            //let j=parseInt(type);
            
                    let pig1=instantiate(this.cow)
                    pig1.setParent(this.node)
                    pig1.getComponent(Wpig).ZB=ZB;
               // GeZiManager.boxs.push(ZB)
            
               pig1.getComponent(Wpig).M="正常";
                   // GeZiManager.rock.push(ZB);
                
                   pig1.getComponent(Wpig).moveto(0,ZB)
                    this.node.getComponent(AnimalManager).YuanGong.push(pig1.getComponent(Wpig))
                    pig1.getComponent(Wpig).T=4;
                    pig1.getComponent(Wpig).faceTo=type
                    pig1.getComponent(Wpig).move(5,1)
                   
                
                    }
        makeDog(ZB:number,type:number){
            //let j=parseInt(type);
            
                    let dog1=instantiate(this.dog)
                    dog1.setParent(this.node)
                    dog1.getComponent(Wdog).ZB=ZB;
               // GeZiManager.boxs.push(ZB)
            
               dog1.getComponent(Wdog).M="正常";
                   // GeZiManager.rock.push(ZB);
                
                   dog1.getComponent(Wdog).moveto(0,ZB)
                    this.node.getComponent(AnimalManager).YuanGong.push(dog1.getComponent(Wdog))
                    dog1.getComponent(Wdog).T=4;
                    dog1.getComponent(Wdog).faceTo=type
                    dog1.getComponent(Wdog).move(5,1)
                   
                
                    }
        makeSheep(ZB:number,type:number){
            //let j=parseInt(type);
            
                    let sheep1=instantiate(this.sheep)
                    sheep1.setParent(this.node)
                    sheep1.getComponent(Wsheep).ZB=ZB;
               // GeZiManager.boxs.push(ZB)
                    sheep1.getComponent(Wsheep).M="正常";
                   // GeZiManager.rock.push(ZB);
                    sheep1.getComponent(Wsheep).moveto(0,ZB)
                    this.node.getComponent(AnimalManager).YuanGong.push(sheep1.getComponent(Wsheep))
                    sheep1.getComponent(Wsheep).T=type;
                    sheep1.getComponent(Wsheep).faceTo=type
                    sheep1.getComponent(Wsheep).move(5,1)
                   
                
                    }


                    makewa(ZB:number,type:number){
                        //let j=parseInt(type);
                        
                                let sheep1=instantiate(this.sheep)
                                sheep1.setParent(this.node)
                                sheep1.getComponent(Wwa).ZB=ZB;
                           // GeZiManager.boxs.push(ZB)
                                sheep1.getComponent(Wwa).M="正常";
                               // GeZiManager.rock.push(ZB);
                                sheep1.getComponent(Wwa).moveto(0,ZB)
                                this.node.getComponent(AnimalManager).YuanGong.push(sheep1.getComponent(Wsheep))
                                sheep1.getComponent(Wwa).T=type;
                                sheep1.getComponent(Wwa).faceTo=type
                                sheep1.getComponent(Wwa).move(5,1)
                               
                            
                                }





                                
makeFireball(ZB:number,sh:number){

    let fireball1=instantiate(this.fireball)
    fireball1.setParent(this.node);
   
    
   fireball1.getComponent(realThing).ghost=true;
   fireball1.getComponent(realThing).ZB=ZB;
    fireball1.getComponent(realThing).setXY(0.8);
    fireball1.getComponent(realThing).moveto(0,ZB)
    fireball1.getComponent(fireball).SH=sh;
  
GeZiManager.clean();


}

makeFH(ZB:number,sh:number){

    let fireball1=instantiate(this.FH)
    fireball1.setParent(this.node);
   
    
   fireball1.getComponent(realThing).ghost=false;
   fireball1.getComponent(realThing).ZB=ZB;
    fireball1.getComponent(realThing).setXY(0.8);
    fireball1.getComponent(realThing).moveto(0,ZB)
    fireball1.getComponent(FHT).turn=sh;
    fireball1.getComponent(FHT).FT=turn.turn;
let j=0
    if (sh%2==1) {
        j=GeZiManager.Bhun;  GeZiManager.Bhun=0;
       }else { j= GeZiManager.Rhun;   GeZiManager.Rhun=0}
       GeZiManager.getHUN()
       fireball1.getComponent(FHT).HP=j
GeZiManager.clean();

SubtitleManager.show(
                    {
                        bgSprite:GeZiManager.PCP.color,
                        image1:GeZiManager.PCP.getComponent(SXX).Toux,
                        text1: "使用仪式复活了",
                        image2: GeZiManager.PCP.getc(sh).getComponent(SXX).Toux,
                        text2: "",
                        duration: 3
                    })
}
makeFHR(ZB:number,sh:number){

    GeZiManager.Tcharacter=  GeZiManager.Tcharacter.getc(sh)

      //  this.node.children[0].getComponent(gif1).moveToNextFrame(0,11,0);
        GeZiManager.Tcharacter.FH2(this.ZB,turn.turn, GeZiManager.Tcharacter.MaxHP)

    


   


}

makeFH2(ZB:number,sh:number){

    let fireball1=instantiate(this.FH2)
    fireball1.setParent(this.node);
   
    
   fireball1.getComponent(realThing).ghost=false;
   fireball1.getComponent(realThing).ZB=ZB;
    fireball1.getComponent(realThing).setXY(0.8);
    fireball1.getComponent(realThing).moveto(0,ZB)
    fireball1.getComponent(FHT2).turn=sh;
  //  fireball1.getComponent(FHT).FT=turn.turn;
let j=0
   // if (sh%2==1) {
      //  j=GeZiManager.Bhun;  GeZiManager.Bhun=0;
     //  }else { j= GeZiManager.Rhun;   GeZiManager.Rhun=0}
       //GeZiManager.getHUN()
     //  fireball1.getComponent(FHT).HP=j
GeZiManager.clean();

SubtitleManager.show(
                    {
                        bgSprite:GeZiManager.PCP.color,
                        image1:GeZiManager.PCP.getComponent(SXX).Toux,
                        text1: "在等待复活",
                        image2: GeZiManager.PCP.getc(sh).getComponent(SXX).Toux,
                        text2: "",
                        duration: 3
                    })
}
makeTG(ZB:number,type:string){

    let q=instantiate(this.tg)


    q.getComponent(realThing).tt="TG";
    q.setParent(this.node)
   q.getComponent(realThing).ghost=true;
    q.getComponent(realThing).ZB=ZB;
    q.getComponent(TG).N=type;
    q.getComponent(TG).k()
    q.getComponent(realThing).setXY(0.8);
    q.getComponent(realThing).moveto(0,ZB)
   // q.getComponent(gif).changeF(type,1);
    
}

makeQin(ZB:number,type:number){

    let q=instantiate(this.qin)


    q.getComponent(realThing).tt="qin";
    q.setParent(this.node)
   q.getComponent(realThing).ghost=true;
    q.getComponent(realThing).ZB=ZB;
    GeZiManager.qin.push(q.getComponent(Qin))  
    GeZiManager.qins.push(q.getComponent(realThing).ZB)  
    q.getComponent(Qin).type=type;
    q.getComponent(realThing).M="正常";;
    q.getComponent(realThing).setXY(0.8);
    q.getComponent(realThing).moveto(0,ZB)
   // q.getComponent(gif).changeF(type,1);
    
}


makeGE(ZB:number,Type:number){


    let GE=instantiate(this.GE);
    GE.setParent(this.node);
    
    GE.getComponent(realThing).ZB=ZB;
    GE.getComponent(realThing).moveto(0,ZB)
    GE.getComponent(realThing).setXY(0.8);
   GE.getComponent(realThing).ghost=true;
   
   
    
   GE.getComponent(realThing).ooo=Type;


}
makeBanan(ZB:number){
    let banana=instantiate(this.banana) 
    banana.setParent(this.node)
    banana.getComponent(realThing).ghost=true;
    banana.getComponent(realThing).ZB=ZB;
    banana.getComponent(realThing).setXY(0.8);
    banana.getComponent(realThing).moveto(0,ZB)
    GeZiManager.AllObstacles.push(banana.getComponent(DES))
    GeZiManager.aos.push(ZB)
    if (GeZiManager.grass.includes(ZB)) {
        if (KHD2.PT.includes(GeZiManager.PCP.Pturn)) {
         banana.getComponent(UIOpacity).opacity=155;
        } else{banana.active =false}

     }
     console.log(ZB)
     console.log(banana)
     }
     makeAPP(ZB:number){
        let banana=instantiate(this.Apple) 
        banana.setParent(this.node)
        banana.getComponent(realThing).ghost=true;
        banana.getComponent(realThing).ZB=ZB;
        banana.getComponent(realThing).setXY(0.8);
        banana.getComponent(realThing).moveto(0,ZB)
        GeZiManager.AllObstacles.push(banana.getComponent(DES))
        GeZiManager.aos.push(ZB)
        if (GeZiManager.grass.includes(ZB)) {
            if (KHD2.PT.includes(GeZiManager.PCP.Pturn)) {
             banana.getComponent(UIOpacity).opacity=155;
            } else{banana.active =false}
         }

         console.log(banana)
         }
    makeFlag(ZB:number,c:string){
        let qizi1=instantiate(this.qizi)

        
        qizi1.setParent(this.node)
        qizi1.getComponent(realThing).ghost=true;
        qizi1.getComponent(realThing).ZB=ZB;
        qizi1.getComponent(realThing).setXY(0.8);
        qizi1.getComponent(realThing).moveto(0,ZB)
       if(c=="S02") {
        qizi1.getComponent(qizi).color="S02"
        this.node.getComponent(JNUM).JNF("S海盗旗",GeZiManager.PCP.ZB)  
       }else {
        qizi1.getComponent(qizi).color=c
       }
       this.node.getComponent(AnimalManager).YuanGong.push(qizi1.getComponent(realThing))
        console.log(   qizi1.getComponent(qizi).color)
        qizi1.getComponent(qizi).FZ();
        GeZiManager.AllObstacles.push(qizi1.getComponent(DES))
        GeZiManager.aos.push(ZB)
       
        }
        makeTUJ(ZB:number,c:string){
            let qizi1=instantiate(this.tuj)
    
            
            qizi1.setParent(this.node)
            qizi1.getComponent(realThing).ghost=true;
            qizi1.getComponent(realThing).ZB=ZB;
            qizi1.getComponent(realThing).setXY(0.8);
            qizi1.getComponent(realThing).moveto(0,ZB+8)
       
          
           turn.Roo.push( qizi1.getComponent(TUJ))
           this.node.getComponent(AnimalManager).YuanGong.push(qizi1.getComponent(realThing))
            console.log(   qizi1.getComponent(qizi).color)
            qizi1.getComponent(qizi).FZ();
            GeZiManager.AllObstacles.push(qizi1.getComponent(DES))
            GeZiManager.aos.push(ZB)

            let qizi2=instantiate(this.tuj2)
    
            
            qizi2.setParent(this.node)
            qizi2.getComponent(realThing).ghost=true;
            qizi2.getComponent(realThing).ZB=ZB;
            qizi2.getComponent(realThing).setXY(0);
            qizi2.getComponent(realThing).moveto(0,ZB-8)
            qizi1.getComponent(TUJ).node1= qizi2

if (c=="Red") {
    qizi1.children[0].getComponent(Sprite).color= color(255,0,0)
    qizi2.children[0].getComponent(Sprite).color= color(255,0,0)
}else{

    qizi1.children[0].getComponent(Sprite).color= color(0,0,255)
    qizi2.children[0].getComponent(Sprite).color= color(0,0,255)


}
          







           
            }
        makeGrass(ZB:number,c:number){
            let G=instantiate(this.grass)
    let GTT=instantiate(this.grassQ)
            
           G.setParent(this.node)
           G.getComponent(realThing).ghost=true;
           G.getComponent(realThing).ZB=ZB;
           G.getComponent(realThing).setXY(0);
           G.getComponent(grass).FZ();
           G.getComponent(realThing).moveto(0,ZB)
           G.getComponent(grass).FW=[ZB]
 //G.rotation-=(G.getComponent(realThing).x-4)*2


            GTT.setParent(this.node)
            GTT.getComponent(realThing).ghost=true;
            GTT.getComponent(realThing).ZB=ZB;
           GTT.getComponent(realThing).setXY(0);
            GTT.getComponent(realThing).moveto(0,ZB)
            GTT.getComponent(UIOpacity).opacity=0
    
          //  GTT.rotation-=(G.getComponent(realThing).x-4)*2
           // G.getComponent(qizi).FZ();
          GeZiManager.grass.push(ZB)
          GeZiManager.GR.push(G.getComponent(grass))
          GeZiManager.AllObstacles.push(G.getComponent(DES))
          G.getComponent(grass).grassQ=GTT.getComponent(grassQ)
            this.node.getComponent(AnimalManager).YuanGong.push(G.getComponent(realThing))
            }

            makeWaterPool(ZB:number,c:number){
                let wat=instantiate(this.water)
        
                
                wat.setParent(this.node)
                wat.getComponent(realThing).ghost=true;
                wat.getComponent(realThing).ZB=ZB;
                wat.getComponent(DES).FW=[ZB]
                wat.getComponent(realThing).setXY(0.8);
                wat.getComponent(realThing).moveto(0,ZB)
                GeZiManager.waterPool.push(ZB)
                GeZiManager.AllObstacles.push(wat.getComponent(DES))
                this.node.getComponent(AnimalManager).YuanGong.push(wat.getComponent(realThing))
                }




start(): void {
this.addck();
setTimeout(()=>{AudioManager.instance.ZJP("bgm",4, {loop: true,
    volume: 0.7,
    fadeIn: 2})

    AudioManager.instance.ZJP("nature",0, {loop: true,
        volume: 0.8,
        fadeIn: 2});
    AudioManager.instance.ZJP("nature",1, {loop: true,
        volume: 0.8,
        fadeIn: 2})},200)


   GeZiManager.PCP=GeZiManager.P1;
 if ( WebSocketManager.instance.ws) {
    let a=KHD2.PT.length
   if (a>3) {
    a=3
   }
   
  const data = {
   id:6,
    value:a
  
  };




  WebSocketManager.instance.ws.send(JSON.stringify(data))
 }  
console.log(MessageCenter.Text)











}








static getc(nu:number){


    switch (nu) {
      case -1:break;
      
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
    
       default:
          break;
    }
    } 
  









onLoad(): void {
  
  
    MessageCenter.addReceive(this);

    resources.loadDir("resources", (err, assets) => {
        if (err) {
            console.error(err);
            return;
        }
        // assets 参数是一个包含所有加载资源的数组
        console.log(assets); // 这里可以处理加载的资源
    });
   
   
   
   
   
     
     
       
      
       
     
      GeZiManager. blueP=[ GeZiManager.P1,GeZiManager.P3,GeZiManager.P5];
      for(let m of GeZiManager.p6F){console.log(GeZiManager.p6F[0].P6F());m.P6F();}       
   GeZiManager.redP=[ GeZiManager.P2,GeZiManager.P4,GeZiManager.P6];
    /*   let landnei:number[]=[19,20,21,22,27,28,29,30,35,36,37,38,43,44,45,46];
       let landwai:number[]=[10,11,12,13,14,15,18,23,26,31,34,39,42,47,50,51,52,53,54,55];
       let num1:number;
       let num2:number;
       let num3:number;
       function getRandomInt(min: number, max: number): number {
           min = Math.ceil(min);
           max = Math.floor(max);
           return Math.floor(Math.random() * (max - min + 1)) + min;
         }
       //第一个障碍物,num1是位置
       let t1=getRandomInt(1,10);
       if(t1>=1&&t1<=3)
       {
           let t2=getRandomInt(0,19);
           num1=landwai[t2];
       }
       else
       {
           let t2=getRandomInt(0,15);
           num1=landnei[t2];
       }
       //第二个,num2是位置
       let t3=getRandomInt(1,10);
       if(t3>=1&&t3<=3)
       {
           let t4=getRandomInt(0,19);
           let temp=landwai[t4];
           while(temp==num1+1||temp==num1-1||temp==num1+8||temp==num1-8||temp==num1)
           {
               t4=getRandomInt(0,19);
               temp=landwai[t4];
           }
           num2=temp;
       }
       else
       {
           let t4=getRandomInt(0,15);
           let temp=landnei[t4];
           while(temp==num1+1||temp==num1-1||temp==num1+8||temp==num1-8||temp==num1)
           {
               t4=getRandomInt(0,15);
               temp=landnei[t4];
           }
           num2=temp;
       }
       //第三个,num3是位置
       let t5=getRandomInt(1,10);
       if(t5>=1&&t5<=3)
       {
           let t6=getRandomInt(0,19);
           let temp2=landwai[t6];
           while(temp2==num1+1||temp2==num1-1||temp2==num1+8||temp2==num1-8||temp2==num2+1||temp2==num2-1||temp2==num2+8||temp2==num2-8||temp2==num2||temp2==num1)
           {
               t6=getRandomInt(0,19);
               temp2=landwai[t6];
           }
           num3=temp2;
       }
       else
       {
           let t6=getRandomInt(0,15);
           let temp2=landnei[t6];
           while(temp2==num1+1||temp2==num1-1||temp2==num1+8||temp2==num1-8||temp2==num2+1||temp2==num2-1||temp2==num2+8||temp2==num2-8||temp2==num2||temp2==num1)
           {
               t6=getRandomInt(0,15);
               temp2=landnei[t6];
           }
           num3=temp2;
       }
    //  AnimalManager.FF=[num1,num2,num3]
   */
      
  console.log(MessageCenter.Text)

  let Sb=[]
  let s1,s2,s3
  s1=this.addZ([2,3,4],[2,3],Sb)
  Sb.push(s1)
  s2=this.addZ([5,6,7],[2,3],Sb)

  Sb.push(s2)
  s3=this.addZ([0],[2],Sb)


    GeZiManager.BanMove.push(s1)
GeZiManager.BanMove.push(s2)
GeZiManager.BanMove.push(s3)
  

  AnimalManager.FF=[s1,s2,s3]







}


//GeZiManager.blueBan();
FTP(i:number){
    let a,k
    switch (i) {
        case 1:k=GeZiManager.P1
            
            break;
            case 2:k=GeZiManager.P2
            
            break;
            case 3:k=GeZiManager.P3
            
            break;
            case 4:k=GeZiManager.P4
            
            break;
            case 5:k=GeZiManager.P5
            
            break;
            case 6:k=GeZiManager.P6
            
            break;
        default:k=GeZiManager.P1
            break;
    }
 /* if ([1,3,5].includes(i)) {
  k=7 
  }else{k=8}
    switch (this.juese[k]) {
        case "S00":a=instantiate(this.s00);
            
            break;
            case "S01":a=instantiate(this.s01);
            
            break;
            case "S02":a=instantiate(this.s02);
            
            break;
            case "S03":a=instantiate(this.s03);
            
            break;
            case "S04":a=instantiate(this.s04);
            
            break;
            case "S05":a=instantiate(this.s05);
            
            break;
            case "S06":a=instantiate(this.s06);
            
            break;
            case "S07":a=instantiate(this.s07);
            
            break;
            case "S08":a=instantiate(this.s08);
            
            break;
            case "S09":a=instantiate(this.s09);
            
            break;
            case "S10":a=instantiate(this.s10);
            
            break;
        default:a=instantiate(this.s02);
            break;
    }
    a.getComponent(Character).Pturn=i;
  a.setParent(this.node);
  this.addReceive(a.getComponent(Character))

let j=find("Canvas/UIManager/sideUIS")

switch (i) {
    case 1:GeZiManager.P1=a.getComponent(Character);j.children[i-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[i])
        
        break;
        case 2:GeZiManager.P2=a.getComponent(Character);j.children[i-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[i])
        
        break;
        case 3:GeZiManager.P3=a.getComponent(Character);j.children[i-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[i])
        
        break;
        case 4:GeZiManager.P4=a.getComponent(Character);j.children[i-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[i])
        
        
        break;
        case 5:GeZiManager.P5=a.getComponent(Character);j.children[i-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[i])
        
        
        break;
        case 6:GeZiManager.P6=a.getComponent(Character);j.children[i-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[i])
        
        
        break;

    default:
        break;
}
  
*/
state.ST=0.5
MessageCenter.MakeMessage("UIManager","change",-1);
GeZiManager.Tcharacter=a.getComponent(Character)
GeZiManager.GeZi=GeZiManager.PCP.ZB

for(let manager of GeZiManager.YuanGong){
let a=new Message("",[65],-1)
    manager.ReceiveMessage(a) ;   
}
MessageCenter.MakeMessage("AM",turn.turn,"getZB")

for(let manager of GeZiManager.YuanGong){
manager.getFar(5+GeZiManager.JL);}


}

addck(){
let c=[null,GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]
for (let index =1; index <=6; index++) {
    let a
    switch (this.juese[index]) {
        case "S00":a=instantiate(this.s00);
            
            break;
            case "S01":a=instantiate(this.s01);
            
            break;
            case "S02":a=instantiate(this.s02);
            
            break;
            case "S03":a=instantiate(this.s03);
            
            break;
            case "S04":a=instantiate(this.s04);
            
            break;
            case "S05":a=instantiate(this.s05);
            
            break;
            case "S06":a=instantiate(this.s06);
            
            break;
            case "S07":a=instantiate(this.s07);
            
            break;
            case "S08":a=instantiate(this.s08);
            
            break;
            case "S09":a=instantiate(this.s09);
            
            break;
            case "S10":a=instantiate(this.s10);
            
            break;

            case "S11":a=instantiate(this.s11);
            
            break;
            case "S12":a=instantiate(this.s12);
            
            break;
            case "S13":a=instantiate(this.s13);
            
            break;
            case "S14":a=instantiate(this.s14);
            
            break;
            case "S15":a=instantiate(this.s15);
            
            break;
            case "S16":a=instantiate(this.s16);
            
            break;
            case "S17":a=instantiate(this.s07);
            
            break;
        default:a=instantiate(this.s02);
            break;
    }
    a.getComponent(Character).Pturn=index;
  a.setParent(this.node);
  this.addReceive(a.getComponent(Character))
if(index==1){
    GeZiManager.PCP=a.getComponent(Character)
}
let j=find("Canvas/Main Camera/UIManager/sideUIS")

switch (index) {
    case 1:GeZiManager.P1=a.getComponent(Character);j.children[index-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[index])
        
        break;
        case 2:GeZiManager.P2=a.getComponent(Character);j.children[index-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[index])
        
        break;
        case 3:GeZiManager.P3=a.getComponent(Character);j.children[index-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[index])
        
        break;
        case 4:GeZiManager.P4=a.getComponent(Character);j.children[index-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[index])
        
        
        break;
        case 5:GeZiManager.P5=a.getComponent(Character);j.children[index-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[index])
        
        
        break;
        case 6:GeZiManager.P6=a.getComponent(Character);j.children[index-1].children[3].children[0].getComponent(Sprite).spriteFrame=this.TouX.getSpriteFrame(this.juese[index])
        
        
        break;

    default:
        break;
}
}

for (let g of GeZiManager.sideUI) {
g.setJN()
    
}



}



  ok(){

console.log("abc")

     MessageCenter.MakeGMessage("AM",[AnimalManager.FF[0]],1.1,1,"FTP");
     
        //   view.enableAutoFullScreen(true); // 启用自动全屏
        
        //game.frame.requestFullscreen();
        
        setTimeout(() => {
            MessageCenter.MakeGMessage("AM",[AnimalManager.FF[1]],1.1,1,"FTP");
        },200);
        
        setTimeout(() => {
            MessageCenter.MakeGMessage("AM",[AnimalManager.FF[2]],2,2,"FTP");
        }, 400);
        
        
        GeZiManager.blueBan();
            
            setTimeout(() => {
                MessageCenter.MakeGMessage("TN",TNanager.makePool(),0,0,"pool") 
            }, 600);
            setTimeout(() => {
          find("Canvas/DituManager/New Node/AnimalManager").getComponent(ZManager).Cx(),800})
  }




static TP(PT:number,ZB:number){
   
AnimalManager.getc(PT).TP(ZB);
       
}
 


ReceiveMessage(message: Message){

        if(message instanceof SHMessage&& message.Type=="JN"){
            GeZiManager.PCP.node.getComponent(SXX).QDS(message.Content)
        console.log(this.name)
        }
     if (message instanceof SHMessage&& message.SHtype=="CX") {
        this.ok()
     }
    if(message.Type==this.messageType){

if(message instanceof SHMessage&& message.SHtype=="FTP"){

switch (message.Content) {
    case 1:this.makeTree(message.Command[0],0);
        
        break;
        case 1.1:this.makeTree(message.Command[0],1);
        
        break;
        case 2:this.makeRock(message.Command[0]);if(state.ST==0&&KHD2.PT.includes(1)){GeZiManager.blueBan()}
        
        break;
        case 3:this.makeDL(message.Command[0]);shopM.A6n[1]-=1;if(this.PPC()){GeZiManager.TNC[5]=2};
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],shopM.A6n[0]+GeZiManager.free,GeZiManager.PCP.Pturn,"Qi-");
        GeZiManager.PCP.Bu.push(5);
        GeZiManager.PCP.DLN-=1;
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.TNJJ[5]+GeZiManager.TNC[5],GeZiManager.PCP.Pturn,"TN-")
        for(let m of GeZiManager.PCP.shop2){m.Shop2(null,false);}
        break;
        case 3.5:this.makeNG(message.Command[0]);shopM.A6n[1]-=1;if(this.PPC()){GeZiManager.TNC[5]=2};MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],2,GeZiManager.PCP.Pturn,"Qi-");GeZiManager.PCP.Bu.push(5);GeZiManager.PCP.DLN-=1;
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.TNJJ[5]+GeZiManager.TNC[5],GeZiManager.PCP.Pturn,"TN-")
        NWshopM.NGS++
        for(let m of GeZiManager.PCP.shop2){m.Shop2(null,false);}
        break;

        case 4:this.makeFireball(message.Command[0],message.Command[1]);
        
        break;
        case 5:this.makeGE
        
        break;
        case 6://this.makeQin(message.Command[0]);
        
        break;
        case 7:this.makeBanan(message.Command[0])
        
        break;
        case 7.1:this.makeAPP(message.Command[0])
        
        break;
        case 8:this.makeFlag(message.Command[0],GeZiManager.PCP.color);
        shopM.A7n[GeZiManager.PCP.Pturn%2+1]-=1;if(this.PPC()){GeZiManager.TNC[5]=2};MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],shopM.A7n[0]+GeZiManager.free,GeZiManager.PCP.Pturn,"Qi-");GeZiManager.PCP.Bu.push(5);
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.TNJJ[5]+GeZiManager.TNC[5],GeZiManager.PCP.Pturn,"TN-")
        for(let m of GeZiManager.PCP.shop2){m.Shop2(null,false);}
        break;
        case 8.1:this.makeFlag(message.Command[0],GeZiManager.PCP.color);
  
    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.getComponent(S10).qz+GeZiManager.free,GeZiManager.PCP.Pturn,"Qi-");
    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.TNJJ[5]+GeZiManager.TNC[5],GeZiManager.PCP.Pturn,"TN-")

    if (GeZiManager.PCP.getComponent(S10).BL[0]==0) {
        GeZiManager.PCP.getComponent(S10).qz++
    }    
   

        break;
        case 8.5:this.makeFlag(message.Command[0],"S02");
       if(this.PPC()){GeZiManager.TNC[5]=2};MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1+GeZiManager.PCP.node.getComponent(S02).qz+GeZiManager.free,GeZiManager.PCP.Pturn,"Qi-");GeZiManager.PCP.Bu.push(5);
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.TNJJ[5]+GeZiManager.TNC[5],GeZiManager.PCP.Pturn,"TN-")
        GeZiManager.PCP.node.getComponent(S02).qz++
        break;

        case 8.2:this.makeFlag(message.Command[0],"null");
    
         break;

        case 9:this.makeTG(message.Command[0],message.Command[1])
        
        break;
        case 10:this.makeQin(message.Command[0],message.Command[1])
        
        break;
        case 11:this.makeGrass(message.Command[0],message.Command[1])
        
        break;
        case 12:this.makeWaterPool(message.Command[0],message.Command[1])
        
        break;
        case 13:this.makeBox(message.Command[0],message.Command[1])
        
        break;
        case 14:this.makeTUJ(message.Command[0],message.Command[1])
        
        break;
        case 21:this.makePig(message.Command[0],message.Command[1])
        
        break;

        case 23:this.makeDog(message.Command[0],message.Command[1])
        
        break;
        case 24:this.makeSheep(message.Command[0],message.Command[1])
        
        break;

        case 25:this.makewa(message.Command[0],message.Command[1])
        
        break;

        case 26:this.makecow(message.Command[0],message.Command[1])
        
        break;

        case 28:this.makeFHR(message.Command[0],message.Command[1])
        
        break;
 case 29:this.makeFH2(message.Command[0],message.Command[1])
        
        break;
    default:console.log(GeZiManager.Tcharacter)
       console.log(message.Command[1]) 
    this.makeFH(message.Command[0],message.Command[1])
        break;
}



}if(message instanceof SHMessage&&message.SHtype=="TP"){
console.log(message.Content)
console.log(message.Command[0])
AnimalManager.TP(message.Content,message.Command[0])





}


        for(let mannger of this.YuanGong){
mannger.ReceiveMessage(message);


    }
}

find("")


}















}

