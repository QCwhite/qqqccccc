// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Vec3 } from 'cc';
const {ccclass, property} = _decorator;

import MTX from "../../pictures/TX/MTX/MTX";
import realThing from "../../TS/BASE/realThing";
import { gif1 } from "../../TS/BASE/spineANDgif/gif";
import DL from "../../TS/Ditu/des/DL";
import GeZiManager from "../../TS/Manager/GeZiManager";
import { Message } from "../../TS/Message/Message";
import MessageCenter from "../../TS/Message/MessageCenter";
import { SHMessage } from "../../TS/Message/SHMessage";
import { FDUI } from "../../TS/UIS/else/FDUI";
import Character from '../../TS/BASE/Character';
import { threadId } from 'worker_threads';
import AnimalManager from '../../TS/Manager/AnimalManager';
import turn from '../../TS/game/time/turn';
import { AudioManager } from '../../TS/BASE/music';

@ccclass('Box')
export default class box extends realThing {
tt:string="box"
type:string="qi"
k:string[]=["A164","A164","A164","A127","A127","A125","A142","A321","A122"]
k2:string[]=[]
HP: number=3;
iceL:boolean=false
dead(r:realThing): void {
   //  console.log(GeZiManager.boxs)
     GeZiManager.shanchuALL(GeZiManager.BanMove,this.ZB);
     GeZiManager.shanchuALL(GeZiManager.BanMove,this.ZB);
     GeZiManager.shanchuALL(GeZiManager.boxs,this.ZB);
     GeZiManager.shanchuALL(GeZiManager.boxs,this.ZB);

     switch (this.type) {
     case "qi":if(r!=null){MessageCenter.MakeSHMessage("AM",[r.ZB],3,1,"Qi+");}

     break;
     case "HP":if(r!=null){
     if(r.HP==r.MaxHP){MessageCenter.MakeSHMessage("AM",[r.ZB],1,1,"MaxHP+");
     } MessageCenter.MakeSHMessage("AM",[r.ZB],1,1,"HP+");}

     break;
     case "boom":this.DBZ()

     break;
     case "banana":if(r!=null){
     MessageCenter.MakeSHMessage("AM",[r.ZB],3,1,"TN+")
     MessageCenter.MakeSHMessage("AM",[this.ZB],7,1,"FTP");}

     break;
     case "null":
     break;
     case "weapon":if(r!=null){ MessageCenter.MakeSHMessage("AM",[r.ZB],"EQ",1,"TG")}


     break;
     case "drug": MessageCenter.MakeSHMessage("AM",this.getNIG(this.ZB),1,1,"getOnes")
for (let c of GeZiManager.Tcharacters) {
 if (c instanceof Character) {
     c.DYL(3)
 }
     
}
     break;

     case "Sweapon":if(r!=null){  MessageCenter.MakeSHMessage("AM",[r.ZB],"EQ",1,"TG")}

     break;
//           /* case "run":

     break;
     case "TNS":if(r!=null){MessageCenter.MakeSHMessage("AM",[r.ZB],2,1,"TNS");}

     break;



     default:
     break;


     }
this.ZB=0
     this.fadeOutAndDisappear(this.node,200)
    // console.log(this.type)
     GeZiManager.shanchu(this.node.parent.getComponent(AnimalManager).YuanGong,this)

}
DBZ(){
//  // this.playFrameAnimation1("DBZ",0,0)
     let b=[this.findGe(2,1),this.findGe(4,1),this.findGe(6,1),this.findGe(8,1),this.findGe(2,2),this.findGe(4,2),this.findGe(6,2),this.findGe(8,2)]
     MessageCenter.MakeSHMessage("AM",b,2,null,"wuli");
            this.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("BZ");
//  // this.BZ(this.ZB)
}
ZHA(k,v:number){
     let b=[this.NfindGe(k,2,1),this.NfindGe(k,4,1),this.NfindGe(k,6,1),this.NfindGe(k,8,1)]


     switch (v) {
     case 0:v=3

     break;
     case 1:v=2

     break;
     case 2:v=1
     break;
     case 3:v=0

     break;

     default:v=-1;
     break;
     }

     if(v!=-1){b[v]=0}


     let g=[]
     for (let a of GeZiManager.AllObstacles) {
     if (a instanceof DL&&b.includes(a.ZB)) {
    // console.log(a.ZB)
     a.DBZ();
   //  console.log(b);console.log(a.ZB)
     for(let c of b){if(c!=0){this.ZHA(c,b.indexOf(c))};}
     g.push(a.ZB);
     }
     }

     for (let a of GeZiManager.AllObstacles) {
     if (a instanceof DL&&g.includes(a.ZB)) {
     a.ObstacleClear();
     }
     }

   

    }
sk(n:number){

     switch (n) {
     case 1:this.type="TNS"

     break;
     case 2:this.type="HP"

     break;
     case 3:this.type="qi"

     break;
     case 4:this.type="weapon"

     break;
     case 5:this.type="drug"

     break;
     case 6:this.type="boom"

     break;

     default:
     break;
     }

     this.node.getChildByName("New Node").getComponent(gif1).changeF(n,1)


     setTimeout(()=>{ this.node.children[0].active=false
     this.node.children[1].active=false
     this.node.children[2].active=false
     if (this.x<3) {
     this.node.children[1].active=true
     this.node.getChildByName("HP").position=new Vec3(30,-46,0)
     }else if (this.x>6) {
     this.node.children[2].active=true

     this.node.getChildByName("HP").position=new Vec3(2,-48,0)
     }else{    this.node.getChildByName("HP").position=new Vec3(18,-47,0);
     this.node.children[0].active=true}
     },1300)



}

To(ZB: number, time: number): void {
    GeZiManager.shanchuALL(GeZiManager.boxs,this.ZB)
    
     super.To(ZB,time)

   GeZiManager.boxs.push(ZB)  
}






move(face: number, dis: number,zi?:boolean): void {
  //  console.log(GeZiManager.boxs)
    AudioManager.instance.ZJP("hit",1)
    GeZiManager.shanchuALL(GeZiManager.boxs, this.ZB)
     if (this.HP>0) {
     super.move(face,dis,zi)
     if (GeZiManager.waterPool.includes(this.ZB)) {
     this.ghost=true

    
          GeZiManager.boxs.push(this.ZB);
          if (this.ZB === 8 || this.ZB === 1) {
              this.node.active = false;
              GeZiManager.shanchu(GeZiManager.BanMove, 8);
              GeZiManager.shanchu(GeZiManager.boxs, 8);
              MessageCenter.MakeMessage("AM", turn.turn, "getC");
              GeZiManager.PCP.ST();
          }
      
     GeZiManager.shanchu(GeZiManager.BanMove,this.ZB)
     setTimeout(() => {
     MessageCenter.MakeSHMessage("AM",[this.ZB],1,1,"getOneC")
     if(GeZiManager.Tcharacter){GeZiManager.Tcharacter.DiXing="box"}

//    console.log(GeZiManager.Tcharacter.DiXing)
     },100);

     }


     setTimeout(()=>{ this.node.children[0].active=false
     this.node.children[1].active=false
     this.node.children[2].active=false
     if (this.x<3) {
     this.node.children[1].active=true
     this.node.getChildByName("HP").position=new Vec3(30,-46,0)
     }else if (this.x>6) {
     this.node.children[2].active=true

     this.node.getChildByName("HP").position=new Vec3(2,-48,0)
     }else{    this.node.getChildByName("HP").position=new Vec3(18,-47,0);
     this.node.children[0].active=true}
     },500)

     }

     //.log(GeZiManager.boxs)
}
ReceiveMessage(message: Message) {
     if (message instanceof SHMessage&&this.HP>0) {

     if (message.Command.includes(this.ZB) || message.Command[0] == 65) {

     switch (message.SHtype) {
     case "move":if(!this.ice){this.move(message.Content[0], 1); this.moveto(message.Content[1], this.ZB);  this.CMget();}
     break;


     case "wuli":          AudioManager.instance.ZJP("hit",2);    if(this.getc(message.from)!=null)
     { for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}
     let k=(message.Content+GeZiManager.dm+GeZiManager.ms);if (k>0) {
     this.HP-=k}
     this.ST();
     if (this.HP <= 0) {this.dead(this.getc(message.from));}GeZiManager.dm=0;GeZiManager.ms=0
     }else{ this.HP-=message.Content;
     if (this.HP <= 0) {this.dead(null);}
     this.ST();}

     break;
     case "mofa":if(this.tt=="qin"||this.tt=="fireball"){}else{ this.HP -= message.Content;  this.ST();if (this.HP <= 0) {this.dead(this.getc(message.from)) ; }}


     break;
     case "mofaT":if(this.tt=="qin"||this.tt=="fireball"){}else{ this.HP -= message.Content[0];  this.ST();if (this.HP <= 0) {this.dead(this.getc(message.from)) ; }}


     break;

case "getOne":if(message.Command.includes(this.ZB)){GeZiManager.Tcharacter=this}
    break
   
     case "ice":
     this.iceL=true;
     GeZiManager.shanchu(GeZiManager.BanMove,this.ZB);
     GeZiManager.shanchu(GeZiManager.WD,this.ZB);
     GeZiManager.shanchu(GeZiManager.boxs,this.ZB);
     break;

     case "water":




     switch (this.M) {
     case "轻飘飘":

     break;
 
     case "正常": this.move(message.Content, 1 + GeZiManager.free); this.CMget(); this.moveto(1.5, this.ZB);

     break;
  
     default:this.move(message.Content, 1 + GeZiManager.free); this.CMget(); this.moveto(1.5, this.ZB);


     break;
     }


     default:
     break;
     }

}}}
ST(){
     if(this.HP<0){this.HP=0}
     this.node.getChildByName("HP").children[3].active=false
     this.node.getChildByName("HP").children[4].active=false
     this.node.getChildByName("HP").children[5].active=false

     for (let index = 3; index<=this.HP+2;index++) {
     if (this.node.getChildByName("HP").children[index]) {
     this.node.getChildByName("HP").children[index].active=true
     }

     }
}
start(): void {
       AudioManager.instance.ZJP("hit",24);
}
inWater(){

     this.node.getComponentInChildren(MTX).playFrameAnimation1("waterE")
}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import MTX from "../../pictures/TX/MTX/MTX";
// import realThing from "../../TS/BASE/realThing";
// import { gif } from "../../TS/BASE/spineANDgif/gif";
// import DL from "../../TS/Ditu/des/DL";
// import GeZiManager from "../../TS/Manager/GeZiManager";
// import { Message } from "../../TS/Message/Message";
// import MessageCenter from "../../TS/Message/MessageCenter";
// import { SHMessage } from "../../TS/Message/SHMessage";
// import { FDUI } from "../../TS/UIS/else/FDUI";
// 
// const {ccclass, property} = _decorator;
// 
// @ccclass
// export default class box extends realThing {
// tt:string="box"
// type:string="qi"
// k:string[]=["A164","A164","A164","A127","A127","A125","A142","A321","A122"]
// k2:string[]=[]
// HP: number=3;
// ice:boolean=false
// dead(r:realThing): void {
//     GeZiManager.shanchu(GeZiManager.BanMove,this.ZB); 
//     GeZiManager.shanchu(GeZiManager.WD,this.ZB); 
//     GeZiManager.shanchu(GeZiManager.boxs,this.ZB); 
//     
//     switch (this.type) {
//             case "qi":if(r!=null){MessageCenter.MakeSHMessage("AM",[r.ZB],3,1,"Qi+");}
//             
//             break;
//             case "HP":if(r!=null){
//                 if(r.HP==r.MaxHP){MessageCenter.MakeSHMessage("AM",[r.ZB],1,1,"MaxHP+");
//                 } MessageCenter.MakeSHMessage("AM",[r.ZB],1,1,"HP+");}
//             
//             break;
//             case "boom":this.ZHA(this.ZB,-1);this.DBZ()
//             
//             break;
//             case "banana":if(r!=null){
//                 MessageCenter.MakeSHMessage("AM",[r.ZB],3,1,"TN+")
//                 MessageCenter.MakeSHMessage("AM",[this.ZB],7,1,"FTP");}
//             
//             break;
//             case "null":
//             break;
//             case "weapon":if(r!=null){ MessageCenter.MakeSHMessage("AM",[r.ZB],"EQ",1,"TG")}
//             
//             
//             break;
//             case "drug": MessageCenter.MakeSHMessage("AM",this.getNIG(this.ZB),1,1,"mofa")
//             
//             break;
//             case "Sweapon":if(r!=null){  MessageCenter.MakeSHMessage("AM",[r.ZB],"EQ",1,"TG")}
//             
//             break;
//            /* case "run":
//             
//             break;*/
//             case "TNS":if(r!=null){MessageCenter.MakeSHMessage("AM",[r.ZB],2,1,"TNS");}
//             
//             break;
//            
//     
//     
//         default:
//             break;
// 
//     
//         }
// 
//         this.fadeOutAndDisappear(this.node,200)
// console.log(this.type)
// 
// }
// 
// DBZ(){
//   // this.playFrameAnimation1("DBZ",0,0)
//    let b=[this.findGe(2,1),this.findGe(4,1),this.findGe(6,1),this.findGe(8,1)]
//    MessageCenter.MakeSHMessage("AM",b,2,null,"wuli");
//   // this.BZ(this.ZB)
// }
// ZHA(k,v:number){
//     let b=[this.NfindGe(k,2,1),this.NfindGe(k,4,1),this.NfindGe(k,6,1),this.NfindGe(k,8,1)]
//     
//     
//     switch (v) {
//         case 0:v=3
//             
//             break;
//             case 1:v=2
//             
//             break;
//             case 2:v=1        
//             break;
//             case 3:v=0
//             
//             break;
//     
//         default:v=-1;
//             break;
//     }
//     
//     if(v!=-1){b[v]=0}
//     
//     
//     let g=[]
//     for (let a of GeZiManager.AllObstacles) {
//         if (a instanceof DL&&b.includes(a.ZB)) {
//             console.log(a.ZB)   
//             a.DBZ();
//           console.log(b);console.log(a.ZB)
//           for(let c of b){if(c!=0){this.ZHA(c,b.indexOf(c))};}
//        g.push(a.ZB);
//         }
//         }
//     
//         for (let a of GeZiManager.AllObstacles) {
//             if (a instanceof DL&&g.includes(a.ZB)) {
//             a.ObstacleClear();
//             }
//             }
//     
//             this.node.removeComponent(FDUI)
//    
//     }
// sk(n:number){
//    
//    switch (n) {
//       case 1:this.type="TNS"
//          
//          break;
//          case 2:this.type="HP"
//          
//          break;
//          case 3:this.type="qi"
//          
//          break;
//          case 4:this.type="weapon"
//          
//          break;
//          case 5:this.type="drug"
//          
//          break;
//          case 6:this.type="boom"
//          
//          break;
//    
//       default:
//          break;
//    }
//    
//    this.node.getChildByName("New Node").getComponent(gif).changeF(n,1)
//    
//    
//    setTimeout(()=>{ this.node.children[0].active=false
//       this.node.children[1].active=false
//       this.node.children[2].active=false
//    if (this.x<3) {
//      this.node.children[1].active=true
//      this.node.getChildByName("HP").position=new Vec3(30,-46,0)
//    }else if (this.x>6) {
//      this.node.children[2].active=true
//    
//      this.node.getChildByName("HP").position=new Vec3(2,-48,0)
//    }else{    this.node.getChildByName("HP").position=new Vec3(18,-47,0);
//        this.node.children[0].active=true}
//    },1300)
//   
// 
//  
// }
// 
// 
// 
// move(face: number, dis: number): void {
//  if (this.HP>0) {
//    super.move(face,dis)
//     if (GeZiManager.waterPool.includes(this.ZB)) {
//         this.ghost=true
//         GeZiManager.shanchu(GeZiManager.BanMove,this.ZB)
//       setTimeout(() => {
//         MessageCenter.MakeSHMessage("AM",[this.ZB],1,1,"getOneC")
//         if(GeZiManager.Tcharacter){GeZiManager.Tcharacter.DiXing="box"}
// 
//     console.log(GeZiManager.Tcharacter.DiXing)
//       },100);
//        
//     }
// 
// 
// setTimeout(()=>{ this.node.children[0].active=false
//    this.node.children[1].active=false
//    this.node.children[2].active=false
// if (this.x<3) {
//   this.node.children[1].active=true
//   this.node.getChildByName("HP").position=new Vec3(30,-46,0)
// }else if (this.x>6) {
//   this.node.children[2].active=true
// 
//   this.node.getChildByName("HP").position=new Vec3(2,-48,0)
// }else{    this.node.getChildByName("HP").position=new Vec3(18,-47,0);
//     this.node.children[0].active=true}
// },500)
//    
//  }  
//   
//     
// }
// 
// 
// 
// 
// ReceiveMessage(message: Message) {
//     if (message instanceof SHMessage&&this.HP>0) {
//   
//       if (message.Command.includes(this.ZB) || message.Command[0] == 65) {
// 
//         switch (message.SHtype) {
//          case "move":if(!this.ice){this.move(message.Content[0], 1); this.moveto(message.Content[1], this.ZB);  this.CMget();}
//             break;
// 
// 
//           case "wuli":       if(this.getc(message.from)!=null)
//             { for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}
//           let k=(message.Content+GeZiManager.dm+GeZiManager.ms);if (k>0) {
//             this.HP-=k}
//            this.ST();
//            if (this.HP <= 0) {this.dead(this.getc(message.from));}GeZiManager.dm=0;GeZiManager.ms=0
//             }else{ this.HP-=message.Content;
//                if (this.HP <= 0) {this.dead(null);}
//                this.ST();}
//       
//             break;
//           case "mofa":if(this.tt=="qin"||this.tt=="fireball"){}else{ this.HP -= message.Content;  this.ST();if (this.HP <= 0) {this.dead(this.getc(message.from)) ; }}
//             
//           
//           break;
//           case "mofaT":if(this.tt=="qin"||this.tt=="fireball"){}else{ this.HP -= message.Content[0];  this.ST();if (this.HP <= 0) {this.dead(this.getc(message.from)) ; }}
//             
//           
//           break;
// 
//          
//              case "getOne":if(!this.ice){GeZiManager.Tcharacter=this;}
//              break;
//          case "ice":   
//          this.ice=true;
//          GeZiManager.shanchu(GeZiManager.BanMove,this.ZB); 
//          GeZiManager.shanchu(GeZiManager.WD,this.ZB); 
//          GeZiManager.shanchu(GeZiManager.boxs,this.ZB); 
//          break;
//           
//             case "water": 
//             
//             
// 
// 
//                  switch (this.M) {
//                     case -1:
// 
//                        break;
//                     case 0: this.move(message.Content, 1 + GeZiManager.free); this.CMget(); this.moveto(1.5, this.ZB);
// 
//                        break;
//                     case 1: this.move(message.Content, 1 + GeZiManager.free); this.CMget(); this.moveto(1.5, this.ZB);
// 
//                        break;
//                     case 2: this.move(message.Content, 1 + GeZiManager.free); this.CMget(); this.moveto(1.5, this.ZB);
// 
//                        break;
//                     case 8: this.move(message.Content, 1 + GeZiManager.free); this.CMget(); this.moveto(1.5, this.ZB);
// 
//                        break;
//                     default:
//                       
//                     
//                     break;
//                  }
//              
//           
//             default:
//             break;
//         }
// 
// }}}
// 
// 
// ST(){
// if(this.HP<0){this.HP=0}
// this.node.getChildByName("HP").children[3].active=false
// this.node.getChildByName("HP").children[4].active=false
// this.node.getChildByName("HP").children[5].active=false
// 
// for (let index = 3; index<=this.HP+2;index++) {
//  if (this.node.getChildByName("HP").children[index]) {
//    this.node.getChildByName("HP").children[index].active=true
//  }  
//    
// }
// }
// 
// start(): void {
//  
// }
// 
// inWater(){
//    
//    this.node.getComponentInChildren(MTX).playFrameAnimation1("waterE")
// }
// 
// 
// 
// 
// }
