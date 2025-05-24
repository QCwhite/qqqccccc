// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, Node } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import GeZiManager from "../../Manager/GeZiManager";

import KHD2 from "../../Message/KHD2";
import { Message } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import { SHMessage } from "../../Message/SHMessage";
import S03 from "../../Scharacter/S03";
import SXX from "../../Scharacter/SXX";
import shopUI from "../../UIS/shop/shopUI";
import A509 from "../../equipment/weapon/SC/A509";
import weapon from "../../equipment/weapon/weapon";
import turn from "../../game/time/turn";
import NWshopM from "./NWshopM";
import shops from "./shops";
import Shops from "./shops";
import { log } from 'console';
import { SubtitleManager } from '../baom';
import { SpriteFrame } from 'cc';
import state from '../../game/time/state';
import { set } from '../../../../@cocos/creator-types/editor/packages/scene/@types/cce/utils/lodash';

@ccclass('ShopM')
export default class shopM extends ComponentBase {
        static SL:number=1;//武器更新次数
        static   A1n:any[]=[2,0,"A110"];//价格，数量
        static   A2n:any[]=[2,0,"A210"];
        static   A3n:any[]=[2,0,"A310"];
         static  A4n:string=null;
       
         static  A5n:string=null;
       
        
         static  A6n:number[]=[2,1];//地雷
         static  A7n:number[]=[2,1,1];//旗帜
          
         static n:number=1;//1是普通商店。2是女巫商店
           static shopUI:Node=null;
      

  @property(SpriteFrame )
    gbl:SpriteFrame=null


             static You_A = ["A1422", "A227", "A221", "A224", "A122", "A121", "A127", "A321"];//, "A323"
             static You_C = ["C01", "C02", "C04", "C06", "C07", "C10"];
             static You_D = ["D01", "DP1", "D04", "D05", "D08", "D12"];
             static You_B = ["B01", "B01", "B10", "B12", "B07", "B08", "B05"];
         
             // 白天池 (Day)
             static Day1_A = ["A228", "A227", "A221", "A122", "A121", "A127", "A125", "A243", "A128", "A321", "A110", "A310", "A210", "Hun", "Hun"];//,"A323"
             static Day1_C = ["C01", "C02", "C04", "C06", "C07", "C14", "C15", "C10", "Hun"];
             static Day1_D = ["D01", "DP1", "D04", "D05", "D12", "D11", "D03", "Hun"];
             static Day1_B = ["B01", "B10", "B12", "B07", "B08", "B05", "B06", "B19"];
         
             static Day2_A = ["A143", "A141", "A142", "A225", "A243", "A242", "A345", "A581P2", "A582P1", "A321P", "Hun", "Hun"];
             static Day2_C = ["C17", "C01", "C15", "C18", "C08", "C13", "C19"];
             static Day2_D = ["D08", "D06", "D17", "D15", "D13"];
             static Day2_B = ["B16", "B11", "B15", "B17", "B18", "B03P2"];
         
             // 女巫池 (Witch)
             static Witch2_A = ["A1421", "A1421", "A1421", "A1422", "A582", "A128", "A321","A110", "A310", "A210", "A322", "Hun", "Hun", "Hun"];// "A323"
             static Witch2_C = ["C07", "C04", "C03", "C14", "C10", "C11", "C06", "Hun", "Hun"];
             static Witch2_D = ["DP1", "D02", "D07", "D14", "D18", "D11", "D03", "Hun"];
             static Witch2_B = ["A322", "B01", "B02", "B06", "B13"];
         
             static Witch3_A = ["A228", "A125", "A243", "A127", "A225", "A221", "A224", "A581", "A582", "A322", "Hun", "Hun"];// "A323"
             static Witch3_C = ["C03", "C08", "C11", "C09", "C20", "C18", "C13"];
             static Witch3_D = ["D02", "D18", "D16", "D09", "D06", "D10", "D13"];
             static Witch3_B = ["B13", "B16", "B19", "B03P2", "B09"];
         
             static Witch4_A = ["A143", "A142", "A141", "A243", "A147", "A225", "A225", "A343", "A321P", "A345"];
             static Witch4_C = ["C09", "C13", "C12", "C16", "C20", "Hun"];
             static Witch4_D = ["D17", "D19", "D16", "D09", "D06"];
             static Witch4_B = ["B18", "B17", "B04", "B11", "B09"];
         
             static Witch5_A = ["A144", "A145", "A242", "A343", "A322", "Hun"];
             static Witch5_C = ["C12", "C16"];
             static Witch5_D = ["D20", "D19"];
             static Witch5_B = ["B04", "B01P", "B02P"];
         
             // 女巫6特殊池（保留地狱南瓜炮原始映射）
             static Witch6 = [
                 "A1462", "D20", "C16", "B14", "A162", 
                 "A264",  // 地狱南瓜炮保持原始映射为火箭筒
                 "A1461", "A363", "A362", "A161", 
                 "A361", "A164", "A262", "A261", "A263"
             ];



      
             





















       static  TGEQ:string[]=[]
       
          
       ////////////////////////////////////////////////////////////////
          
       
       
        
           static i:number=1//升级的两个选项
          
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
       static AStrings(stringArray:number, n: number, k: number): string[] {
           // 过滤出以"A"开头的字符串
       let A1 ,A2,B,C,D
       
       switch (shopM.SL) {
           case 1:C=shopM.getRA(shopM.Day1_C,1)[0];D=shopM.getRA(shopM.Day1_D,1)[0];B="A310";A1="A110";A2="A210";
               
               break;
               case 2:C=shopM.getRA(shopM.Day1_C,1)[0];D=shopM.getRA(shopM.Day1_D,1)[0];B=shopM.getRA(shopM.Day1_B,1)[0];let AA=shopM.getRA(shopM.Day1_A,2);A2=AA[0];A1=AA[1]
               
               break;
            
           default:C=shopM.getRA(shopM.Day2_C,1)[0];D=shopM.getRA(shopM.Day2_D,1)[0];B=shopM.getRA(shopM.Day2_B,1)[0];let AA1=shopM.getRA(shopM.Day2_A,2);A2=AA1[0];A1=AA1[1]
               break;
       }
       
       console.log([C,D,B,A1,A2])
       return [A1,A2,B,C,D]
          
       }
       
          onLoad(){
               turn.Doo.push(this);
               turn.Roo.push(this);
               shopM.shopUI=find("Canvas/Main Camera/UIManager/shopUI")
             MessageCenter.addReceive(this)
               //shopM.BTshop();
               // shopM.BTshop()
           }
          
           
       static getTGEQ(){
       if (KHD2.PT.includes(6)) {
           
       }
       
       
       }
           
        roundPass(){
           if (turn.round%12==1) {
               shopM.ToBT()
           }    
       
             if ((turn.round % 12 === 4) || (turn.round  % 12 === 1) ){
           
               shopM.BTshop();
               SubtitleManager.show(
                {
                    bgSprite:"Yellow",
                    image1:this.gbl,
                    text1: "哦,靓仔靓女,商店进了新货喽",
                    image2: null,
                    text2: "",
                    duration: 5
                }


               )
             
             }else{ if(turn.round%6==1){
       
               shopM.ToNW()
                   }}
          
                 
       
                   
        }
       
       
        static ToNW(){
           find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/shop").active=false;
           find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/NWshop").active=true;
       NWshopM.GSNWshop();
       console.log(find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/NWshop").active)
       
       
       
       
       
       
       }
       static ToBT(){ 
           
         
          
           shopM.A1n[2]=[]
           shopM.A2n[2]=[]
           shopM.A3n[2]=[]
           find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/shop").active=true;
       find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/NWshop").active=false;
       console.log(find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/NWshop").active)
       //NWshopM.PMend();
       
       }
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       ReceiveMessage(message: Message): void {
          let k=1
          
           if (message instanceof SHMessage&&message.Type=="SU") {
          
               switch (message.SHtype) {
                   case "FTP":  
                       break;
                   case "pool": shopM.A1n=message.Content[0];shopM.A2n=message.Content[1];shopM.A3n=message.Content[2];  shopM.A4n=message.Content[3];shopM.A5n=message.Content[4];shopM.A6n=message.Content[5];
               //    shopM.TGEQ=message.Content[6]
                  // console.log(shopM.TGEQ)
                 console.log("pool")
                   shopM.shopUI.getComponent(shopUI).ST();
                  
                       break;
                   case "buy": 
                   let a   ;let b;
                   switch (message.Content) {
                       case 1:a=shopM.A1n[2];if(this.PPC()){}else{for(let m of GeZiManager.PCP.shop2){m.Shop1();}}shopM.A1n[1]-=1; for(let m of GeZiManager.PCP.shop2){m.Shop2(a,false);};b=shopM.A1n[0]+GeZiManager.free;shopM.A1n[2]=null
                           //
                           break;
                           case 2:a=shopM.A2n[2];if(this.PPC()){}else{for(let m of GeZiManager.PCP.shop2){m.Shop1();}}shopM.A2n[1]-=1; for(let m of GeZiManager.PCP.shop2){m.Shop2(a,false);};b=shopM.A2n[0]+GeZiManager.free;shopM.A2n[2]=null
                           
                           break;
                           case 3:a=shopM.A3n[2];if(this.PPC()){}else{for(let m of GeZiManager.PCP.shop2){m.Shop1();}}shopM.A3n[1]-=1; for(let m of GeZiManager.PCP.shop2){m.Shop2(a,false);};b=shopM.A3n[0]+GeZiManager.free;shopM.A3n[2]=null
                           
                           break;
                           case 4:a=shopM.A4n;shopM.A4n=null;if(this.PPC()){}else{for(let m of GeZiManager.PCP.shop2){m.Shop1();}}; for(let m of GeZiManager.PCP.shop2){m.Shop2(a,false);};b=k+turn.day+GeZiManager.free;
                        
                           break;
                           case 5:a=shopM.A5n;shopM.A5n=null;if(this.PPC()){}else{for(let m of GeZiManager.PCP.shop2){m.Shop1();}}; for(let m of GeZiManager.PCP.shop2){m.Shop2(a,false);};b=k+turn.day+GeZiManager.free;
                         
                           break;
                       default:;a=this.levelup(message.Content-5)[0];b=this.levelup(message.Content-5)[1];for(let m of GeZiManager.PCP.shop2){m.Shop2(a,true);}
                           break;
                   }
                   if (a!=null) {
                       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],a,GeZiManager.PCP.Pturn,"changeE")
                   }
                 
                   MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.TNJJ[5]+GeZiManager.TNC[5],GeZiManager.PCP.Pturn,"TN-")
                   MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],b,GeZiManager.PCP.Pturn,"Qi-")
                   GeZiManager.TNC[5]=2;
          GeZiManager.PCP.Bu.push(5);
                       break;
               
                   default:
                       break;
               }
               for(let m of GeZiManager.PCP.shop3){m.Shop3();}
           }
       }
       levelup(i:number){ 
           
           let A1=null
           let co
           //GeZiManager.PCP.weapon.getComponent(weapon).TheNumber
           switch (GeZiManager.PCP.weapon.TheNumber) {
           
           
           case "A110": switch(i){
               case 1:A1="A131"
                break;
               case 2:A1="A132"
               break;
            }
            co=2;
               break;
        case "A131": A1="A151" ; co=4;
               break;
        case "A132": A1="A152" ; co=4;
               break;
           
           
               case "A210": switch(i){
                   case 1:A1="A231"
                    break;
                   case 2:A1="A232"
                   break;
                }
                co=3;
                   break;
            case "A231": A1="A251" ; co=3;
                   break;
            case "A232": A1="A252" ; co=3;
                   break;
               
       
                   case "A310": switch(i){
                       case 1:A1="A331";   co=2;
                        break;
                       case 2:A1="A332";co=2;
                       break;
                    }
                 
                       break;
                case "A331": A1="A351" ; co=3;
                       break;
                case "A332": A1="A352" ; co=3;
                       break;
                 case "A580":switch(i){
                   case 1:A1="A581";co=2;
                    break;
                   case 2:A1="A582";co=2;
                   break;
                }
                
       break;
       
       case "A121": A1="A146" ; co=5;
       break
       case "A122": A1="A144" ; co=4;
       break
       case "A127": A1="A142" ; co=4;
       break
       case "A125": A1="A145" ; co=4;
       break
       case "A126": A1="A145" ; co=3;
       
       break;
       case "A145": A1="A164" ; co=4;
       
       break
       case "A128": A1="A147" ; co=3;
       break
       case "A141": A1="A161" ; co=5;
       break
       case "A142": A1="A162" ; co=6;
       break
       case "A221": A1="A221P" ; co=2;
       break
       case "A227": A1="A223" ; co=3;
       break

       case "A223": A1="A262" ; co=6;
       break
       case "A228": A1="A242" ; co=3;
       break
       
       
       case "A225": A1="A264" ; co=5;
       break
       case "A242": A1="A263" ; co=5;
       break
       case "A321": A1="A321P" ; co=3;
       break;
       case "A321P": A1="A352" ; co=4;
       break;

case"A323P1": A1="A323P2" ; co=1;
break;
case"A323P2": A1="A323P3" ; co=2;
break;
case"A323P3": A1="A323P4" ; co=3;
break;
case"A323P4": A1="A362" ; co=4;
break;
       case "A322": A1="A342" ; co=3;
       break;
       case "A345": A1="A361" ; co=6;
       break
       
       
       case "A581":switch(i){
           case 1:A1="A581P1";co=4;
            break;
           case 2:A1="A581P2";co=4;
           break;
        }
        
       break;
       case "A582":switch(i){
           case 1:A1="A582P1";co=3;
            break;
           case 2:A1="A582P2";co=3;
           break;
        }
        
       break;
       
       
       case "A583": A1="A583P1" ; co=3;
       break;
       case "A503":switch(i){
           case 1:A1="A503A";co=2;
            break;
           case 2:A1="A503B";co=3;
           break;
        }
       break;
       
       
       case "A509":
           
          A1="A509"
           co=4;
       break;
       case "A509-1":
           
          A1="A509"
           co=4;
       break;
       case "A509-2":
           
          A1="A509"
           co=4;
       break;
        case "A509-3":
           
          A1="A509"
           co=4;
       break;
       case "A504":
           
          A1="A110"
           co=2;
       break;
       
       case "A1421":
           
       A1="A1462"
        co=10;
    break;
       
       
       
               default:
               break;
       }
       return [A1,co];
       }
       
       
       
       
       
       
       
    
       
       
       
       
       
       
       
       
       
       static BTshop(){
           
       
       
           if (KHD2.PT.includes(1)||MessageCenter.Text) {
             let j=5;
             let k=0
             let g=["S01","S02","S04","S07","S10"]
             let o=shopM.AStrings(turn.day,k,j)
             //for(let j of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]){
       
            //   if(g.includes(j.node.getComponent(SXX).Snumber)){k++}
             
             
            // }
            console.log(o);
            // if(k<2){k=0}else{k-=2}
             //  if(turn.round<3){ j=2
               //    k=0}
           
                
             if (turn.round>=3) {
                 shopM.A1n[2]=o[0]
                 shopM.A2n[2]=o[1]
                 shopM.A3n[2]=o[2]
              }
              shopM.A4n=o[3]
              shopM.A5n=o[4]
             
             if(shopM.A1n[1]<2){shopM.A1n[1]+=1};
           if(shopM.A2n[1]<2){shopM.A2n[1]+=1};
           if(shopM.A3n[1]<2){shopM.A3n[1]+=1};
             
           shopM.A1n[0]=turn.day*2
           shopM.A2n[0]=turn.day*2
           shopM.A3n[0]=turn.day*2
           //let l=shopM.GETSM(turn.round)
          
           
           if(shopM.A6n[1]==0){shopM.A6n[0]+=1};
            if(shopM.A6n[1]!=3){shopM.A6n[1]+=1}



       
       
             //  console.log(l)
            }
         
        
          
       
       
       
       
       
           if(shopM.A7n[1]<1){shopM.A7n[1]+=1};
           if(shopM.A7n[2]<1){shopM.A7n[2]+=1};
          
       shopM.SL++


      shopM.D();
           }
       
  static   D(){

console.log("D")
if (state.JJW) {
    shopM.FA();
}else{setTimeout(()=>{shopM.D()},200)}
              
       


    }



       static  FA(){
console.log("FA")
 MessageCenter.MakeGMessage("SU",[GeZiManager.PCP.ZB],[shopM.A1n,shopM.A2n,shopM.A3n,shopM.A4n,shopM.A5n,shopM.A6n],GeZiManager.PCP.Pturn,"pool")









       }
       
        start(): void {
         if (MessageCenter.Text) {
               console.log("HHH")
// shopM.BTshop()



         }  



       //     find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/shop").getComponent(shopUI).ST()
       }
       
       
       
       static getGL(n:number){
       let a
         //  switch (n) {
         //  case 1: a=[1]
               
          //     break;
           //    case 2: a=[1,2,2,2,3]
               
            //   break;
       
            //   case 3: a=[2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4]
               
        //       break;
       
          //     case 4: a=[2,3,3,3,3,3,4,4,4,5]
               
           //    break;
       
            
       
         //  default:a=[2,3,3,3,4,4,4,5,5,5]
           //    break;
           
      // }
       
      // let b;
       //let k
      // console.log(a[Math.floor(Math.random() * a.length)])
      // switch (n) {
       //    case 1:return   shopM.                           //shopM.Apool1;//k=shopM.getRA(b,1)[0];GeZiManager.shanchuALL(shopM.Apool1,k)
               
         //      break;
          //     case 2:return b=shopM.Apool2;//k=shopM.getRA(b,1)[0];GeZiManager.shanchuALL(shopM.Apool2,k)
          //     break;
             
       
        //   default:return b=shopM.Apool3;//k=shopM.getRA(b,1)[0];GeZiManager.shanchuALL(shopM.Apool3,k)
        //       break;
      // }
       
     //  return k
       
       
      //return 
       
       
       }
       
       
       
       
       
       
       
       
       
       static mArr1Arr2<T>(...arrays: T[][]): T[] {
           const mergedArray: T[] = [].concat(...arrays);
           return mergedArray;
         }
       
       
       static getEQ(n:number){
       let b
       
       function shuffleArray<T>(array: T[]): T[] {
           // 创建数组的副本，以避免修改原始数组
           const result = [...array];
           let currentIndex = result.length, randomIndex, temporaryValue;
       
           // 当还有元素需要打乱时
           while (currentIndex !== 0) {
               // 选取一个随机的索引
               randomIndex = Math.floor(Math.random() * currentIndex);
               currentIndex -= 1;
       
               // 交换当前元素和随机选取的元素
               temporaryValue = result[currentIndex];
               result[currentIndex] = result[randomIndex];
               result[randomIndex] = temporaryValue;
           }
       
           return result;
       }
           GeZiManager.Tcharacter=null
           MessageCenter.MakeSHMessage("AM",[n],1,-1,"getOneC")
       if(GeZiManager.Tcharacter&&GeZiManager.Tcharacter.weapon.TheNumber=="AXX"){
          
            b=shopM.You_A
           
       
           
       }else if (GeZiManager.Tcharacter&&GeZiManager.Tcharacter.shose.TheNumber=="CXX") {
           b=shopM.You_C
       }else if (GeZiManager.Tcharacter&&GeZiManager.Tcharacter.accessory.TheNumber=="DXX") {
           b=shopM.You_D
       }else if (GeZiManager.Tcharacter&&GeZiManager.Tcharacter.body.TheNumber=="BXX") {
           b=shopM.You_B
       }else b=["FFF"]
       
       
       
       b=shuffleArray(b)
       
       
       console.log(b)
       GeZiManager.shanchu(shopM.TGEQ,b[0])
       
       for(let m of  GeZiManager.Tcharacter.shop2){m.Shop2(b,false);}
       if (KHD2.PT.includes(6)||MessageCenter.Text) {
           MessageCenter.MakeGMessage("AM",[ GeZiManager.Tcharacter.ZB],b[0],GeZiManager.PCP.Pturn,"changeE")
       }
       
       }
       
       }