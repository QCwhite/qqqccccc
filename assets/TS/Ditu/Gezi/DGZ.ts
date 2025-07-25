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
console.log(state.ST)
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


        let k=GeZiManager.redM;
        let o=GeZiManager.blueM
    if(GeZiManager.PCP.color=="Blue"){o=GeZiManager.redM;k=GeZiManager.blueM}
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
                if (o.includes(manager.ZB)) {
    manager.green()
}
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


case 3.5:



        GeZiManager.qing();
     


      

       g = new Message("", GeZiManager.GeZis, 1);
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
                this.XZ(5,false,false)
        break;
        case 'thunder':
                this.XZ(5,false,false)
                break;
        case 'banana':
                this.XZ(4,false,false)
                break;
        case "KB":
                this.XZ(4,false,false)



        break;
        case "tree":
                this.XZ(4,true,true)



        break;
case "earthquake":  this.XZ(4,false,false)

       break;    
        case "BZ":
                this.XZ(2,false,false)



        break;



        case "tui":   let g=Math.floor(GeZiManager.PCP.qi/2)
                 this.XZ(g+1,false,false)
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
GeZiManager.hf()
switch (   this.node.getComponent(GeZi).ZT) {
        case "move":    this.walk();this.ToZT1()
                break;
  case "turn4":    this.turn4();this.ToZT1()
                break;
case "turn6":       this.turn6();this.ToZT1()
break;

case "attack":    this.attack();this.ToZT2()
break;

case "moveTo":    this.moveTO();this.ToZT1()
break;

        default:
                break;
}






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
              if (o.includes(manager.ZB)) {
    manager.green()
}
         //   if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
            //    manager.red();
          //  }
            }
            MessageCenter.MakeMessage("UIManager","change",-1);
            GeZiManager.GeZi= this.node.getComponent(GeZi).ZB;
            this.node.getComponent(GeZi).blue();
        if ((Ba&&GeZiManager.grass.includes(this.node.getComponent(GeZi).ZB))||(Br&&GeZiManager.grass.includes(this.node.getComponent(GeZi).ZB)&&turn.DorN=="nigth")) {
                this.node.getComponent(GeZi).Kpuper();
        }

       

            }

   attack(){
    
      
    
    
      if(GeZiManager.PCP.weapon.DT){
   console.log(GeZiManager.PCP.PPC())     
        if(GeZiManager.PCP.PPC()){
            MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],[this.node.getComponent(GeZi).ZB],GeZiManager.PCP.Pturn,"attack");    
               // GeZiManager.PCP.weapon.QD([this.node.getComponent(GeZi).ZB])
               }

}else{
        MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],null,GeZiManager.PCP.Pturn,"attack");}

  for (let g of GeZiManager.YuanGong) {
      g.null()
  }

setTimeout(()=>{  this.ToZT2()},310)

    }


               walk(){
                    
                    MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],null,GeZiManager.PCP.Pturn,"walk");
                    
                    }
                
                    walkL(n:number){
                
                    
                        MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],n,GeZiManager.PCP.Pturn,"walkL");
                
                    }
                
                
                
                
                
                    turn4(){
                        MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"turn4");  
                    
                    
                    }
                    
                    
                    
                    turn6(){
                        
                     
                        MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"turn6");
                     
                    
                        }

        ToZT1(){
        
        for (let g of GeZiManager.YuanGong) {
            g.null()
        }
        
        state.ST=99
            MessageCenter.MakeMessage("UIManager","change",99);
        switch (   GeZiManager.PCP.walkWay) {
            case 1:
                GeZiManager.Tomove([   GeZiManager.PCP.findGe(   GeZiManager.PCP.faceTo,1)],   GeZiManager.PCP.getTN(1),0,0,   GeZiManager.PCP.getNM(1))
                  GeZiManager.Toturnn4([   GeZiManager.PCP.findGe(   GeZiManager.PCP.turn4([   GeZiManager.PCP.faceTo])[0],1)],   GeZiManager.PCP.getTN(0),0,0,   GeZiManager.PCP.getNM(0))     
                GeZiManager.Toturnn6([   GeZiManager.PCP.findGe(   GeZiManager.PCP.turn6([   GeZiManager.PCP.faceTo])[0],1)],   GeZiManager.PCP.getTN(0),0,0,   GeZiManager.PCP.getNM(0))
                break;
        
            default:
                break;
        }
        
        
        
        
        
        }
        
        ToZT2(){
        
        for (let g of GeZiManager.YuanGong) {
            g.null()
        }
        
        state.ST=99
            MessageCenter.MakeMessage("UIManager","change",99);
   
            GeZiManager.PCP.weapon.getAttackF()
        
        
        
        
        
        }
        
        moveTO(){


                    if(GeZiManager.PCP.walk2!=null){for(let w of GeZiManager.PCP.walk2){w.Walk2(GeZiManager.GeZi);}}  
                                GeZiManager.PCP.To(this.node.getComponent(GeZi).ZB,0.6);MessageCenter.MakeMessage("UIManager","change",1);
                                GeZiManager.TNC[1]=3;GeZiManager.PCP.Bu.push(1);GeZiManager.PCP.ST()
                                MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+GeZiManager.PCP.TNJJ[1],GeZiManager.PCP.Pturn,"TN-");  
                                if(GeZiManager.PCP.walk3!=null){for(let w of GeZiManager.PCP.walk3){w.Walk3(GeZiManager.PCP.ZB);}}
        }
        }
        
        
        

