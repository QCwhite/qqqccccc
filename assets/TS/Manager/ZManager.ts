// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import box from "../../node/Dixing/box";

import KHD2 from "../Message/KHD2";
import MessageCenter from "../Message/MessageCenter";
import state from "../game/time/state";
import turn from "../game/time/turn";
import AnimalManager from "./AnimalManager";
import GeZiManager from "./GeZiManager";
import ManagerBase from "./ManagerBase";
import TNanager from "./TNanager";
    

@ccclass('ZManager')
export default class ZManager extends ManagerBase {
        ccx:string[][]=[ ["tree1", "tree", "water", "grass", "grass"],
        ["tree1", "water", "grass", "grass", "grass", "grass"],
        ["tree", "water", "water", "grass"],
        ["water", "water", "grass", "grass", "grass"],
        ["water", "water", "water", "grass", "grass"],
        ["Brock", "water", "water", "grass", "grass", "grass", "grass"],
        ["tree1", "tree", "tree", "Brock", "grass", "grass"],
        ["tree1", "Brock", "box", "grass", "grass", "grass", "grass"],
        ["tree1", "tree", "box", "grass", "grass"],
        ["tree", "Flag", "box", "box","grass", "grass"],
        ["tree", "Flag1", "Flag2", "box","box", "grass", "grass"],
        ["tree1", "Flag1", "Flag2", "box", "grass", "grass"],
        ["tree", "Flag", "water", "box", "grass", "grass"],
        ["tree","Flag", "box","grass", "grass"],
        ["tree1","box", "grass", "grass", "grass"],
        ["tree","box",  "grass", "grass", "grass"],
        ["tree1","box", "grass", "grass", "grass"],
        ["tree","box",  "grass", "grass", "grass"],
        ["tree","box",  "grass", "grass", "grass"],
        ["tree1","box",  "grass", "grass", "grass"],
        ["tree","Brock", "box", "grass", "grass", "grass"],
        ["tree","Brock", "box", "water", "water", "grass"],
        ["tree","Flag", "box", "water", "grass", "grass"],
        ["tree","Brock", "Flag", "box", "water", "grass", "grass", "grass"],
        ["tree","Flag", "box", "water", "grass"],
        ["tree","box",  "grass", "grass"],
        ["tree","box",  "grass", "grass"],
        ["tree","box", "water", "grass", "grass"],
        ["tree","box", "box","grass", "grass"],
        ["tree","box", "water", "grass", "grass"],
        ["tree","box", "water", "grass", "grass"],
        ["tree","box", "water", "grass", "grass"],
        ["tree","Flag", "box", "water", "grass", "grass"],
        ["tree","box", "water", "water", "grass", "grass"],
        ["tree","Flag", "box", "water", "grass", "grass"],
        ["Flag1", "Flag2", "box", "water", "grass", "grass"],
        ["Flag1", "Flag2", "box", "water", "grass", "grass", "banana"],
        ["tree","Flag1", "Flag2", "box", "water", "banana"],
        ["tree","Flag1", "Flag2", "banana", "water", "banana", "banana"],
        ["Flag1", "Flag2",  "box","water", "banana", "banana"],
        ["tree","Flag1", "Flag2", "box", "water", "banana", "banana"],
        
        ]
        
        boxnr:string[]
         QQ1:number[]=[10,11,12,18,19,20,26,27,28]
        QQ2:number[]=[13,14,15,21,22,23,29,30,31]
        QQ3:number[]=[34,35,36,42,43,44,50,51,52]
        QQ4:number[]=[37,38,39,45,46,47,53,54,55]
        N:string[]=["Hun","sWater","null","null","EQ","EQ","Hun","Hun","sWater","FireBall","FireBall","FireBall","FireBall","FireBall","FireBall","null"]
        
        YTG(ZB:number,TG:string){
        if (TG=="FireBall") {
          MessageCenter.MakeGMessage("AM",[ZB,2],4,-1,"FTP");
        }else{
          MessageCenter.MakeGMessage("AM",[ZB,TG],9,-1,"FTP");}
        
        }
        
        YTTT(){
        let o1=this.QQ1.concat()
        let o2=this.QQ2.concat()
        let o3=this.QQ3.concat()
        let o4=this.QQ4.concat()
        function removeMatchingElements(arr1: any[], arr2: any[]): any[] {
          // 使用 Set 来存储第二个数组的元素，以便快速查找
          const set2 = new Set(arr2);
          // 使用 filter 方法来过滤第一个数组，排除存在于第二个数组的元素
          return arr1.filter(item => !set2.has(item));
        }
        function shuffleArray<T>(array: T[]): T[] {
          // 创建数组的副本，以避免修改原始数组
          const result = [...array];
          let currentIndex = result.length, temporaryValue, randomIndex;
        
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
        for(let a of [o1,o2,o3,o4]){
        a=shuffleArray(removeMatchingElements(a,GeZiManager.qins))
        
        
        for (let index = 0; index <a.length; index++) {
        this.YTG(a[index],this.N[index])
          
        }
        }
        this.N.shift();
        
        }
        
        
        
        
        
        YmakeWater(){
        
        //let j=this.addZ([0],[1,2],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
        //MessageCenter.MakeGMessage("AM",[j],12,1,"FTP");
        
        
        }
        
        YmakeGrass(){
        
            let j=this.addZ([0],[1,2,3],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.trees,GeZiManager.grass,GeZiManager.boxs,GeZiManager.aos))
            
            MessageCenter.MakeGMessage("AM",[j],11,1,"FTP");
            
            }
            Ybox(){
        
                let j=this.addZ([1,2,3,4,6,7],[2],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.waterPool,GeZiManager.boxs))
             //   let o=this.addZ([1,2,3,4,7],[2],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.waterPool,GeZiManager.boxs))
               let a= [1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,5,5,6,6,6]
              
                MessageCenter.MakeGMessage("AM",[j, a[Math.floor(Math.random() * a.length)]],13,1,"FTP");
             //   MessageCenter.MakeGMessage("AM",[o, a[Math.floor(Math.random() * a.length)]],13,1,"FTP");
                
                }
                Ybanana(){
        
                    let j=this.addZ([0],[2,3],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.waterPool,GeZiManager.boxs))
                    
                    MessageCenter.MakeGMessage("AM",[j],7,1,"FTP");
                    
                    }
        
                    YFlag(n:number){
                        let j
                      if (n==1) {
                        this.addZ([2,3,4],[1,2],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.waterPool,GeZiManager.boxs))
                      } else{this.addZ([5,6,7],[0],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.waterPool,GeZiManager.boxs))}
                        
                        MessageCenter.MakeGMessage("AM",[j,99],8.2,1,"FTP");
                        
                        }
        
        
        YPig(o:number){
        let k=this.getRA([1,2,3,4],1)[0]
        let l=[50,47,10,15]
          let j=this.addZ([0],[o],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
        MessageCenter.MakeGMessage("AM",[l[k-1],k*2],21,1,"FTP");
        }
       
        Ysheep(o:number){
          let k=this.getRA([4,6],1)[0]
            let j=this.addZ([0],[o],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
          MessageCenter.MakeGMessage("AM",[j,k],22,1,"FTP");
          }
          YDog(o:number){
            let k=this.getRA([1,2,3,4],1)[0]
            let l=[50,47,10,15]
              let j=this.addZ([0],[1,2],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
            MessageCenter.MakeGMessage("AM",[j,k*2],23,1,"FTP");
            }
        YYY(){
        if (turn.round<=20) {
          let j=this.addZ([0],[1,2,3],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.waterPool,GeZiManager.boxs))
          if (GeZiManager.grass.includes(j)&&!GeZiManager.getAllOZB().includes(j)) {
            MessageCenter.MakeGMessage("AM",[j],1,1,"FTP");
          }else  { MessageCenter.MakeGMessage("AM",[j],11,1,"FTP");}
        }else{
        
          let j=this.addZ([0],[2],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.waterPool,GeZiManager.boxs))
          if (GeZiManager.grass.includes(j)) {
            MessageCenter.MakeGMessage("AM",[j],1,1,"FTP");
          }else  { MessageCenter.MakeGMessage("AM",[j],11,1,"FTP");}
        
        
        }
        
        
        
        
        }
        
        Cx(){
        let j=this.ccx[Math.floor(Math.random() * this.ccx.length)]//Math.floor(Math.random() * this.ccx.length)
        
        for(let a of j){
        switch (a) {
            case "tree":let j=this.addZ([0],[2,3],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
            MessageCenter.MakeGMessage("AM",[j],1,1,"FTP");
                
                break;

                case "tree1":let f=this.addZ([0],[2,3],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
                MessageCenter.MakeGMessage("AM",[f],1.1,1,"FTP");
                    
                    break;
                case "grass":this.YmakeGrass();
                    
                    break;
                    case "water":this.YmakeWater();
                    
                    break;
                    case "box":
                      this.Ybox();
                   //  o=this.addZ([0],[2,3],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
                   // MessageCenter.MakeGMessage("AM",[o],1,1,"FTP");//this.YPig(2)//
                    
                    break;
                    case "banana":this.Ybanana();
                    
                    break;
                    case "Flag1":let o=this.addZ([0],[2,3],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
                    MessageCenter.MakeGMessage("AM",[o],1,1,"FTP");//this.YFlag(1);
                    
                    break;
                    case "Flag2":let v=this.addZ([0],[2,3],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
                    MessageCenter.MakeGMessage("AM",[v],1,1,"FTP");//this.YFlag(2);
                    
                    break;
                    case "Pig"://this.YPig(2)//this.YFlag(2);
                    
                    break;
                    case "Sheep":this.Ysheep(2)//this.YFlag(2);
                    
                    break;
            default:
                break;
        }
        }
        //let k=this.addZ([0],[1],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
        //MessageCenter.MakeGMessage("AM",[28],12,1,"FTP");
        //MessageCenter.MakeGMessage("AM",[29],12,1,"FTP");
        //MessageCenter.MakeGMessage("AM",[36],12,1,"FTP");
        //MessageCenter.MakeGMessage("AM",[37],12,1,"FTP");
        
        }
        
        
        
        
        
        start(): void {
          
      
        turn.Roo.push(this)
        
        
        }
        
        roundPass(): void {
          if (KHD2.PT.includes(6)||MessageCenter.Text) {
          // this.YYY();
        
           
        
      
        if (turn.round<=16&&turn.round%3==0) {
          //this.YPig(3)
          this.YmakeGrass();
          this.YmakeGrass();
        }
          }
        
        }
        
        
        /* if ( turn.DorN=="day") {
              this.YmakeGrass();
              if(GeZiManager.grass.length<8){ this.YmakeGrass();}
             }
              let j=this.addZ([0],[1,2],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.waterPool,GeZiManager.boxs))
              
            MessageCenter.MakeGMessage("AM",[j],1,1,"FTP");
            
        console.log(j)
             */
        getRA(arr:any[], n:number) {
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