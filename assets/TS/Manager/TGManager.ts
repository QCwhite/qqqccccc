import { _decorator, Component, Node } from 'cc';
import ComponentBase from '../BASE/ComponentBase';
import turn from '../game/time/turn';
import KHD2 from '../Message/KHD2';
import MessageCenter from '../Message/MessageCenter';
import GeZiManager from './GeZiManager';
import { find } from 'cc';
import rock from '../../node/Dixing/rock';
import ZManager from './ZManager';
import Wdog from '../dNM/Wdog';
import tree from '../../node/Dixing/tree';
import label from '../UIS/label';
import { Label } from 'cc';
import { BowlContainer } from '../Ditu/TGMZ';
const { ccclass, property } = _decorator;

@ccclass('TGManager')
export class TGManager extends ComponentBase {
  
    static TG:string[]=["马"]
    static QQ1:number[]=[10,11,12,18,19,20,26,27,28]
    static QQ2:number[]=[13,14,15,21,22,23,29,30,31]
    static  QQ3:number[]=[34,35,36,42,43,44,50,51,52]
    static QQ4:number[]=[37,38,39,45,46,47,53,54,55] 
  static  G1:string[]=[]
  static G2:string[]=[]
  static G3:string[]=[]
  static G4:string[]=[]
static NOR:string[]=[]
 start(): void {
    turn.Roo.push(this)
    console.log()
}






  static  TGM(){


TGManager.G1=[]
TGManager.G2=[]
TGManager.G3=[]
TGManager.G4=[]
TGManager.NOR=[]
    switch (turn.round%12) {
        case 1:TGManager.TG.push("兔")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("兔")  
        break;
        case 2:TGManager.TG.push("龙1")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("龙")  
        break;
        case 3:TGManager.TG.push("蛇")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("蛇")  
        break;
        case 4:TGManager.TG.push("马")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("马")  
        break;
        case 5:TGManager.TG.push("羊")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("羊")  
        break;
        case 6:TGManager.TG.push("猴")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("猴")  
        break;
        case 7:TGManager.TG.push("鸡")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("鸡")  
        break;
        case 8:TGManager.TG.push("狗")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("狗")  
        break;
        case 9:TGManager.TG.push("猪")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("猪")  
        break;
        case 10:TGManager.TG.push("鼠")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("鼠")  
        break;
        case 11:TGManager.TG.push("牛")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("牛")  
        break;
        case 12:TGManager.TG.push("虎")
        find("Canvas/DituManager/New Node/TG").getComponent(BowlContainer).addStone("虎")  
        break;

        default:
            break;
    }

console.log(this.TG)
if (TGManager.TG.length>=3) {
  find("Canvas/DituManager/New Node/TG").children[1].destroy()
}
if (TGManager.TG.length>=4) {
  TGManager.TG.shift()
}

TGManager.ST()
TGManager.MAKE()
   }



static MAKE(){

for (let  o of TGManager.TG) {
  switch (o[0]) {
    case "鼠":
      TGManager.NOR.push("TP")
      TGManager.NOR.push("u")
      
      break;

      case "牛":
        GeZiManager.P1.CZL()
        GeZiManager.P2.CZL()
        GeZiManager.P3.CZL()
        GeZiManager.P4.CZL()
        GeZiManager.P5.CZL()
        GeZiManager.P6.CZL()
      break;


      case "虎":
        GeZiManager.P1.KBL(1)
        GeZiManager.P2.KBL(1)
        GeZiManager.P3.KBL(1)
        GeZiManager.P4.KBL(1)
        GeZiManager.P5.KBL(1)
        GeZiManager.P6.KBL(1)
      break;


      case "兔":
        if (KHD2.PT.includes(1)||MessageCenter.Text) {
          find("Canvas/DituManager/New Node/AnimalManager").getComponent(ZManager).YmakeGrass()
          find("Canvas/DituManager/New Node/AnimalManager").getComponent(ZManager).YmakeGrass()
        }
   
      break;



      case "龙":for (let index = 0; index <Number(o[1]); index++) {
   TGManager.G1.push("FireBall");
   TGManager.G2.push("FireBall") ;
   TGManager.G3.push("FireBall");
   TGManager.G4.push("FireBall") ;
      }
      

     
      break;



      case "蛇":
        GeZiManager.P1.QXL()
        GeZiManager.P2.QXL()
        GeZiManager.P3.QXL()
        GeZiManager.P4.QXL()
        GeZiManager.P5.QXL()
        GeZiManager.P6.QXL()



      
      break;


      case "马":
       TGManager.G1=[]
       TGManager.G2=[]
       TGManager.G3=[]
       TGManager.G4=[]
         
   let g1=   TGManager.createStringPairs("sWater","TN","Qi","Hun")
       
       
       TGManager.G1=g1[0].concat()
       TGManager.G2=g1[1] .concat()  
       TGManager.G3=g1[2].concat()
       TGManager.G4=g1[3].concat()
        console.log(g1)     
      break;



      case "羊":
      GeZiManager.Bhun+=1;
      GeZiManager.Rhun+=1;
      GeZiManager.getHUN();
      break;


      case "猴":
        if ( find("Canvas/DituManager/New Node/AnimalManager").getComponentInChildren(rock)) {
          find("Canvas/DituManager/New Node/AnimalManager").getComponentInChildren(rock).MK()
        }else{
          let g=find("Canvas/DituManager/New Node/AnimalManager").getComponentsInChildren(tree)
for(let k of g){
if(k.MK){k.setMK()}

}

        }
  
      
      break;



      case "鸡":
         MessageCenter.MakeSHMessage("AM",[65],2,-2,"TN+")
      break;



      case "狗":
     let g:Node=find("Canvas/DituManager/New Node/AnimalManager")
     g.getComponent(ZManager).YDog(1)
     let c=g.getComponentsInChildren(Wdog)
     if (c!=null) {
      for(let m of c){
        GeZiManager.P1.XD1.push(m)
      GeZiManager.P2.XD1.push(m)
      GeZiManager.P3.XD1.push(m)
      GeZiManager.P4.XD1.push(m)
      GeZiManager.P5.XD1.push(m)
      GeZiManager.P6.XD1.push(m)}
     }
   





      break;



      case "猪":
        MessageCenter.MakeSHMessage('AM',[65],5,0,"qin+")
      break;






      case "鼬":
        TGManager.G1.push("EQ");
        TGManager.G2.push("EQ") ;
        TGManager.G3.push("EQ");
        TGManager.G4.push("EQ") ;
      break;
      case "石":
       
      break;
    default:
      break;
  }
  
}

let o1=[10,11,12,18,19,20,26,27,28]
let o2=[13,14,15,21,22,23,29,30,31]
let o3=[34,35,36,42,43,44,50,51,52]
let o4=[37,38,39,45,46,47,53,54,55]

const usedNumbers = new Set<number>();
  
// 结果集合：保存每个字符串对应的数字
const results: { str: string; num: number }[] = [];

// 定义组的对应关系 [G数组, o数组]
const groups = [
    [this.G1, o1],
    [this.G2, o2],
    [this.G3, o3],
    [this.G4, o4]
] as [string[], number[]][];

groups.forEach(([G, o], groupIndex) => {
    // 复制原始数字数组以避免修改原数组
    const availableNumbers = [...o];

    // 洗牌算法（Fisher-Yates）
    for (let i = availableNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableNumbers[i], availableNumbers[j]] = [availableNumbers[j], availableNumbers[i]];
    }

    G.forEach(str => {
        // 寻找可用数字：未使用且满足长度条件（字符串数量<=数字）
        const validNumbers = availableNumbers.filter(n => 
            !usedNumbers.has(n) && 
            str.length <= n
        );

        if (validNumbers.length === 0) {
            throw new Error(`组${groupIndex + 1}中无法为字符串"${str}"找到可用数字`);
        }

        // 选择第一个可用数字（因已洗牌）
        const selected = validNumbers[0];
        
        // 更新记录
        usedNumbers.add(selected);
        results.push({ str, num: selected });

        // 从当前组可用数字中移除已选
        const index = availableNumbers.indexOf(selected);
        if (index > -1) {
            availableNumbers.splice(index, 1);
        }
    });
});

// 调用示例方法（替换为实际需要执行的操作）
let c=[]
results.forEach(({ str, num }) => {
    console.log(`字符串 "${str}" 对应数字 ${num}`);
    // yourMethod(str, num);
    c.push(num)
    TGManager.YTG(num,str,0);
});
let o=TGManager.randomSelect(TGManager.QQ1.concat(TGManager.QQ2,TGManager.QQ3,TGManager.QQ4),GeZiManager.BanMove.concat(c),TGManager.NOR.length,true)
    for (let index = 0; index < 7; index++) {
    
      TGManager.YTG(o[index],TGManager.NOR[index],o[index+1])
      
    }

 

}




 static YTG(ZB:number,TG:string,n:number){
      
  if (TG=="u") {
    return
  }
  
  if (TG=="FireBall") {
          MessageCenter.MakeGMessage("AM",[ZB,2],4,-1,"FTP");
        }else{

if (TG=="TP") {
  TG="TP"+n
 
  let TG1="TP"+ZB
console.log([n,TG1])
  MessageCenter.MakeGMessage("AM",[n,TG1],9,-1,"FTP");
}
console.log([ZB,TG])
        


MessageCenter.MakeGMessage("AM",[ZB,TG],9,-1,"FTP");}
        
        }


 



     static   selectTwoDistinct(BanMove: number[]): [number, number] | null {
          // 创建快速查找的禁止集合
          const banSet = new Set(BanMove);
          
          // 预处理：过滤并收集有效数组
          const validGroups = [
              this.QQ1.filter(n => !banSet.has(n)),
              this.QQ2.filter(n => !banSet.has(n)),
              this.QQ3.filter(n => !banSet.has(n)),
              this.QQ4.filter(n => !banSet.has(n))
          ].map((nums, index) => ({ nums, index }))
           .filter(g => g.nums.length > 0);
  
          // 至少需要两个有效数组
          if (validGroups.length < 2) return null;
  
          // 洗牌算法（Fisher-Yates）
          for (let i = validGroups.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [validGroups[i], validGroups[j]] = [validGroups[j], validGroups[i]];
          }
  
          // 选择前两个不同组的数字
          const firstGroup = validGroups[0];
          const secondGroup = validGroups.find(g => g.index !== firstGroup.index);
          
          if (!secondGroup) return null;
  
          // 随机选择数字
          const getRandom = (arr: number[]) => 
              arr[Math.floor(Math.random() * arr.length)];
          
          return [
              getRandom(firstGroup.nums),
              getRandom(secondGroup.nums)
          ];
      }
  
static end(){
console.log(TGManager.TG)
  for (let  o of TGManager.TG) {
    switch (o[0]) {
      
  
    
  
      
  
  
  
       
  
  
      
  
  
  case "龙":
 let p=TGManager.TG.indexOf(o)
  
 TGManager.TG[p]="龙"+ (Number(o[1])+1)
       break
  
  
        case "狗":
          let g:Node=find("Canvas/DituManager/New Node/AnimalManager")
       
          let c=g.getComponentsInChildren(Wdog)
          if (c!=null) {
           for(let m of c){
           GeZiManager.shanchuALL(GeZiManager.P1.XD1,m) 
           console.log(GeZiManager.P1.XD1)
           GeZiManager.shanchuALL(GeZiManager.P2.XD1,m) 
           GeZiManager.shanchuALL(GeZiManager.P3.XD1,m) 
           GeZiManager.shanchuALL(GeZiManager.P4.XD1,m) 
           GeZiManager.shanchuALL(GeZiManager.P5.XD1,m) 
           GeZiManager.shanchuALL(GeZiManager.P6.XD1,m) 
          } }




          console.log(GeZiManager.P1.XD1)
        break;
  
       
  
        case "猪":
          MessageCenter.MakeSHMessage('AM',[65],-5,0,"qin+")
        break;
    
      default:
        break;
    

              }}
              console.log(TGManager.TG)

}

static ST(){

for (let index = 0; index < TGManager.TG.length; index++) {
  
  //find("Canvas/DituManager/New Node/TG").children[index].getComponent(Label).string=TGManager.TG[index]

}


}

 roundPass(): void {
          if (KHD2.PT.includes(6)||MessageCenter.Text) {
          // this.YYY();
        
          if (GeZiManager.TNJM[turn.round-2]==4) {
            // this.Ybox()
             //this.YYY();
             TGManager.end()
             console.log(turn.round)
           }    
        
        if (GeZiManager.TNJM[turn.round-1]==4) {
         // this.Ybox()
          //this.YYY();
         // TGManager.TGM()
    //     TGManager.MAKE()
          console.log(turn.round)
        }
        
      







          }
        
        }
     static   randomSelect<T>(
          sourceArray: T[],
          excludeArray: T[] = [],
          count: number = 1,
          allowDuplicates: boolean = false
        ): T[] {
          // 过滤有效元素
          const excludeSet = new Set(excludeArray);
          const validElements = sourceArray.filter(item => !excludeSet.has(item));
        
          // 处理边界情况
          if (validElements.length === 0 || count <= 0) return [];
        
          // 允许重复的情况
          if (allowDuplicates) {
            return Array.from({ length: count }, () => {
              return validElements[Math.floor(Math.random() * validElements.length)];
            });
          }
        
          // 不允许重复的情况（洗牌算法）
          const shuffled = [...validElements];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          return shuffled.slice(0, Math.min(count, shuffled.length));
        }
    









 static createStringPairs(str1: string, str2: string, str3: string, str4: string): string[][] {
    // 检查所有字符串是否互不相同
    const uniqueStrings = new Set([str1, str2, str3, str4]);
    if (uniqueStrings.size !== 4) {
        throw new Error("所有输入字符串必须是唯一的");
    }

    // 创建所有可能的有效组合（每组两个不同字符串）
    const allPairs: string[][] = [];
    const strings = [str1, str2, str3, str4];
    
    for (let i = 0; i < strings.length; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            allPairs.push([strings[i], strings[j]]);
        }
    }
    
    // 计算每个字符串的出现次数
    const countMap = new Map<string, number>();
    strings.forEach(str => countMap.set(str, 0));
    
    // 选择4个组合，确保每个字符串恰好出现两次
    const selectedPairs: string[][] = [];
    const usedIndices = new Set<number>();
    
    // 尝试所有可能的组合选择
    for (let a = 0; a < allPairs.length; a++) {
        for (let b = a + 1; b < allPairs.length; b++) {
            for (let c = b + 1; c < allPairs.length; c++) {
                for (let d = c + 1; d < allPairs.length; d++) {
                    // 重置计数器
                    countMap.forEach((_, key) => countMap.set(key, 0));
                    const indices = [a, b, c, d];
                    
                    // 计算当前选择的组合中每个字符串的出现次数
                    for (const idx of indices) {
                        const pair = allPairs[idx];
                        countMap.set(pair[0], countMap.get(pair[0])! + 1);
                        countMap.set(pair[1], countMap.get(pair[1])! + 1);
                    }
                    
                    // 检查是否每个字符串恰好出现两次
                    const isValid = Array.from(countMap.values()).every(count => count === 2);
                    
                    if (isValid) {
                        // 返回第一个有效的组合
                        return [allPairs[a], allPairs[b], allPairs[c], allPairs[d]];
                    }
                }
            }
        }
    }
    
    // 如果找不到有效组合（理论上不会发生，因为4个唯一字符串有6种组合）
    throw new Error("无法创建满足条件的组合");
}


shuffleArray(array) {
    // 创建数组副本，避免修改原数组
    const result = [...array];
    
    // Fisher-Yates (Knuth) 洗牌算法
    for (let i = result.length - 1; i > 0; i--) {
        // 生成随机索引 (0 到 i)
        const j = Math.floor(Math.random() * (i + 1));
        
        // 交换元素位置
        [result[i], result[j]] = [result[j], result[i]];
    }
    
    return result;
}









}


