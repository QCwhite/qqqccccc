// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Label } from 'cc';
const {ccclass, property} = _decorator;

import realThing from "../../TS/BASE/realThing";
import { gif1 } from "../../TS/BASE/spineANDgif/gif";
import DL from "../../TS/Ditu/des/DL";
import GeZiManager from "../../TS/Manager/GeZiManager";
import MessageCenter from "../../TS/Message/MessageCenter";
import turn from "../../TS/game/time/turn";
import { Vec3 } from 'cc';
import { Message } from '../../TS/Message/Message';
import { SHMessage } from '../../TS/Message/SHMessage';
import NWshopM from '../../TS/UIS/shop/NWshopM';
import { Sprite } from 'cc';
import { Color } from 'cc';
import { AudioManager } from '../../TS/BASE/music';


@ccclass('NG')
export default class NG extends DL {
      DJ:number=2
      BZT:number=3
  ice: any;
  HP: number=3;
        start(): void {
            turn.Roo.push(this)
              AudioManager.instance.ZJP("hit",24);
        }
      
      VC(){

/*
switch (this.DJ) {
  case 1:
    GeZiManager.AllObstacles.push(this)
    GeZiManager.aos.push(this.ZB)
    this.ghost=true
    this.node.getComponent(Sprite).color=new Color(0,0,255)
    break;
    case 2: GeZiManager.boxs.push(this.ZB)
    this.node.getComponent(Sprite).color=new Color(255,0,0)
    break;
    case 3:     this.M="沉甸甸";
    this.node.getComponent(Sprite).color=new Color(0,255,0)
    break;
  default:
    break;
}


if (NWshopM.NGS<3) {
 // NWshopM.NGS+=1
}

*/
GeZiManager.boxs.push(this.ZB)

      }
      
      
        roundPass(): void {
            this.HP--
            this.node.children[0].getComponent(Label).string=this.HP.toString()
          if ( this.HP==0) {
         this.DBZ()
              this.ZHA(this.ZB,-1) 
         this.dead(null)
            }
        }
      
        dead(r:realThing){ 
         // this.node.active = false; 
      
      
         
        GeZiManager.shanchu(GeZiManager.BanMove,this.ZB);
      
           GeZiManager.shanchu(GeZiManager.boxs,this.ZB);
      
      
      
        this.deadgif();
        setTimeout(() => {
          GeZiManager.shanchu(turn.Roo,this)
        },200);
        }
      
        BZ(preZB:number)
        {for(let a of GeZiManager.GR){if(a.ZB==this.ZB){a.dead()}}
          MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
      
            //  console.log(GeZiManager.Tcharacter.shose.TheNumber)
              if(GeZiManager.Tcharacter&&GeZiManager.Tcharacter.shose&&GeZiManager.Tcharacter.shose.TheNumber=="C01"){GeZiManager.dm-=2}
             
      this.playFrameAnimation1("BZ",0,0)
      this.dead(null)
      this.ObstacleClear();
      
        }
      
      
      
      
        ZHA(k,v:number){
          let b=[this.NfindGe(k,2,1),this.NfindGe(k,4,1),this.NfindGe(k,6,1),this.NfindGe(k,8,1),this.NfindGe(k,2,2),this.NfindGe(k,4,2),this.NfindGe(k,6,2),this.NfindGe(k,8,2)]
        
          if (this.DJ>3) {
            b=this.getNIGno5(k)
          }
          
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
                  console.log(a.ZB)   
                  a.DBZ();
                console.log(b);console.log(a.ZB)
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
      
      DBZ(){
           AudioManager.instance.ZJP("hit",25,{volume:0.6});
        this.playFrameAnimation1("DBZ",0,0)
        let b=[this.findGe(2,1),this.findGe(4,1),this.findGe(6,1),this.findGe(8,1),this.findGe(2,2),this.findGe(4,2),this.findGe(6,2),this.findGe(8,2)]
           if (this.DJ>2) {
          b=this.getNIGno5(this.ZB)
        }
        let k=0
        if (this.DJ>1) {
          k=2
        }
        if (this.DJ>2) {
          k=3
        }
        MessageCenter.MakeSHMessage("AM",b,k,null,"wuli");
        if (this.DJ>2) {
          for(let j of b){
            MessageCenter.MakeSHMessage("AM",[j],[this.turn8([this.faceIs(j)])[0],0.4],null,"move");
          }
        }
        this.BZ(this.ZB)
      }
      
      
      playFrameAnimation1(n: string, loop: number, p: number): void {
         /* switch (n) {
            case "BZ":
              this.node.active=true
             
            this.node.children[0].getComponent(gif).moveToNextFrame(7,31,0);
      console.log(GeZiManager.Tcharacter.WK)
            setTimeout(()=>{this.node.children[1].getComponent(gif).moveToNextFrame(0,6,0);  
             for(let c of GeZiManager.GR){if (c.ZB==this.ZB) {
              c.JJ();
             }}
              MessageCenter.MakeSHMessage("AM",[this.ZB],3+GeZiManager.dm,0,"wuli") ; ;this.fadeOutAndDisappear(this.node,2500)},800)
          setTimeout(()=>{   this.node.children[2].active=false;},500) 
      
      
                break;
       
            default: this.node.children[0].getComponent(gif).moveToNextFrame(16,31,0);   MessageCenter.MakeSHMessage("AM",[this.ZB],3+GeZiManager.dm,null,"wuli") ; ;this.fadeOutAndDisappear(this.node,2500)
            setTimeout(()=>{   this.node.children[2].active=false;},200) 
                break;
          }*/

                console.log(3+GeZiManager.dm)
                MessageCenter.MakeSHMessage("AM",[this.ZB],2+GeZiManager.dm,null,"wuli") ;this.fadeOutAndDisappear(this.node,2500)
               // setTimeout(()=>{   this.node.children[2].active=false;},500) 
            
      
      
              }




         

ReceiveMessage(message: Message) {
     if (message instanceof SHMessage&&this.HP>0) {

     if (message.Command.includes(this.ZB) || message.Command[0] == 65) {

     switch (message.SHtype) {
     case "move":if(!this.ice){this.move(message.Content[0], 1); this.moveto(message.Content[1], this.ZB);  this.CMget();}
     break;


     case "wuli":       if(this.getc(message.from)!=null)
     { for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}
     let k=(message.Content+GeZiManager.dm+GeZiManager.ms);if (k>0) {
     this.HP-=k}
     this.ST();
     if (this.HP <= 0) {this.DBZ();}GeZiManager.dm=0;GeZiManager.ms=0
     }else{ this.HP-=message.Content;
     if (this.HP <= 0) {this.DBZ();}
     this.ST();}

     break;
     case "mofa":if(this.tt=="qin"||this.tt=="fireball"){}else{ this.HP -= message.Content;  this.ST();if (this.HP <= 0) {{this.DBZ();}}}


     break;
     case "mofaT":if(this.tt=="qin"||this.tt=="fireball"){}else{ this.HP -= message.Content[0];  this.ST();if (this.HP <= 0) {{this.DBZ(); }}}


     break;


     case "getOne":if(!this.ice){GeZiManager.Tcharacter=this;}
     break;
     case "ice":
     this.ice=true;
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
  ST() {
    this.node.children[0].getComponent(Label).string=this.HP.toString()
  }



      }