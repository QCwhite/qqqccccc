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
                if (retryCount > 10) throw new Error("生成失败");
        
                const group: (number | null)[] = new Array(12).fill(null);
                const quarters = [ // 分成三个4元素区间
                    { start: 0, end: 3 }, 
                    { start: 4, end: 7 }, 
                    { start: 8, end: 11 }
                ];
                
                // 强制规则配置
                const rules = {
                    requiredNumbers: [0, 1, 2, 3, 5], // 必须包含的数字（4单独处理）
                    specialCounts: { 1: 2, 2: 1, 7: 1 },
                    quarterMustHave: 4 // 每个4元素区间必须包含4
                };
        
                // 初始化状态跟踪
                const counts = { 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 7:0 };
                let lastNumber = -1;
        
                //=== 阶段1：强制每个4元素区间包含4 ===
                quarters.forEach(quarter => {
                    // 在区间内寻找可放置4的位置
                    const candidates = [];
                    for (let i = quarter.start; i <= quarter.end; i++) {
                        if (group[i] === null && 
                            (i === 0 || group[i-1] !== 4) && 
                            (i === 11 || group[i+1] !== 4)) {
                            candidates.push(i);
                        }
                    }
                    
                    // 如果没有合法位置则重新生成
                    if (candidates.length === 0) {
                     //   console.warn("无法在区间放置4，重新生成");
                        return this.generateGroup(retryCount + 1);
                    }
                    
                    // 随机选择位置放置4
                    const pos = candidates[Math.floor(Math.random() * candidates.length)];
                    group[pos] = 4;
                    counts[4]++;
                    lastNumber = 4;
                });
        
                //=== 阶段2：填充特殊数字（1/2/7） ===
                [1, 2, 7].forEach(num => {
                    while (counts[num] < rules.specialCounts[num]) {
                        const candidates = this.getValidPositions(group, num, lastNumber);
                        if (candidates.length === 0) break;
        
                        const pos = candidates[Math.floor(Math.random() * candidates.length)];
                        group[pos] = num;
                        counts[num]++;
                        lastNumber = num;
                    }
                });
        
                //=== 阶段3：填充必需数字（0/3/5） ===
                rules.requiredNumbers.forEach(num => {
                    if (counts[num] > 0) return;
                    
                    const candidates = this.getValidPositions(group, num, lastNumber);
                    if (candidates.length === 0) return;
        
                    const pos = candidates[Math.floor(Math.random() * candidates.length)];
                    group[pos] = num;
                    counts[num]++;
                    lastNumber = num;
                });
        
                //=== 阶段4：填充剩余空位 ===
                for (let i = 0; i < group.length; i++) {
                    if (group[i] !== null) continue;
                    
                    // 首元素排除2
                    const forbidden = [lastNumber];
                    if (i === 0) forbidden.push(2);
        
                    // 候选数字池（排除已满的特殊数字）
                    let candidates = [0, 1, 2, 3, 5, 7].filter(n => 
                        !forbidden.includes(n) && 
                        counts[n] < (rules.specialCounts[n] || Infinity)
                    );
        
                    // 如果还有未满足的必需数字
                    const missingRequired = rules.requiredNumbers.filter(n => counts[n] === 0);
                    if (missingRequired.length > 0) candidates = missingRequired;
        
                    // 随机选择（兜底逻辑）
                    const selected = candidates.length > 0 
                        ? candidates[Math.floor(Math.random() * candidates.length)] 
                        : 0;
                    
                    group[i] = selected;
                    counts[selected]++;
                    lastNumber = selected;
                }
        
                //=== 最终校验 ===
                const isValid = 
                    rules.requiredNumbers.every(n => counts[n] >= 1) &&
                    Object.entries(rules.specialCounts).every(([k, v]) => counts[k] === v) &&
                    counts[4] === 3; // 每组3个4（每4元素1个）
                
                if (!isValid) {
                 //   console.warn("校验失败，重新生成");
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
                    .map((val, idx) => ({ val, idx })) // 正确创建包含索引的对象
                    .filter(item => 
                        item.val === null && // 1. 必须是空位
                        (num !== 2 || item.idx !== 0) && // 2. 首元素不能是2
                        num !== lastNum && // 3. 不与上一个数字重复
                        (item.idx === 0 || group[item.idx - 1] !== num) && // 4. 前一位不同
                        (item.idx === group.length - 1 || group[item.idx + 1] !== num) // 5. 后一位不同
                    )
                    .map(item => item.idx); // 提取有效位置的索引
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


                          
              }
              