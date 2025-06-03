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
             let message=new Message(a,GeZiManager.boxs,5)
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
      if (retryCount > 20) throw new Error("生成失败，请检查规则可行性");

      const group: (number | null)[] = new Array(12).fill(null);
      // 规则配置
      const rules = {
          requiredNumbers: [0, 2, 3, 5], // 必须包含的数字（1和4单独处理）
          countRequirements: { 1: 2, 4: 3 }, // 特殊数字配额
          quarters: [ // 三个4元素区间
              { start: 0, end: 3 },
              { start: 4, end: 7 },
              { start: 8, end: 11 }
          ]
      };

      // 状态跟踪
      const counts = { 0:0, 1:0, 2:0, 3:0, 4:0, 5:0 };
      let lastNumber = -1;

      //=== 阶段1：每个区间强制放置4 ===
      rules.quarters.forEach(quarter => {
          // 寻找可放置4的位置（不与相邻4冲突）
          const candidates = [];
          for (let i = quarter.start; i <= quarter.end; i++) {
              if (group[i] === null &&
                  (i === 0 || group[i-1] !== 4) &&
                  (i === 11 || group[i+1] !== 4)) {
                  candidates.push(i);
              }
          }
          
          if (candidates.length === 0) {
              //console.warn("区间内无法放置4，重新生成");
              return this.generateGroup(retryCount + 1);
          }
          
          const pos = candidates[Math.floor(Math.random() * candidates.length)];
          group[pos] = 4;
          counts[4]++;
          lastNumber = 4;
      });

      //=== 阶段2：填充特殊数字1 ===
      while (counts[1] < rules.countRequirements[1]) {
          const candidates = this.getValidPositions(group, 1, lastNumber);
          if (candidates.length === 0) break;

          const pos = candidates[Math.floor(Math.random() * candidates.length)];
          group[pos] = 1;
          counts[1]++;
          lastNumber = 1;
      }

      //=== 阶段3：填充必需数字0/2/3/5 ===
      rules.requiredNumbers.forEach(num => {
          if (counts[num] > 0) return;
          
          const candidates = this.getValidPositions(group, num, lastNumber);
          if (candidates.length === 0) return;

          const pos = candidates[Math.floor(Math.random() * candidates.length)];
          group[pos] = num;
          counts[num]++;
          lastNumber = num;
      });

      //=== 阶段4：填充剩余位置 ===
      for (let i = 0; i < group.length; i++) {
          if (group[i] !== null) continue;

          // 禁止条件
          const forbidden = [lastNumber];
          if (i === 0) forbidden.push(2); // 首元素不能为2

          // 候选数字（优先补全未达标的必需数字）
          let candidates = [0,1,2,3,5].filter(n => 
              !forbidden.includes(n) && 
              counts[n] < (n === 1 ? 2 : Infinity)
          );

          // 兜底选项
          if (candidates.length === 0) candidates = [0,1,2,3,5].filter(n => !forbidden.includes(n));

          const selected = candidates[Math.floor(Math.random() * candidates.length)];
          group[i] = selected;
          counts[selected]++;
          lastNumber = selected;
      }

      //=== 最终校验 ===
      const isValid = 
          rules.requiredNumbers.every(n => counts[n] >= 1) && // 0/2/3/5都存在
          counts[1] === rules.countRequirements[1] && // 1的数量正确
          counts[4] === rules.countRequirements[4] && // 4的数量正确
          !group.some((n, i) => i > 0 && n === group[i-1]); // 无连续重复

      if (!isValid) {
          console.warn(`校验失败，重新生成（尝试次数：${retryCount+1}）`);
          return this.generateGroup(retryCount + 1);
      }

      return group as number[];
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
        
                        
        