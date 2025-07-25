// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, find, Label } from 'cc';
const {ccclass, property} = _decorator;

import timeC from "../UIS/timeC";
import state from "../game/time/state";
import turn from "../game/time/turn";
import player from "../game/player";
import GeZiManager from "../Manager/GeZiManager";
import MessageCenter from "./MessageCenter";

import AnimalManager from "../Manager/AnimalManager";
import MUI from "../UIS/MMUI/MUI";
import { Message } from "./Message";
import ZManager from "../Manager/ZManager";
import KHD2 from "./KHD2";
import { UIOpacity } from 'cc';
import { TGManager } from '../Manager/TGManager';
import { BowlContainer } from '../Ditu/TGMZ';
import shopM from '../UIS/shop/ShopM';

@ccclass('Pchange')
export default class Pchange extends Component {
       // static timeC:timeC=null;
        t:number=0
        //  start(){}
        tt(){
        switch (this.t) {
          case 1:this.t=0;find("Canvas/Main Camera/UIManager/tiaoshi").setPosition(find("Canvas/Main Camera/UIManager/tiaoshi").position.x,find("Canvas/Main Camera/UIManager/tiaoshi").position.y+300,0)
            
            break;
        
          default:this.t=1;find("Canvas/Main Camera/UIManager/tiaoshi").setPosition(find("Canvas/Main Camera/UIManager/tiaoshi").position.x,find("Canvas/Main Camera/UIManager/tiaoshi").position.y-300,0)
            break;
        }
        
        //  console.log("wc")
        }
        
        
        
        p1(){
        KHD2.PT=[3,1,3,5]
        player.Pturn=[1]
        state.JJW=true
        state.Pchange();
        //Pchange.timeC.resetTimer ()
      //  console.log(find("Canvas/DituManager").getComponent(UIOpacity).opacity)
        
        }
         p2(){
          KHD2.PT=[4,2,4,6]
            player.Pturn=[2]
           
                 state.JJW=true
            state.Pchange();
           //Pchange.timeC. resetTimer ()
        
        
        
        }
        
         p3(){
          KHD2.PT=[3]
                player.Pturn=[3]
                state.Pchange();
              //Pchange.timeC. resetTimer ()
        
           
        
            }
        
        p4(){
          KHD2.PT=[4]
                    player.Pturn=[4]
                    state.Pchange() 
                    //Pchange.timeC. resetTimer ()
        
               
        
                  }
        p5(){
          KHD2.PT=[5]
        player.Pturn=[5]
        state.Pchange() 
        //Pchange.timeC. resetTimer ()
        
        
        
        }
        
         p6(){ KHD2.PT=[6]
                            player.Pturn=[6]
                            state.Pchange() ;
                          // Pchange.timeC. resetTimer ()
                    
        
                     }
        
        
        
        
                      start() {
                           
                  //    let a=  find("Canvas/TimeC")
                      //Pchange.timeC=a.getComponent(timeC);
        
                      
                    }
             TN() { MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],5,GeZiManager.PCP.Pturn,"TN=");
             MessageCenter.MakeMessage("UIManager","change",1)
            
           
        
        
        
        
        
             }      
                  
        qiadd(){ MessageCenter.MakeMessage("AM",turn.turn,"getC"); MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,null,"Qi+") } 
        qidd(){ MessageCenter.MakeMessage("AM",turn.turn,"getC"); MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,null,"Qi-") }         
                  
          round(){ 
            MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
            MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
            MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
            MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
            MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
            MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); }      
              
           MCD(){ find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).MCD=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
           
            find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).ST();
            MessageCenter.MakeMessage("UIManager","change",-1)
            for(let mannger of GeZiManager.YuanGong){
        
              let a=""
             let message=new Message(a,[65],-1)
              mannger.ReceiveMessage(message)
          }
             for(let mannger of GeZiManager.YuanGong){
                
                
              let a=""
             let message=new Message(a,GeZiManager.BanMove,5)
              mannger.ReceiveMessage(message)
              
             for (let g of GeZiManager.UIm) {
           // g.initPosition()
         //   g.onOrientationChange()
         g.setupUIBounds()
          }
          }
          
          }
          MCD1(){ find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).MCD=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
           for (let A of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]) {
         A.fadeINAndA(A.node,200)
            
           }
            find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).ST();
            MessageCenter.MakeMessage("UIManager","change",-1)
            for(let mannger of GeZiManager.YuanGong){
        
              let a=""
             let message=new Message(a,[65],-1)
              mannger.ReceiveMessage(message)
          }
             for(let mannger of GeZiManager.YuanGong){
                
                
              let a=""
             let message=new Message(a,GeZiManager.WD,5)
              mannger.ReceiveMessage(message)
              
           
          }
          
          }
        text(){
          MessageCenter.Text=true
        
        
          state.state=1;
          MessageCenter.MakeGMessage("AM",[AnimalManager.FF[0]],1.1,1,"FTP");
             
               
        
          MessageCenter.MakeGMessage("AM",[AnimalManager.FF[1]],1,1,"FTP");
          
          MessageCenter.MakeGMessage("AM",[AnimalManager.FF[2]],2,2,"FTP");
          find("Canvas/DituManager/New Node/AnimalManager").getComponent(ZManager).Cx()
        
          AnimalManager.TP(1,43);
          console.log(GeZiManager.P1.ZB)
          AnimalManager.TP(2,38)
         AnimalManager.TP(3,34)
         AnimalManager.TP(4,39)
         AnimalManager.TP(5,18)
          AnimalManager.TP(6,30)
         turn.turn=1
          console.log(turn.turn)
          console.log(  GeZiManager.PCP)
          MessageCenter.MakeMessage("AM",turn.turn,"getC"); 
               state.ST=1;
          state.JJW=true
          state.Pchange() ;  
          
          GeZiManager.PCP.Tstart();
        
     
          MessageCenter.MakeSHMessage("TN",this.makePool(),0,0,"pool")
          shopM.BTshop()
        }
        
        
        
        texr(){
          KHD2.PT=[3,1,3,5]
          MessageCenter.Text=true
        for (let g of GeZiManager.sideUI) {
        g.setJN()
            
        }
        
         // state.state=1;
          MessageCenter.MakeGMessage("AM",[AnimalManager.FF[0]],1.1,1,"FTP");
             
               
          
         
                    MessageCenter.MakeGMessage("AM",[AnimalManager.FF[1]],1,1,"FTP");
          
                
          
                    MessageCenter.MakeGMessage("AM",[AnimalManager.FF[2]],2,2,"FTP");
              
                
  
      find("Canvas/DituManager/New Node/AnimalManager").getComponent(ZManager).Cx()
        
         
         turn.turn=1
          console.log(turn.turn)
          console.log(  GeZiManager.PCP)
          MessageCenter.MakeMessage("AM",turn.turn,"getC"); 
          state.Pchange() ;  
          
        //  GeZiManager.PCP.Tstart();
        
         // state.ST=1;
          MessageCenter.MakeSHMessage("TN",this.makePool(),0,0,"pool")

shopM.BTshop()

          for (let g of GeZiManager.UIm) {
           // g.initPosition()
         //   g.onOrientationChange()
         g.setupUIBounds()
          }
        }
        
         texr0(){
          KHD2.PT=[3,1,3,5]
          MessageCenter.Text=true
        
        shopM.BTshop()
         // state.state=1;
         // MessageCenter.MakeGMessage("AM",[AnimalManager.FF[0]],1.1,1,"FTP");
             
               
          
         
                //    MessageCenter.MakeGMessage("AM",[AnimalManager.FF[1]],1,1,"FTP");
          
                
          
                  //  MessageCenter.MakeGMessage("AM",[AnimalManager.FF[2]],2,2,"FTP");
              
                
  
     // find("Canvas/DituManager/New Node/AnimalManager").getComponent(ZManager).Cx()
        
         
         turn.turn=1
          console.log(turn.turn)
          console.log(  GeZiManager.PCP)
          MessageCenter.MakeMessage("AM",turn.turn,"getC"); 
          state.Pchange() ;  
          
        //  GeZiManager.PCP.Tstart();
        
         // state.ST=1;
         GeZiManager.BanMove=[65]
          MessageCenter.MakeSHMessage("TN",this.makePool(),0,0,"pool")
        } 
    makePool(): number[] {
        const mergedArray: number[] = [];
        for (let i = 0; i < 3; i++) {
            mergedArray.push(...this.generateGroup());
        }
        return mergedArray;
    }

  
 generateGroup(retryCount = 0): number[] {
    if (retryCount > 20) throw new Error("生成失败");

    const group: (number | null)[] = new Array(12).fill(null);
    const counts: Record<number, number> = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 7:0};
    
    // 1. 放置两个4（前6一个，后6一个）
    const place4s = () => {
        // 前6中放置4（位置0-5）
        const frontCandidates = [0, 1, 2, 3, 4, 5].filter(i => 
            group[i] === null && 
            (i === 0 || group[i-1] !== 4) && 
            (i === 5 || group[i+1] !== 4)
        );
        
        if (frontCandidates.length === 0) return false;
        const frontPos = frontCandidates[Math.floor(Math.random() * frontCandidates.length)];
        group[frontPos] = 4;
        counts[4]++;

        // 后6中放置4（位置6-11）
        const backCandidates = [6, 7, 8, 9, 10, 11].filter(i => 
            group[i] === null && 
            (i === 6 || group[i-1] !== 4) && 
            (i === 11 || group[i+1] !== 4)
        );
        
        if (backCandidates.length === 0) return false;
        const backPos = backCandidates[Math.floor(Math.random() * backCandidates.length)];
        group[backPos] = 4;
        counts[4]++;
        
        return true;
    };

    // 2. 放置前6中的3（位置2或3）
    const placeFront3 = () => {
        const candidates = [2, 3].filter(i => 
            group[i] === null && 
            (i === 2 || group[1] !== 3) && 
            (i === 3 || group[4] !== 3)
        );
        
        if (candidates.length === 0) return false;
        
        const pos = candidates[Math.floor(Math.random() * candidates.length)];
        group[pos] = 3;
        counts[3]++;
        return true;
    };

    // 3. 放置后6中的3（至少一个）
    const placeBack3 = () => {
        const candidates = [6, 7, 8, 9, 10, 11].filter(i => 
            group[i] === null && 
            (i === 6 || group[i-1] !== 3) && 
            (i === 11 || group[i+1] !== 3)
        );
        
        if (candidates.length === 0) return false;
        
        const pos = candidates[Math.floor(Math.random() * candidates.length)];
        group[pos] = 3;
        counts[3]++;
        return true;
    };

    // 4. 放置特殊数字（1,2,7）
    const placeSpecialNumbers = () => {
        const specials = [
            {num: 1, count: 2},
            {num: 2, count: 2},
            {num: 7, count: 1}
        ];
        
        for (const {num, count} of specials) {
            while (counts[num] < count) {
                const candidates = this.getValidPositions(group, num, -1);
                if (candidates.length === 0) return false;
                
                const pos = candidates[Math.floor(Math.random() * candidates.length)];
                group[pos] = num;
                counts[num]++;
            }
        }
        return true;
    };

    // 5. 放置必需数字（0和5）
    const placeRequiredNumbers = () => {
        const required = [0, 5];
        
        for (const num of required) {
            if (counts[num] > 0) continue;
            
            const candidates = this.getValidPositions(group, num, -1);
            if (candidates.length === 0) return false;
            
            const pos = candidates[Math.floor(Math.random() * candidates.length)];
            group[pos] = num;
            counts[num]++;
        }
        return true;
    };

    // 6. 填充剩余位置
    const fillRemaining = () => {
        const allNumbers = [0, 1, 2, 3, 5, 7]; // 4已经放好
        
        for (let i = 0; i < group.length; i++) {
            if (group[i] !== null) continue;
            
            // 获取有效数字
            const validNumbers = allNumbers.filter(n => {
                // 检查相邻位置
                const prev = i > 0 ? group[i-1] : null;
                const next = i < 11 ? group[i+1] : null;
                
                return n !== prev && n !== next;
            });
            
            if (validNumbers.length === 0) return false;
            
            // 随机选择一个有效数字
            const num = validNumbers[Math.floor(Math.random() * validNumbers.length)];
            group[i] = num;
            counts[num] = (counts[num] || 0) + 1;
        }
        return true;
    };

    // 执行所有步骤
    if (!place4s() || !placeFront3() || !placeBack3() || 
        !placeSpecialNumbers() || !placeRequiredNumbers() || !fillRemaining()) {
        return this.generateGroup(retryCount + 1);
    }

    // 最终校验
    const isValid = 
        counts[0] >= 1 && 
        counts[5] >= 1 && 
        counts[1] >= 2 && 
        counts[2] >= 2 && 
        counts[7] === 1 && 
        counts[4] === 2 && 
        counts[3] >= 2 && // 前6一个3 + 后6至少一个3 = 至少两个3
        group.filter((_, i) => i < 6).slice(2, 4).some(v => v === 3); // 前6位置2或3有一个3

    if (!isValid) {
        return this.generateGroup(retryCount + 1);
    }

    return group as number[];
}

private static getValidPositions(
    group: (number | null)[], 
    num: number, 
    lastNum: number
): number[] {
    return group
        .map((val, idx) => ({ val, idx }))
        .filter(item => 
            item.val === null && // 空位
            (num !== 2 || item.idx !== 0) && // 首元素不能是2
            (item.idx === 0 || group[item.idx - 1] !== num) && // 前一位不同
            (item.idx === group.length - 1 || group[item.idx + 1] !== num) // 后一位不同
        )
        .map(item => item.idx);
}

 getValidPositions(
      group: (number | null)[], 
      num: number, 
      lastNum: number
  ): number[] {
      return group
          .map((val, idx) => ({ val, idx }))
          .filter(item => 
              item.val === null && // 空位
              (num !== 2 || item.idx !== 0) && // 首元素不为2
              num !== lastNum && // 不连续重复
              (item.idx === 0 || group[item.idx - 1] !== num) && // 前一位不同
              (item.idx === group.length - 1 || group[item.idx + 1] !== num) // 后一位不同
          )
          .map(item => item.idx);
  }

            
        
        Q(){
        
        console.log(this.node.getChildByName("Box").children[1].getComponent(Label).string)
        
     GeZiManager.PCP.changeE(this.node.getChildByName("Box").children[1].getComponent(Label).string)
       /// find("Canvas/DituManager/New Node/AnimalManager").getComponent(ZManager).YDog(1)
//TGManager.TG.push(this.node.getChildByName("Box").children[1].getComponent(Label).string)
  //  find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone(this.node.getChildByName("Box").children[1].getComponent(Label).string)  
//if (TGManager.TG.length>3) {
  //find("Canvas/DituManager/New Node/TG").children[1].destroy()
//}
//if (TGManager.TG.length>=4) {
//  TGManager.TG.shift()
//}

//GeZiManager.getHUN()
        }
        
        
        
        ok(){
           state.ST=1
           state.statechange();
          
            MessageCenter.MakeMessage("AM",turn.turn,"getC"); 
            state.Pchange() ;  
            GeZiManager.PCP.Tstart();
          
         }
        
        touxiang(){

find("Canvas/Main Camera/UIManager/Button/Node").active=true

        }
            Ntouxiang(){

find("Canvas/Main Camera/UIManager/Button/Node").active=false

        }

   Ytouxiang(){
find("Canvas/Main Camera/UIManager/Button/Node").active=false
  MessageCenter.MakeGMessage("GM",KHD2.PT, turn.turn+1, turn.turn,"TOUX"); 

        }


                  }
        
                        
        