// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import turn from "../game/time/turn";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import GeZiManager from "./GeZiManager";
import { find } from 'cc';
import xgcol from '../UIS/else/xgmove';
import NWshopUI from '../UIS/shop/NWshopUI';
import shopM from '../UIS/shop/ShopM';
import KHD2 from '../Message/KHD2';


@ccclass('TNanager')
export default class TNanager extends ComponentBase {
        onLoad() {
                turn.Roo.push(this)
                MessageCenter.addReceive(this)
                
                  }
              
              
              
                 
               roundPass(): void {
              
              
              if(turn.round>=2){
                  
                    switch (GeZiManager.TNJM[turn.round%12-1]) {
                      case 2:GeZiManager.TNC=[1,1,3,4,4,2]//移动
                          
                          break;
                          case 1:GeZiManager.TNC=[1,3,1,4,4,2]//蓄气
                          
                          break;
                          case 0:GeZiManager.TNC=[1,3,3,2,4,2]//攻击
                          
                          break;
                          case 7:GeZiManager.TNC=[1,3,3,4,2,2]//法术
                          
                          break;
                          case 3:GeZiManager.TNC=[1,3,3,4,4,0]//商店    
TNanager.ShopST()
                          break;
                          case 4:GeZiManager.TNC=[1,3,3,4,4,2]//动物
                  
                          break;
                      case 5:GeZiManager.TNC=[0,3,3,4,4,2]//转身
                      break;
                      case 6:GeZiManager.TNC=[1,3,3,6,4,2]//转身
                      break;
                      default:GeZiManager.TNC=[1,3,3,4,4,2]//转身
                  break
              
              
               }   
              // this.lun.string=GeZiManager.TNC+""
              }
              }
            
              static makePool(): number[] {
                const mergedArray: number[] = [];
                for (let i = 0; i < 3; i++) {
                    mergedArray.push(...this.generateGroup());
                }
                return mergedArray;
            }
        
            private static generateGroup(retryCount = 0): number[] {
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
            
            // 测试执行
           
                    
              
              TN(){
                if(turn.round>0){
                  switch (GeZiManager.TNJM[turn.round-1]) {
                  case 2:GeZiManager.TNC=[1,1,3,4,4,2]//移动
                      
                      break;
                      case 1:GeZiManager.TNC=[1,3,1,4,4,2]//蓄气
                      
                      break;
                      case 0:GeZiManager.TNC=[1,3,3,2,4,2]//攻击
                      
                      break;
                      case 7:GeZiManager.TNC=[1,3,3,4,2,2]//法术
                      
                      break;
                      case 3:GeZiManager.TNC=[1,3,3,4,4,0]//商店   
                     
                      break;
               
                  case 5:GeZiManager.TNC=[0,3,3,4,4,2]//转身
                  break;
                  case 6:GeZiManager.TNC=[1,3,3,6,4,2]//转身
                  break;
                  default:GeZiManager.TNC=[1,3,3,4,4,2]//转身
              break
               }   
           //    console.log(GeZiManager.TNJM[turn.round%12]+"")
            //   console.log(GeZiManager.TNC+"")
               //this.lun.string=GeZiManager.TNC+""
              }
              
              }
              
              ReceiveMessage(message: Message): void {
                 
                  if (message instanceof SHMessage&&message.Type=="TN") {
                //      console.log(message.Command)
                      switch (message.SHtype) {
                          case "pool":GeZiManager.TNJM=[].concat(message.Command); 

//console.log(GeZiManager.TNJM)

           find("Canvas/DituManager/New Node/xgcol").getComponent(xgcol).c();
              
                              break;}
                            
                            
                            
                            
                            
                            }}








static ShopST(){

if (turn.DorN=="day") {
  shopM.BTshop()  
}else{
    
      if (KHD2.PT.includes(1)||MessageCenter.Text) {  
    find("Canvas/Main Camera/UIManager/NWshop").getComponent(NWshopUI).NW()

      }
}





}





                          
              }
              