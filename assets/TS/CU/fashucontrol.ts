import { _decorator, SpriteAtlas, ScrollView, find, Sprite } from 'cc';
const { ccclass, property } = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import GMessage from "../Message/GMessage";
import KHD2 from "../Message/KHD2";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import Choose from "./choose";
import fsChoose from "./fashuchoose";
import fashuchoose from "./fashuchoose";
import fimage from "./fashuimage";
//     // 可以添加其他方法来动态调整最大滚动距离或者处理其他相关逻辑

@ccclass('Fashucontrol')
export default class fsc extends ComponentBase {
        @property(SpriteAtlas)
        Atlas:SpriteAtlas=null;
        @property(ScrollView)
       private scrollView: ScrollView | null = null;
           Bfashu: number[] = [0,0,0];
           Rfashu: number[] = [0,0,0];
           Gfashu:number[]=[0,0,0,0]
           isGray: boolean = false;
           allfs: number[][] = [
               [0, 0, 0],
               [0, 0, 0],
               [0, 0, 0],
               [0, 0, 0],
               [0, 0, 0],
               [0, 0, 0]
           ]
             @property
           private maxScrollX: number = 1100; // 允许的最大水平滚动距离
       
           @property
           private maxScrollY: number = 0; // 允许的最大垂直滚动距离
       start(): void {
           MessageCenter.addReceive(this);
          // find("Canvas/Main Camera/background/juese background").getComponent(Choose).FAS=this.node
       //this. initScrollView()
           if (KHD2.PT.includes(6)) {
               MessageCenter.MakeGMessage("FS",this.CSFG(), KHD2.PT, KHD2.PT[0], "chushifashu");   
           }
       }
       
           ReceiveMessage(message: Message) {
               if (message.Type === "FS" && message instanceof SHMessage) {
                 
       if(message.Command.length==4){this.Gfashu=message.Command;
           this.GGF()
           return }
       
                 if (message.Content.length!=1) {
                  if (message.Content[0]%2==1) {
                   this.Bfashu = message.Command;
                  } else{    this.Rfashu = message.Command;}
                 }else{
                 
                   switch (message.Content[0]) {
                       case 1:
                           this.Bfashu[0] = message.Command[0];
                           break;
                       case 2:
                           this.Rfashu[0] = message.Command[0];
                           break;
                       case 3:
                           this.Bfashu[1] = message.Command[0];
                           break;
                       case 4:
                           this.Rfashu[1]= message.Command[0];
                           break;
                       case 5:
                           this.Bfashu[2] = message.Command[0];
                           break;
                       case 6:
                           this.Rfashu[2] = message.Command[0];
                           break;
                       default:
                   }}
                   find("Canvas/Main Camera/background/fashu background/Image").getComponent(fimage).fixui(this.Bfashu,this.Rfashu)
               }
              
           }
           
           PD(fc:number) {
         let j=find("Canvas/Main Camera/background/fashu background/New ScrollView/view/choose background").children[fc-1].getComponent(fsChoose)
               // 如果已经有了相同的数字
         let o=this.Bfashu
               if (KHD2.PT[0]%2==0) {
           o=this.Rfashu
          }    
       
       
       
       
               if (o.includes(fc)) {
                  let index = o.indexOf(fc);
           
                   // 删除对应的数字，然后在数组末尾添加 0
                   if (index !== -1) {
                       o.splice(index, 1);
                       o.push(0);
                       j.Q=false;
                       j.fixui();
                   }
               } else {
                   let k = false;
           
                   // 如果数组中有 0，则替换第一个 0 为 this.FC
                   for (let i = 0; i < o.length; i++) {
                       if (o[i] === 0) {
                         o[i] = fc;
                    //     console.log(o);
                         k = true;
                         j.Q = true;
                         j.fixui();
                         break;
                       }
                     }
           
                   // 如果数组中没有 0，则删除第一个元素，然后在数组末尾添加 this.FC
                   if (!k) {
                       let g=find("Canvas/Main Camera/background/fashu background/New ScrollView/view/choose background").children[o[0]-1].getComponent(fsChoose)
                     g.Q=false
                     j.Q=true;
                     j.fixui();
                     g.fixui();
                       o.shift(); // 删掉第一个
                       o.push(fc); // 填进第一个元素
                   }
           
       if (KHD2.PT.length==1) {
           o=[fc]
       }
       
       
               MessageCenter.MakeGMessage("FS",o, KHD2.PT, KHD2.PT[0], "chushifashu");
               }
           }
       
          
       
       
       
       
       
       GGF(){
       for (let index = 0; index < 4; index++) {
      //    console.log(this.node.name+index)
           find("Canvas/Main Camera/background/fashu background/New Layout").children[index].getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("FASHU2-"+(this.Gfashu[index]+2))
           
       }
       let k=find("Canvas/Main Camera/background/fashu background/New ScrollView/view/choose background")
       
    //   console.log(this.Gfashu)
       for (let index = 0; index < 14; index++) {
       if (this.Gfashu.includes(index+1)) {
           k.children[index].active=false  
       } 
       
       }
       
       
       }
       
       CSFG(): number[] {
           // 定义数字范围和特殊数字组
           const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
           const group1 = [5, 6, 10];
           const group2 = [8, 9, 14];
       
           // 从 group1 和 group2 中各随机选择一个数字
           const selectedFromGroup1 = group1[Math.floor(Math.random() * group1.length)];
           const selectedFromGroup2 = group2[Math.floor(Math.random() * group2.length)];
       
           // 从剩余的数字中随机选择两个数字
           const remainingNumbers = numbers.filter(num => !group1.includes(num) && !group2.includes(num));
           const selectedFromRemaining = this.randomSelect(remainingNumbers, 2);
       
           // 合并选择的数字
           const selectedNumbers = [selectedFromGroup1, selectedFromGroup2, ...selectedFromRemaining];
       
         //  console.log("Selected numbers:", selectedNumbers);
           return selectedNumbers;
       }
       
       // 从数组中随机选择指定数量的元素
       private randomSelect(arr: number[], count: number): number[] {
           const result = [];
           for (let i = 0; i < count; i++) {
               const index = Math.floor(Math.random() * arr.length);
               result.push(arr.splice(index, 1)[0]); // 移除并返回已选择的元素
           }
           return result;
       }
       
       
       
       
       
       
       
       
       
       
       
       onScroll() {
           const scrollOffset = this.scrollView!.getScrollOffset();
     //  console.log(this.scrollView.getMaxScrollOffset())    
           // 限制水平滚动范围
         //  let newX = scrollOffset.x;
         //  if (scrollOffset.x > this.maxScrollX) {
           //    newX = this.maxScrollX;
          // } else if (scrollOffset.x < -this.maxScrollX) {
         //      newX = -this.maxScrollX;
         //  }
       
           // 设置内容位置，保持Y轴值不变
         //  this.scrollView!.setContentPosition(new Vec2(newX, 0));
       }
       }
       
           // 可以添加其他方法来动态调整最大滚动距离或者处理其他相关逻辑
       
       
       