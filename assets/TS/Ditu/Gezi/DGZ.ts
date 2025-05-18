import { _decorator, find, Node } from 'cc';
const {ccclass, property} = _decorator;


import ComponentBase from "../../BASE/ComponentBase";
import AnimalManager from "../../Manager/AnimalManager";
import GeZiManager from "../../Manager/GeZiManager";
import { Message } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import S10 from "../../Scharacter/S10";
import SXX from "../../Scharacter/SXX";
import weapon from "../../equipment/weapon/weapon";
import state from "../../game/time/state";
import turn from "../../game/time/turn";
import GeZi from "./GeZi";
import { AudioManager } from '../../BASE/music';



@ccclass('DGZ')
export default class DGZ extends ComponentBase {
AM:Node | null=null
start(): void {
        this.AM =find("Canvas/DituManager/New Node/AnimalManager")
}
    Touch(){

      AudioManager.instance.ZJP("ui",1,{volume:0.6})
        switch (state.ST) {
        case 0:

        MessageCenter.MakeMessage("UIManager","change",2)


        GeZiManager.GeZis.push(this.node.getComponent(GeZi).ZB);
        GeZiManager.GeZi=this.node.getComponent(GeZi).ZB;
        GeZiManager.changeChoose();
        break;

        case 0.5:
        MessageCenter.MakeMessage("UIManager","change",-1);

        for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a) ;
        }
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")


        let j=new Message("",GeZiManager.GeZis,1);
        for (let m of GeZiManager.YuanGong) {





        m.red();

        m.ReceiveMessage(j);

        if(GeZiManager.BanMove.includes(m.ZB)){
        m.out();}

        }

        GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();


        MessageCenter.MakeMessage("UIManager","change",2)


        GeZiManager.GeZis.push(this.node.getComponent(GeZi).ZB);
        GeZiManager.GeZi=this.node.getComponent(GeZi).ZB;
        GeZiManager.changeChoose();
        break;


        case 1:
        let c=new Message("",GeZiManager.GeZis,1);
        for(let manager of GeZiManager.YuanGong){


        manager.red();

        manager.ReceiveMessage(c);
        }



        GeZiManager.GeZi=this.node.getComponent(GeZi).ZB;

        this.node.getComponent(GeZi).blue();

        MessageCenter.MakeMessage("UIManager","change",2)


        break;//移动

//         陷阱与放置物体
        case 2:


        MessageCenter.MakeMessage("AM",turn.turn,"getZB")



        MessageCenter.MakeMessage("UIManager","change",-1);


        for(let manager of GeZiManager.YuanGong){

        manager.getFar(GeZiManager.JL);
        if (GeZiManager.FTPN==8.1) {
        GeZiManager.PCP.node.getComponent(S10).getJT()

        if ( GeZiManager.PCP.node.getComponent(S10).jingTU.includes(manager.ZB)) {
        manager.green()
        }
        }


        if(GeZiManager.FTPN==8||GeZiManager.FTPN==8.5||GeZiManager.FTPN==8.1){
        if(GeZiManager.BanMove.includes(manager.ZB)&&(this.getTeamZB(GeZiManager.PCP.Pturn,manager.ZB)==false)){
        manager.red()} }else
        if(GeZiManager.BanMove.includes(manager.ZB)){
        manager.red()}



        if((GeZiManager.FTPN==3||GeZiManager.FTPN==3.5)&&GeZiManager.qins.includes(manager.ZB)){manager.red()}

        if(GeZiManager.AllObstacles[0]!=null){ for(let a of GeZiManager.AllObstacles){
        if(a.ZB==manager.ZB&&!(GeZiManager.grass.includes(a.ZB)&&a.ObstaclesName!="qizi")){manager.red()}
        if((GeZiManager.FTPN==3||GeZiManager.FTPN==3.5)){
        if(a.tt=="flag"&&a.FW.includes(manager.ZB)&&a.color!=GeZiManager.PCP.color&&a.color!="S02"){manager.red()}
        if(a.tt=="flag"&&a.FW.includes(manager.ZB)&&a.color==GeZiManager.PCP.color&&a.color!="S02"){manager.green()}
        }
        }}
        }
        GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();
        MessageCenter.MakeMessage("UIManager","change",2)

        break;//dilei
//     攻击
        case 3:
        let AF=[]
        switch (GeZiManager.DLLM) {
        case 'A321':AF=[1,2,3]

        break;
        case 'A3X1':AF=[1,3]

        break;

        default:
        break;
        }
        GeZiManager.qing();
        let i = 0;
        switch (GeZiManager.PCP.faceTo) {
        case 6: i = 1;
        break;
        case 8: i = 2;
        break;
        case 4: i = 3;
        break;
        }


        for (let n = 1; n <= i; n++) {
        GeZiManager.PCP.turn6(AF);

        }
        let an: number[] = [];
//         面向对齐




        for (let mannger of AF) {



        an.push(GeZiManager.PCP.findGe(mannger, 1));

        }

        GeZiManager.GeZis = [].concat(an);

        let g = new Message("", GeZiManager.GeZis, 1);
        for (let m of GeZiManager.YuanGong) {


        m.red()
        m.ReceiveMessage(g)

        }


        GeZiManager.GeZi=this.node.getComponent(GeZi).ZB;

        this.node.getComponent(GeZi).blue();

        MessageCenter.MakeMessage("UIManager","change",2)


        MessageCenter.MakeMessage("AM",turn.turn,"getC")
        break;





//    魔法

        case 4:
       
        switch (GeZiManager.DLLM) {
        case 'fireball': 
        this.XZ(4,false,false)
        break;
        case 'cure':
                this.XZ(4,false,false)
        break;

        case 'ice':     this.XZ(4,false,false)
        break;
        case 'TP':
                this.XZ(5,false,true)
        break;
        case 'thunder':
                this.XZ(5,false,false)
                break;
        case 'banana':
                this.XZ(4,true,true)
                break;
        case "KB":
                this.XZ(3,false,false)



        break;
        case "tree":
                this.XZ(3,true,true)



        break;
        case "BZ":
                this.XZ(2,false,false)



        break;
      
        default:
                this.XZ(4,false,false)

        break;




        }
       
        MessageCenter.MakeMessage("UIManager","change",2)











        break;
        case 9:

        switch (GeZiManager.DLLM) {
        case "S00-1":


        state.ST=9;
        GeZiManager.DLLM="S00-1"
        MessageCenter.MakeMessage("UIManager","change",-1);
        for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a)
        }
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")
        let a=0
        if(GeZiManager.PCP.node.getComponent(SXX).JX){a=1}
        for(let manager of GeZiManager.YuanGong){
        manager.getFar(3+a);

        }
        GeZiManager.GeZi=-this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();










        break;
        case "S00-2":


        state.ST=9;
        GeZiManager.DLLM="S00-2"
        MessageCenter.MakeMessage("UIManager","change",-1);
        for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a)
        }
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")
        let o=0
        if(GeZiManager.PCP.node.getComponent(SXX).JX){o=1}
        for(let manager of GeZiManager.YuanGong){
        manager.getFar(3+o);

        }
        GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();










        break;
        case "S05" :MessageCenter.MakeMessage("UIManager","change",-1);
        let j=0
  for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a)
        }
        
        for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a) ;
        }
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")

        for(let manager of GeZiManager.YuanGong){
        manager.getFar(3+j);}

        GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();
        break;
        case  "S06":
        GeZiManager.qing();
        let AF = [1,3]
        let i = 0;
        switch (GeZiManager.PCP.faceTo) {
        case 6: i = 1;
        break;
        case 8: i = 2;
        break;
        case 4: i = 3;
        break;
        }


        for (let n = 1; n <= i; n++) {
        GeZiManager.PCP.turn6(AF);

        }
        let an: number[] = [];
        for (let mannger of AF) {



        an.push(GeZiManager.PCP.findGe(mannger, 1));

        }

        GeZiManager.GeZis = [].concat(an);

        let c = new Message("", GeZiManager.GeZis, 1);
        for (let m of GeZiManager.YuanGong) {


        m.red();
        if(GeZiManager.BanMove.includes(m.ZB)==false){
        m.ReceiveMessage(c);}

        }
        GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();



        break;
        case "S07":


        state.ST=9;
        GeZiManager.DLLM="S07"
        MessageCenter.MakeMessage("UIManager","change",-1);
        for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a)
        }
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")
        o=0
        if(GeZiManager.PCP.node.getComponent(SXX).BL[5]>0){o=1}
        for(let manager of GeZiManager.YuanGong){
        manager.getFar(4+o);

        }
        GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();










        break;

        
        case "S08" :MessageCenter.MakeMessage("UIManager","change",-1);

        for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a) ;
        }
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")

        for(let manager of GeZiManager.YuanGong){
        manager.getFar(GeZiManager.PCP.qi+1);}

        GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();
        break;

        case "S04" :MessageCenter.MakeMessage("UIManager","change",-1);

        for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a) ;
        }
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")

        for(let manager of GeZiManager.YuanGong){
     manager.getFar(Math.floor((GeZiManager.PCP.qi+1)/2))
        if(GeZiManager.BanMove.includes(manager.ZB)){manager.red()}
        ;}

        GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();
        break;
        case "S10-1" :MessageCenter.MakeMessage("UIManager","change",-1);

          for(let manager of GeZiManager.YuanGong){
         
       
       
         
          if (GeZiManager.PCP.node.getComponent(S10)&&GeZiManager.PCP.node.getComponent(S10).jingTU.includes(manager.ZB)) {
           manager.green()
          }
           
         }

        GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();
        break;
        

        default:
        break;
        }






        case 11:


        MessageCenter.MakeMessage("UIManager","change",2)







        break;



        case 3.5:for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a) ;
        }
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")

        for(let manager of GeZiManager.YuanGong){
        manager.getFar(1+GeZiManager.JL);}

        GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
        this.node.getComponent(GeZi).blue();
        MessageCenter.MakeMessage("UIManager","change",2)

        break;

        default:
        break;
        }






        }
        
        
        getTeamZB(n:number,ZB:number){
        for(let a of this.AM.getComponent(AnimalManager).YuanGong){

        if(a.ZB==ZB){


        if(a.Pturn!=0&&(a.Pturn%2==n%2)){return true}else{return false}
        }




        }
      }
      
          XZ(n:number,Ba:boolean,Br:boolean){
            
            
            
            
            
                let k=GeZiManager.redM;
                let o=GeZiManager.blueM
            if(GeZiManager.PCP.color=="Blue"){o=GeZiManager.redM;k=GeZiManager.blueM}
            state.ST=4;
                MessageCenter.MakeMessage("UIManager","change",-1);
                for(let manager of GeZiManager.YuanGong){
            let a=new Message("",[65],-1)
                    manager.ReceiveMessage(a)    
            }
            MessageCenter.MakeMessage("AM",turn.turn,"getZB")
            
            for(let manager of GeZiManager.YuanGong){
            manager.getFar(n+GeZiManager.JL);
        
        
            if (Ba&&manager.getFarH(n+GeZiManager.JL)) {
                manager.cto(GeZiManager.Baos(manager.ZB)) 
             }
             if (Br&&manager.getFarH(n+GeZiManager.JL)) {
                 manager.cto(GeZiManager.Bret(manager.ZB)) 
              }
            if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
                manager.red();
            }
            }
            MessageCenter.MakeMessage("UIManager","change",-1);
            GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
            this.node.getComponent(GeZi).blue();
        if ((Ba&&GeZiManager.grass.includes(this.node.getComponent(GeZi).ZB))||(Br&&GeZiManager.grass.includes(this.node.getComponent(GeZi).ZB)&&turn.DorN=="nigth")) {
                this.node.getComponent(GeZi).Kpuper();
        }

       

            }
            
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import YP from "../../../sound/music";
// import ComponentBase from "../../BASE/ComponentBase";
// import AnimalManager from "../../Manager/AnimalManager";
// import GeZiManager from "../../Manager/GeZiManager";
// import { Message } from "../../Message/Message";
// import MessageCenter from "../../Message/MessageCenter";
// import S10 from "../../Scharacter/S10";
// import SXX from "../../Scharacter/SXX";
// import weapon from "../../equipment/weapon/weapon";
// import state from "../../game/time/state";
// import turn from "../../game/time/turn";
// 
// import GeZi from "./GeZi";
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class DGZ extends ComponentBase {
// AM:cc.Node=null
// start(): void {
//   this.AM =cc.find("Canvas/DituManager/New Node/AnimalManager")
// }
//     Touch(){
//find("Canvas").getComponent(YP).ZJP("uyp",false,1)
//   
//     switch (state.ST) {
//       case 0: 
//             
//       MessageCenter.MakeMessage("UIManager","change",2)
//       
//       
//    GeZiManager.GeZis.push(this.node.getComponent(GeZi).ZB);
//   GeZiManager.GeZi=this.node.getComponent(GeZi).ZB;
//    GeZiManager.changeChoose();
//          break;
//        
//          case 0.5: 
//          MessageCenter.MakeMessage("UIManager","change",-1);
// 
//          for(let manager of GeZiManager.YuanGong){
//    let a=new Message("",[65],-1)
//              manager.ReceiveMessage(a) ;   
//    }
//    MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//    
//   
//     let j=new Message("",GeZiManager.GeZis,1);
//     for (let m of GeZiManager.YuanGong) {
//     
//     
//      
//           
//             
//                 m.red();
//             
//                m.ReceiveMessage(j);
//           
//     if(GeZiManager.BanMove.includes(m.ZB)){
//     m.out();}
//     
//     }
//    
//    GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//    this.node.getComponent(GeZi).blue();
//            
//             
//          MessageCenter.MakeMessage("UIManager","change",2)
//          
//          
//       GeZiManager.GeZis.push(this.node.getComponent(GeZi).ZB);
//      GeZiManager.GeZi=this.node.getComponent(GeZi).ZB;
//       GeZiManager.changeChoose();
//             break;
//           
//        
//          case 1:
//           let c=new Message("",GeZiManager.GeZis,1);
//           for(let manager of GeZiManager.YuanGong){
//           
//           
//               manager.red();
//           
//              manager.ReceiveMessage(c);
//           }
//            
//         
//         
//         GeZiManager.GeZi=this.node.getComponent(GeZi).ZB;
// 
// this.node.getComponent(GeZi).blue();
// 
//           MessageCenter.MakeMessage("UIManager","change",2)
//          
//       
//           break;//移动
//         
//          陷阱与放置物体
//          case 2:
//             
//       
//          MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//            
//             
//             
//              MessageCenter.MakeMessage("UIManager","change",-1);
//             
// 
//   for(let manager of GeZiManager.YuanGong){
//  
//  manager.getFar(GeZiManager.JL);
//  if (GeZiManager.FTPN==8.1) {
//   GeZiManager.PCP.node.getComponent(S10).getJT() 
//    
//   if ( GeZiManager.PCP.node.getComponent(S10).jingTU.includes(manager.ZB)) {
//     manager.green()
//    }
// }
// 
// 
// if(GeZiManager.FTPN==8||GeZiManager.FTPN==8.5||GeZiManager.FTPN==8.1){   
//   if(GeZiManager.BanMove.includes(manager.ZB)&&(this.getTeamZB(GeZiManager.PCP.Pturn,manager.ZB)==false)){
//    manager.red()} }else 
//  if(GeZiManager.BanMove.includes(manager.ZB)){
//     manager.red()}
// 
// 
// 
//     if((GeZiManager.FTPN==3||GeZiManager.FTPN==3.5)&&GeZiManager.qins.includes(manager.ZB)){manager.red()}
// 
//     if(GeZiManager.AllObstacles[0]!=null){ for(let a of GeZiManager.AllObstacles){
//      if(a.ZB==manager.ZB&&!(GeZiManager.grass.includes(a.ZB)&&a.ObstaclesName!="qizi")){manager.red()}
//    if((GeZiManager.FTPN==3||GeZiManager.FTPN==3.5)){
//      if(a.tt=="flag"&&a.FW.includes(manager.ZB)&&a.color!=GeZiManager.PCP.color&&a.color!="S02"){manager.red()}
//    
//     }
//    }}
// }
//     GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
// this.node.getComponent(GeZi).blue();
// MessageCenter.MakeMessage("UIManager","change",2)
//             
//             break;//dilei
//      攻击
//       case 3:    
//       let AF=[]
//       switch (GeZiManager.DLLM) {
//         case 'A321':AF=[1,2,3]
//           
//           break;
//           case 'A3X1':AF=[1,3]
//           
//           break;
//       
//         default:
//           break;
//       }
//       GeZiManager.qing();
//     let i = 0;
//     switch (GeZiManager.PCP.faceTo) {
//       case 6: i = 1;
//         break;
//       case 8: i = 2;
//         break;
//       case 4: i = 3;
//         break;
//     }
// 
// 
//     for (let n = 1; n <= i; n++) {
//       GeZiManager.PCP.turn6(AF);
// 
//     }
//     let an: number[] = [];
//          面向对齐
// 
// 
// 
// 
//     for (let mannger of AF) {
// 
// 
// 
//       an.push(GeZiManager.PCP.findGe(mannger, 1));
// 
//     }
// 
//     GeZiManager.GeZis = [].concat(an);
// 
//     let g = new Message("", GeZiManager.GeZis, 1);
//     for (let m of GeZiManager.YuanGong) {
// 
// 
//       m.red()
//       m.ReceiveMessage(g)
// 
//     }
//       
//       
//       GeZiManager.GeZi=this.node.getComponent(GeZi).ZB;
// 
//       this.node.getComponent(GeZi).blue();
//       
//                 MessageCenter.MakeMessage("UIManager","change",2)
//                
//                
//                 MessageCenter.MakeMessage("AM",turn.turn,"getC")
//         break;
//       
//      
//      
//      
//      
//     魔法
//      
//         case 4:
//           let k=GeZiManager.redM
//           let o=GeZiManager.blueM
//           if(GeZiManager.PCP.color=="Blue"){o=GeZiManager.redM;k=GeZiManager.blueM}
//         switch (GeZiManager.DLLM) {
//           case 'fireball': MessageCenter.MakeMessage("UIManager","change",-1);
// 
//           for(let manager of GeZiManager.YuanGong){
//     let a=new Message("",[65],-1)
//               manager.ReceiveMessage(a) ;   
//               if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
//                 manager.red()
//               }
//     }
//     MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//     
//     for(let manager of GeZiManager.YuanGong){
//     manager.getFar(4+GeZiManager.JL);}
//     
//     GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//     this.node.getComponent(GeZi).blue();
//             
//             break;
//             case 'cure':
//               MessageCenter.MakeMessage("UIManager","change",-1);
//               let a=new Message("",[65],-1)
//               for(let manager of GeZiManager.YuanGong){
//               
//                   manager.ReceiveMessage(a)  
//                   if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
//                     manager.red()
//                   }  
//       }
//       MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//       
//       for(let manager of GeZiManager.YuanGong){
//         manager.getFar(4+GeZiManager.JL);
//       if(GeZiManager.BanMove.includes(manager.ZB)){
//       
//           
//       }else{  manager.red(); }
//           }
//           GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//           this.node.getComponent(GeZi).blue();;
//             break;
//            
//             case 'ice': MessageCenter.MakeMessage("UIManager","change",-1);
// 
//             for(let manager of GeZiManager.YuanGong){
//     let a=new Message("",[65],-1)
//                 manager.ReceiveMessage(a)   
//                 if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
//                   manager.red()
//                 } 
//     }
//     MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//     
//     for(let manager of GeZiManager.YuanGong){
//       manager.getFar(4+GeZiManager.JL);
//     if(GeZiManager.BanMove.includes(manager.ZB)&&(GeZiManager.trees.includes(manager.ZB)==false)){
//     
//         
//     }else{  manager.red(); }
//     if (GeZiManager.waterPool.includes(manager.ZB)) {
//       manager.green();
//   }
//   if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
//     manager.red()
//   }  
//   }
// 
// 
// 
// GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//      this.node.getComponent(GeZi).blue();;
//             
//             break;
//             case 'TP':
//               MessageCenter.MakeMessage("UIManager","change",-1);
// 
//             for(let manager of GeZiManager.YuanGong){
//     let a=new Message("",[65],-1)
//                 manager.ReceiveMessage(a)    
//     }
//     MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//     
//     for(let manager of GeZiManager.YuanGong){
//       manager.getFar(5+GeZiManager.JL);
//     if(GeZiManager.BanMove.includes(manager.ZB)){
//     
//       manager.red();
//     }
//     if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
//       manager.red()
//     }  
//   
//   }
// GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//      this.node.getComponent(GeZi).blue();;
//             
//             break;
//             case 'thunder': 
//             MessageCenter.MakeMessage("UIManager","change",-1);
// 
//             for(let manager of GeZiManager.YuanGong){
//       let a=new Message("",[65],-1)
//                 manager.ReceiveMessage(a) ;   
//                 if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
//                   manager.red()
//                 }  
//       }
//       MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//       
//       for(let manager of GeZiManager.YuanGong){
//       manager.getFar(6+GeZiManager.JL);}
//       
//       GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//       this.node.getComponent(GeZi).blue();;
//           break;    
//      case 'banana': 
//      for(let manager of GeZiManager.YuanGong){
//       let a=new Message("",[65],-1)
//                 manager.ReceiveMessage(a) ;   
//       }
//       MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//       
//       for(let manager of GeZiManager.YuanGong){
//       manager.getFar(4+GeZiManager.JL);
//       if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
//         manager.red()
//       }  
//     }
//       
//       GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//       this.node.getComponent(GeZi).blue();;
//             
//             break;
//      case "KB":
// 
// 
// if(GeZiManager.PCP.color=="Blue"){o=GeZiManager.redM;k=GeZiManager.blueM} 
//                a=new Message("",[65],-1)
//                 for(let manager of GeZiManager.YuanGong){
//                 
//                     manager.ReceiveMessage(a)    
//         }
//         MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//         
//         for(let manager of GeZiManager.YuanGong){
//           manager.getFar(4+GeZiManager.JL);
//         if(GeZiManager.BanMove.includes(manager.ZB)&&(GeZiManager.trees.includes(manager.ZB)==false)){
//         
//             
//         }else{  manager.red(); }
// 
//         if (k.includes( manager.ZB)&&!o.includes( manager.ZB)) {
//             manager.red();
//             } }
//             GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//             this.node.getComponent(GeZi).blue();
// 
//      break;
//           default: 
//           for(let manager of GeZiManager.YuanGong){
//             let a=new Message("",[65],-1)
//                       manager.ReceiveMessage(a) ;   
//             }
//             MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//             
//             for(let manager of GeZiManager.YuanGong){
//             manager.getFar(4+GeZiManager.JL);
//             if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
//               manager.red()
//             }  
//           }
//             
//             GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//             this.node.getComponent(GeZi).blue();;
//                   
//                   break;
//     
//            
// 
// 
//         }
//         if (GeZiManager.grass.includes( this.node.getComponent(GeZi).ZB)) {
//           this.node.getComponent(GeZi).puper(); 
//                   }    
//         MessageCenter.MakeMessage("UIManager","change",2)
//   
//         
//         
//         
//         
//         
//         
//         
//         
//         
//       
//       break;
//       case 9:
//       switch (GeZiManager.DLLM) {
//         case "S00-1":
//         
//         
//         state.ST=9;
//         GeZiManager.DLLM="S00-1"
//         MessageCenter.MakeMessage("UIManager","change",-1);
//         for(let manager of GeZiManager.YuanGong){
//     let a=new Message("",[65],-1)
//             manager.ReceiveMessage(a)    
//     }
//     MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//     let a=0
// if(GeZiManager.PCP.node.getComponent(SXX).BL[8]>0){a=1}
//     for(let manager of GeZiManager.YuanGong){
//     manager.getFar(3+a);
//     
//     }
//     GeZiManager.GeZi=-this.node.getComponent(GeZi).ZB;  
//     this.node.getComponent(GeZi).blue();
//         
//         
//         
//         
//         
//         
//         
//         
//         
//         
//         break;
//         case "S00-2":
//         
//         
//         state.ST=9;
//         GeZiManager.DLLM="S00-2"
//         MessageCenter.MakeMessage("UIManager","change",-1);
//         for(let manager of GeZiManager.YuanGong){
//     let a=new Message("",[65],-1)
//             manager.ReceiveMessage(a)    
//     }
//     MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//     let o=0
// if(GeZiManager.PCP.node.getComponent(SXX).BL[5]>0){o=1}
//     for(let manager of GeZiManager.YuanGong){
//     manager.getFar(3+o);
//     
//     }
//     GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;  
//     this.node.getComponent(GeZi).blue();
//         
//         
//         
//         
//         
//         
//         
//         
//         
//         
//         break;
//         case "S05" :MessageCenter.MakeMessage("UIManager","change",-1);
//         let j=0
// 
//         if (!GeZiManager.PCP.node.getComponent(SXX).JX2.includes("S套牛2")) {
//             j=1+GeZiManager.PCP.FU[1]
//         }
//         for(let manager of GeZiManager.YuanGong){
//   let a=new Message("",[65],-1)
//             manager.ReceiveMessage(a) ;   
//   }
//   MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//   
//   for(let manager of GeZiManager.YuanGong){
//   manager.getFar(3+j);}
//   
//   GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//   this.node.getComponent(GeZi).blue();
//   break;
//    case  "S06":
//     GeZiManager.qing();
//    let AF = [1,3]
//    let i = 0;
//     switch (GeZiManager.PCP.faceTo) {
//       case 6: i = 1;
//         break;
//       case 8: i = 2;
//         break;
//       case 4: i = 3;
//         break;
//     }
// 
// 
//     for (let n = 1; n <= i; n++) {
//       GeZiManager.PCP.turn6(AF);
// 
//     }
//     let an: number[] = [];
//     for (let mannger of AF) {
// 
// 
// 
//       an.push(GeZiManager.PCP.findGe(mannger, 1));
// 
//     }
// 
//     GeZiManager.GeZis = [].concat(an);
// 
//     let c = new Message("", GeZiManager.GeZis, 1);
//     for (let m of GeZiManager.YuanGong) {
// 
// 
//       m.red();
// if(GeZiManager.BanMove.includes(m.ZB)==false){
//       m.ReceiveMessage(c);}
// 
//     }
//     GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//     this.node.getComponent(GeZi).blue();
// 
//    
// 
// break;
// case "S07-2":
//         
//         
// state.ST=9;
// GeZiManager.DLLM="S07-2"
// MessageCenter.MakeMessage("UIManager","change",-1);
// for(let manager of GeZiManager.YuanGong){
// let a=new Message("",[65],-1)
//     manager.ReceiveMessage(a)    
// }
// MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//  o=0
// if(GeZiManager.PCP.node.getComponent(SXX).BL[5]>0){o=1}
// for(let manager of GeZiManager.YuanGong){
// manager.getFar(3+o);
// 
// }
// GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;  
// this.node.getComponent(GeZi).blue();
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// break;
// 
// case "S07-3":
//         
//         
// state.ST=9;
// GeZiManager.DLLM="S07-3"
// MessageCenter.MakeMessage("UIManager","change",-1);
// for(let manager of GeZiManager.YuanGong){
// let a=new Message("",[65],-1)
//     manager.ReceiveMessage(a)    
// }
// MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//  o=0
// if(GeZiManager.PCP.node.getComponent(SXX).BL[5]>0){o=1}
// for(let manager of GeZiManager.YuanGong){
// manager.getFar(3+o);
// 
// }
// GeZiManager.GeZi= -1*this.node.getComponent(GeZi).ZB;  
// this.node.getComponent(GeZi).blue();
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// break;
//   case "S08" :MessageCenter.MakeMessage("UIManager","change",-1);
// 
//   for(let manager of GeZiManager.YuanGong){
// let a=new Message("",[65],-1)
//       manager.ReceiveMessage(a) ;   
// }
// MessageCenter.MakeMessage("AM",turn.turn,"getZB")
// 
// for(let manager of GeZiManager.YuanGong){
// manager.getFar(GeZiManager.PCP.qi+1);}
// 
// GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
// this.node.getComponent(GeZi).blue();
// break;
// 
// case "S04" :MessageCenter.MakeMessage("UIManager","change",-1);
// 
// for(let manager of GeZiManager.YuanGong){
// let a=new Message("",[65],-1)
//     manager.ReceiveMessage(a) ;   
// }
// MessageCenter.MakeMessage("AM",turn.turn,"getZB")
// 
// for(let manager of GeZiManager.YuanGong){
// manager.getFar(Math.floor((GeZiManager.PCP.qi+GeZiManager.PCP.FU[2])/2+1))
// if(GeZiManager.BanMove.includes(manager.ZB)){manager.red()}
// ;}
// 
// GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
// this.node.getComponent(GeZi).blue();
// break;
// 
//   
//         default:
//           break;
//       }  
// 
// 
// 
// 
// 
// 
//             case 11:
//               
//            
//         MessageCenter.MakeMessage("UIManager","change",2)
//       
//       
//       
//       
//       
//       
//       
//             break;
//       
//       
//       
//       case 3.5:for(let manager of GeZiManager.YuanGong){
//         let a=new Message("",[65],-1)
//                   manager.ReceiveMessage(a) ;   
//         }
//         MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//         
//         for(let manager of GeZiManager.YuanGong){
//         manager.getFar(1+GeZiManager.JL);}
//         
//         GeZiManager.GeZi= this.node.getComponent(GeZi).ZB; 
//         this.node.getComponent(GeZi).blue();;
//         MessageCenter.MakeMessage("UIManager","change",2)
//                
//               break;
//     
//             default: 
//          break;
//     }   
//         
//          
//         
//         
//         
//         
//         }
//         
//         
//         getTeamZB(n:number,ZB:number){
//           for(let a of this.AM.getComponent(AnimalManager).YuanGong){
//           
//               if(a.ZB==ZB){
//               
//           
//               if(a.Pturn!=0&&(a.Pturn%2==n%2)){return true}else{return false}
//       }
//           
//           
//          
//           
//           }
//       }
//       
//         
//         }
