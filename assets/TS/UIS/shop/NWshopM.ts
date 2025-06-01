// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, Node } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import turn from "../../game/time/turn";
import GeZiManager from "../../Manager/GeZiManager";
import GMessage from "../../Message/GMessage";
import { Message } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import { SHMessage } from "../../Message/SHMessage";
import SXX from "../../Scharacter/SXX";
import NWshopUI from "./NWshopUI";
import shopM from "./ShopM";
import shopUI from "./shopUI";
import { AudioManager } from '../../BASE/music';

@ccclass('NWshopM')
export default class NWshopM extends ComponentBase {
        static NGS:number=1
       static  NWDJ:boolean=false
        static  NWN:string[]=[]
        static  Npool1:string[] =[ "A128", "A224", "A227", "A228", "A322", "A1421","A1422", "B02","C04","C02","C03","D04","D01","D12","D14"]//女巫武器池一
        static  Npool2:string[] =["A125", "A127","A224","A228","A323","D05","C03","D07","B03","B06","B07","C08","C07","C09","C10","C13","C14","C15","D02","D11","D13","D16"]//女巫武器池二
        static  Npool3:string[] =["A223","A225","A242","A342","C11","C09","B04", "B16","B13","B11","B15","B09","D16","D10","D02","D06"]//女巫武器池三
        static  Npool4:string[] =["A3234","A242","A141","A343", "A242","A243","B11","B14","B01P","B02P","B04","B09","B17","C12","D10","D20","D06"]//女巫武器池四
        static  Npool5:string[] =["A1462","A264","A264","A164","A362","A361", "B14", "B01P","B02P","B14","D20","C12"]//女巫武器池五
        static nss:number[]=[0,0,0,0,0];
    static k1:number[]=[0,0,0,0,0]
    static k2:number[]=[0,0,0,0,0]
    static k3:number[]=[0,0,0,0,0]
    static k4:number[]=[0,0,0,0,0]
    static k5:number[]=[0,0,0,0,0]
    static k6:number[]=[0,0,0,0,0]
        static NWshopUI:Node=null;
    static SL:number=0;
        //女巫商店消耗池
        static  Nx1:string[] =["1qi","2qi","free","1HP","1qi"]
        static  Nx2:string[] =["2qi","3qi","1HP","2qin","1qin","2qi","1HP"]
        static  Nx3:string[] =["2qi","2qi","2HP","2MHP","2qin","3qi","qipao","3qi"]
        static  Nx4:string[] =["4qi","3qi","1TN","5qi","3HP","2MHP"]
        static  Nx5:string[] =["1qi","1qi","free","1qi","1qin","1qi"]
        static TS:string[]=[];//名字
        
       static BNWN:number=2
       static RNWN:number=2
     onLoad(): void {
        NWshopM.NWshopUI=find("Canvas/UIManager/BUIManager/NWshopUI")
        MessageCenter.addReceive(this);
        }
       static getBNWN(){
    
    let o=[0,3,8,14]
    let a=0
    for (let index = 0; index < o.length; index++) {
       if(GeZiManager.Bhun>=o[index]){a=index}
        
    }
    NWshopM.BNWN=GeZiManager.Bhun+2
    return GeZiManager.Bhun+2
       }
       static getRNWN(){
    
        let o=[0,3,8,10]
        let a=0
        for (let index = 0; index < o.length; index++) {
           if(GeZiManager.Rhun>=o[index]){a=index}
            
        }
        NWshopM.RNWN=GeZiManager.Rhun+2
        return GeZiManager.Rhun+2
           }  
        static get5(n:number){
            let c,d=[]
    
    
    
    
    let k=NWshopM.RNWN
    if (GeZiManager.PCP.color=="Blue") {
        k=NWshopM.BNWN
    }
    
    let p1,p2,p3,p4,p5
    let y=["FU0","FU1","FU2","FU3"]
    if (k==2) {
        y.push("Hun","Hun")
    }
    switch (k) {
       
            case 2: p1=NWshopM.getRA(shopM.Witch2_A,1);p2=NWshopM.getRA(shopM.Witch2_B,1);p3=NWshopM.getRA(shopM.Witch2_C,1);p4=NWshopM.getRA(shopM.Witch2_D,1);p5=NWshopM.getRA(y,1);
            
            break;
            case 3:  p1=NWshopM.getRA(shopM.Witch3_A,1);p2=NWshopM.getRA(shopM.Witch3_B,1);p3=NWshopM.getRA(shopM.Witch3_C,1);p4=NWshopM.getRA(shopM.Witch3_D,1);p5=NWshopM.getRA(y,1);
            
            break;
            case 4: p1=NWshopM.getRA(shopM.Witch4_A,1);p2=NWshopM.getRA(shopM.Witch4_B,1);p3=NWshopM.getRA(shopM.Witch4_C,1);p4=NWshopM.getRA(shopM.Witch4_D,1);p5=NWshopM.getRA(y,1);
            
            break;
            case 5: p1=NWshopM.getRA(shopM.Witch5_A,1);p2=NWshopM.getRA(shopM.Witch5_B,1);p3=NWshopM.getRA(shopM.Witch5_C,1);p4=NWshopM.getRA(shopM.Witch5_D,1);p5=["Hun"];
            
            break;
        default:
          p1=NWshopM.getRA(shopM.Witch6,1);p2=NWshopM.getRA(shopM.Witch6,1);p3=NWshopM.getRA(shopM.Witch6,1);p4=NWshopM.getRA(shopM.Witch6,1);p5=NWshopM.getRA(shopM.Witch6,1);
            
    }
    
    for (let index = 0; index < n; index++) {
     //   d.push(c[Math.floor(Math.random()*c.length)])
        
    }
    console.log([p1,p2,p3,p4,p5])
    console.log(GeZiManager.PCP.node.getComponent(SXX))
    console.log(GeZiManager.PCP.node.getComponent(SXX).NWNA([p1,p2,p3,p4,p5],k))
    
    
    return GeZiManager.PCP.node.getComponent(SXX).NWNA([p1,p2,p3,p4,p5],k)
        }
        
        
        
        
        static getf(n:number){
            let c,d=[]
    
    switch (n) {
        case 0:   c=NWshopM.mArr1Arr2(NWshopM.Npool2,NWshopM.Npool2)
            
            break;
            case 1:c=NWshopM.mArr1Arr2(NWshopM.Npool3,NWshopM.Npool3)
            
            break;
        default: c=NWshopM.mArr1Arr2(NWshopM.Npool4,NWshopM.Npool4)
            break;
    }
           
            
          
    
    for (let index = 0; index < n+2; index++) {
        d.push(c[Math.floor(Math.random()*c.length)])
        
    }
    
    return d
        }
        
    
    
    
        static getGL(n:number){
            let a
                switch (n) {
                case 1: a=[1,1,1,1,1,1,1,2,2,2,3]
                    
                    break;
                    case 2: a=[1,2,2,2,2,2,2,3,3,3,4]
                    
                    break;
            
                    case 3: a=[2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4]
                    
                    break;
            
                    case 4: a=[1,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5]
                    
                    break;
            
                 
            
                default: a=[1,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5]
                    break;
                
            }
            
            let b;
            console.log(a[Math.floor(Math.random() * a.length)])
            switch (a[Math.floor(Math.random() * a.length)]) {
                case 1:b=NWshopM.Npool2
                    
                    break;
                    case 2:b=NWshopM.Npool3
                    break;
                    case 3:b=NWshopM.Npool4
                    
                    break;
                    case 4:b=NWshopM.Npool5
                    break;
                   
            
                default:b=NWshopM.Npool5
                    break;
            }
    let c
    switch (a[Math.floor(Math.random() * a.length)]) {
        case 1:c=NWshopM.Nx1[Math.floor(Math.random()*NWshopM.Nx1.length)]
            
            break;
            case 2:c=NWshopM.Nx2[Math.floor(Math.random()*NWshopM.Nx2.length)]
            
            break;
            case 3:c=NWshopM.Nx3[Math.floor(Math.random()*NWshopM.Nx3.length)]
            
            break;
            case 4:c=NWshopM.Nx4[Math.floor(Math.random()*NWshopM.Nx4.length)]
            
            break;
        default:c=NWshopM.Nx5[Math.floor(Math.random()*NWshopM.Nx5.length)]
            break;
    }
    
    
            
            return shopM.getRA(b,1)[0]
            }
    
    
    
        ReceiveMessage(message: Message): void {
           
       //    console.log(message)
           
           
            if (message instanceof SHMessage&&message.Type=="NWSU") {
                console.log(message)
                /*     
                let    kk1=Math.max(NWshopM.k1[0],NWshopM.k2[0],NWshopM.k3[0],NWshopM.k4[0],NWshopM.k5[0],NWshopM.k6[0]);
                let kk2=Math.max(NWshopM.k1[1],NWshopM.k2[1],NWshopM.k3[1],NWshopM.k4[1],NWshopM.k5[1],NWshopM.k6[1]);
                let kk3=Math.max(NWshopM.k1[2],NWshopM.k2[2],NWshopM.k3[2],NWshopM.k4[2],NWshopM.k5[2],NWshopM.k6[2]);
                let kk4=Math.max(NWshopM.k1[3],NWshopM.k2[3],NWshopM.k3[3],NWshopM.k4[3],NWshopM.k5[3],NWshopM.k6[3]) ;
                let kk5=Math.max(NWshopM.k1[4],NWshopM.k2[4],NWshopM.k3[4],NWshopM.k4[4],NWshopM.k5[4],NWshopM.k6[4]) ;
            
    let j=[kk1,kk2,kk3,kk4,kk5][message.Content-1]
             
                switch (message.SHtype) {
                
                    case "pool": NWshopM.TS=message.Content;
                        break;
                    case "buy": 
                  
                    switch (message.from) {
                         case 1://NWshopM.k1[message.Content-1]+=1;
                         break;
                         case 2://NWshopM.k2[message.Content-1]+=1 
                            
                            break;
                         case 3://NWshopM.k3[message.Content-1]+=1   
                            ;
                            break;
                            case 4://NWshopM.k4[message.Content-1]+=1
                          
                            break;
                            case 5://NWshopM.k5[message.Content-1]+=1
                         
                            break;
                        default://NWshopM.k6[message.Content-1]+=1
                            break;
                    }
               
                 
               
    
    
                        break;
                
                    default:
                        break;
    
                    }
    
    
    NWshopM.PDW(message.from,message.Content,j)
    */
    
    if (message.SHtype=="NW") {
       AudioManager.instance.ZJP("ui",6)
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.TNJJ[5]+GeZiManager.TNC[5],GeZiManager.PCP.Pturn,"TN-")
        GeZiManager.TNC[5]=2
    
     
        if(GeZiManager.PCP.color=="Red"){
          //  GeZiManager.Rhun+=1
   // NWshopM.getRNWN();
    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],NWshopM.RNWN,GeZiManager.PCP.Pturn,"Qi-")
         }else{  
            //GeZiManager.Bhun+=1;  NWshopM.getBNWN();
            
            MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],NWshopM.BNWN,GeZiManager.PCP.Pturn,"Qi-")}
         //GeZiManager.getHUN();
       
      //  GeZiManager.PCP.NWS++
    }else  if (message.SHtype=="XJ") {
        
   AudioManager.instance.ZJP("ui",8)
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"HP-")
        if(GeZiManager.PCP.color=="Red"){
             GeZiManager.Rhun+=1
      NWshopM.getRNWN();}else{ GeZiManager.Bhun+=1
        NWshopM.getBNWN();}
GeZiManager.getHUN()
MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.TNJJ[5]+GeZiManager.TNC[5],GeZiManager.PCP.Pturn,"TN-")

    }else{
    NWshopM.chose(message.Content)}
            }
        }
    
    
    
    
    static GSNWshop(){
      //  NWshopM.TS.push(NWshopM.getGL(NWshopM.SL))
       /// NWshopM.TS.push(NWshopM.getGL(NWshopM.SL))
       // NWshopM.TS.push(NWshopM.getGL(NWshopM.SL))
       // NWshopM.TS.push(NWshopM.getGL(NWshopM.SL))
       // NWshopM.TS.push(NWshopM.getGL(NWshopM.SL+1))
    
      
     // MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB], NWshopM.TS,0,"pool")
    
     //let l=shopM.GETSM(turn.round)
      
        MessageCenter.MakeGMessage("SU",[GeZiManager.PCP.ZB],[shopM.A1n,shopM.A2n,shopM.A3n,shopM.A4n,shopM.A5n,shopM.A6n],GeZiManager.PCP.Pturn,"pool")
    NWshopM.NGS=1
    
    for(let c of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]){
    if (c.NWS>2) {
        c.NWS--
    }
    if (c.NWS>2) {
        c.NWS--
    }
    }
    
    
    
    }
    
    
    
    
    static PMend(){
    let kk1=Math.max(NWshopM.k1[0],NWshopM.k2[0],NWshopM.k3[0],NWshopM.k4[0],NWshopM.k5[0],NWshopM.k6[0])
    let kk2=Math.max(NWshopM.k1[1],NWshopM.k2[1],NWshopM.k3[1],NWshopM.k4[1],NWshopM.k5[1],NWshopM.k6[1])
    let kk3=Math.max(NWshopM.k1[2],NWshopM.k2[2],NWshopM.k3[2],NWshopM.k4[2],NWshopM.k5[2],NWshopM.k6[2])
    let kk4=Math.max(NWshopM.k1[3],NWshopM.k2[3],NWshopM.k3[3],NWshopM.k4[3],NWshopM.k5[3],NWshopM.k6[3])  
    let kk5=Math.max(NWshopM.k1[4],NWshopM.k2[4],NWshopM.k3[4],NWshopM.k4[4],NWshopM.k5[4],NWshopM.k6[4])  
    let a=[kk1,kk2,kk3,kk4,kk5]
    for(let i=0;i<=4 ;i++){
    if(a[i]!=0){NWshopM.Give(i,a[i])}
    
    
    }
    
    NWshopM.Give2();
    
    }
    static Give(i:number,n:number){
    let a=GeZiManager.getc(NWshopM.nss[i]).ZB;
    
    if(GeZiManager.getc(NWshopM.nss[i]).qi>=n){
    MessageCenter.MakeSHMessage("AM",[a],NWshopM.TS[i-1],0,"changeE");
    MessageCenter.MakeSHMessage("AM",[a],n-1,0,"Qi-");}else{MessageCenter.MakeSHMessage("AM",[a],1,0,"HP-")}
    
    }
    
    
    
    
    static Give2(){
    let j=[NWshopM.k1.concat(),NWshopM.k2.concat(),NWshopM.k3.concat(),NWshopM.k4.concat(),NWshopM.k5.concat(),NWshopM.k6.concat()]
    
    for (let index = 0; index <= 5; index++) {
      let sh=0;
      for (let g of j[index]){if(g!=0){sh++;}} 
    if (sh>GeZiManager.getc(index+1).qi) {
        MessageCenter.MakeSHMessage("AM",[GeZiManager.getc(index+1).ZB],1,0,"HP-")
        MessageCenter.MakeSHMessage("AM",[GeZiManager.getc(index+1).ZB],GeZiManager.getc(index+1).qi,0,"Qi-")
    }else{
      MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.getc(index+1).ZB],sh,0,"Qi-")}}}
    
    
    
    
    static PDW(P:number,WhichE:number,max:number){
    
    switch (P) {
        case 1:if(NWshopM.k1[WhichE-1]>max){NWshopM.nss[WhichE-1]=P}
            
            break;
            case 2:if(NWshopM.k2[WhichE-1]>max){NWshopM.nss[WhichE-1]=P}
            
            break;
            case 3:if(NWshopM.k3[WhichE-1]>max){NWshopM.nss[WhichE-1]=P}
            
            break;
            case 4:if(NWshopM.k4[WhichE-1]>max){NWshopM.nss[WhichE-1]=P}
            
            break;
            case 5:if(NWshopM.k5[WhichE-1]>max){NWshopM.nss[WhichE-1]=P}
            
            break;
            case 6:if(NWshopM.k6[WhichE-1]>max){NWshopM.nss[WhichE-1]=P}
            
            break;
    
        default:
            break;
    }
    
    
    
    
    }
    static chose(n){
NWshopM.NWDJ=false

    if(n[0]=="S"){
    GeZiManager.PCP.node.getComponent(SXX).choseS(n)
    for(let m of GeZiManager.PCP.shop2){m.Shop2(n[0],false);}
    }
    else if(n[0]=="TNS"){
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"TNS")
        
        }
    
        else if(n[0][0]=="F"){
    console.log(n)
            MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],parseInt(n[0][2]),GeZiManager.PCP.Pturn,"qin+")
            
            }  else if(n=="HP"){
                MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"MaxHP+")
                MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"HP+")
               
                
                }
                else if(n=="qi"){
                   
                    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],3,GeZiManager.PCP.Pturn,"Qi+")
                   
                    
                    }
    else{
        console.log(GeZiManager.PCP.ZB)
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],n[0],GeZiManager.PCP.Pturn,"changeE")
    
        for(let m of GeZiManager.PCP.shop2){m.Shop2(n[0],false);}
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    
    static mArr1Arr2<T>(...arrays: T[][]): T[] {
        const mergedArray: T[] = [].concat(...arrays);
        return mergedArray;
      }
      //合并相同元素？
      
      static   getRA(arr:string[], n:number) {
        const len = arr.length;
        const result = [];
        
        if (n >= len) {
            return arr.slice(); // 如果要选取的元素数量大于等于数组长度，直接返回整个数组的副本
        }
        
        const pickedIndexes = new Set();
        while (pickedIndexes.size < n) {
            let randomIndex = Math.floor(Math.random() * len);
            pickedIndexes.add(randomIndex);
        }
        
        pickedIndexes.forEach((index: number) => {
            result.push(arr[index]);
        });
        
        return result;
    }
    
    }
    
    
    