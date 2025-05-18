// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, SpriteAtlas, SpriteFrame, Prefab } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import equipment from "../../BASE/equipment";
import realThing from "../../BASE/realThing";
import A110 from "../../equipment/weapon/Dao/A110";
import { Texture2D, resources , AssetManager} from 'cc';
import { assetManager } from 'cc';
import { ImageAsset } from 'cc';
import { find } from 'cc';
import { Sprite } from 'cc';
import { rect } from 'cc';
import { log } from 'console';

@ccclass('Shops')
export default class Shops extends ComponentBase {
        @property(SpriteAtlas)
        A1_2: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A1_4: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A1_6: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A1_8: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A2_2: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A2_4: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A2_6: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A2_8: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A3_2: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A3_4: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A3_6: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        A3_8: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        B_2: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
       B_4: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
       B_6: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
       B_8: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
        C_2: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
      C_4: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
       C_6: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
       C_8: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
      D_2: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
       D_4: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
       D_6: SpriteAtlas = null;//通用图集
        @property(SpriteAtlas)
       D_8: SpriteAtlas = null;//通用图集
       @property(SpriteAtlas)
       FU: SpriteAtlas = null;//通用图集
        @property(SpriteFrame )
        A:SpriteFrame = null;//通用图集
        @property(Prefab )
        tishi:Prefab  = null;//通用图集
        @property(SpriteFrame )
     HUN:SpriteFrame=null
      protected onLoad(): void {
        resources.load("equipment", function (err, assets) {

        });
    
      }
       
      
      
         items: { [key: string]: string } = {
              "A110": "废铁",
              "A131": "快刀",
              "A132": "有点长的刀",
              "A151": "轻刃",
              "A152": "不寻长的刀",
              "A121": "斧头",
              "A122": "菜刀",
              "A125": "鸡剑",
              "A126": "桃木剑",
              "A127": "弯刀",
              "A128": "物理学圣剑",
              "A141": "巨剑",
              "A142": "镰刀",
              "A143": "水晶剑",
              "A144": "淬血剑",
              "A145": "道法剑",
              "A146": "狂战斧",
              "A147": "樊剑",
              "A161": "圣骑士之剑",
              "A162": "死神之镰",
              "A164": "尚方宝剑",
              // ... 其他物品
              "FU0": "火符",
              "FU1": "石符",
              "FU2": "水符",
              "FU3": "风符",
          };
      
           getItemNameById(id: string): string | undefined {
              return this.items[id];
          }
      
      
          start(): void {
        
          }
      
      
      
      
      
      
      
        find(face:number,th:string,P?:number){
        let Tatlas=this.A1_2;
      if (th!=null) {
        
      console.log(th)
if (th[1]=="X") {
  return null
}
if (th=="Hun") {
  return this.HUN
}


      if (th=="D10") {
        return this.A
      }
      
      if (th=="D16") {
        return this.find(2,"D16",0)
      }
      if (th[0]=="F") {
      switch (th[2]) {
        case "0":  return this.FU.getSpriteFrame("fire")
          
          break;
          case "1":  return this.FU.getSpriteFrame("mud")
          
          break;
          case "2":  return this.FU.getSpriteFrame("water")
          
          break;
          case "3":  return this.FU.getSpriteFrame("wind")
          
          break;
        default:
          break;
      }
      
      
      
      }
      if (face==10) {
        switch (th[0]) {
      case "B":Tatlas=this.B_2
      break;
      case "C":Tatlas=this.C_2;
      break;
      case "D":Tatlas=this.D_2;
      break;
      case "A": switch (th[1]) {
      
      case "1":Tatlas=this.A1_2
      break;
      case "2":Tatlas=this.A2_2
      break;
      case "3":Tatlas=this.A3_2
      break;}
      
      
      
        } 
      }else{

      
        //console.log(this.loadEquipmentTexture(th,face))
// 加载装备 A110 的朝向 2 的图片
let o=this.loadImageAndApply(this.loadEquipmentTexture(th,face),P)
return o



      
        
      }
      console.log(Tatlas)
      console.log(Tatlas.getSpriteFrame(th))
        if (Tatlas.getSpriteFrame(th)!=null||Tatlas.getSpriteFrame(th.toLowerCase())!=null) {
         if (th[0]=="A"&&Tatlas.getSpriteFrame(th.toLowerCase())) {
          return Tatlas.getSpriteFrame(th.toLowerCase());
         }else  return Tatlas.getSpriteFrame(th);
         
        
        }
       else{ console.log(th) ;return Tatlas.getSpriteFrame("a110");}
      }else return null
      
      }
        
      
      PM(w:string){
      
      if(w[1]=="3"){return this.find(2,w,0)}else{return this.find(6,w,0)}
      
      
      
      }
      
      
     
      getg(){
      
      
        return this.A
      }
 
  
      /**
       * 根据装备编号和朝向加载对应的图片
       * @param code 装备编号（如 "B03", "A110"）
       * @param direction 朝向（2, 4, 6, 8）
       * @returns Promise<Texture2D | null>
       */
      loadEquipmentTexture(code: string, direction: number){
       
          const type = code[0]; // 装备类型（A, B, C, D）
          const subType = code[1]; // 子类型（1, 2, 3）

          // 构建文件夹路径
          let folderPath = `${"equipment"}/${type}`;
          if (type === 'A') {
              folderPath += `/${subType}`;
          }

          // 构建朝向文件夹路径
          const directionFolder = `${direction}`; // 朝向文件夹名称
          folderPath += `/${directionFolder}`;

          // 构建文件名
          const fileName = `${code}`;

          // 拼接完整的资源路径
          let fullPath = `${folderPath}/${fileName}`;

          // 动态加载资源
          console.log(fullPath)
          return fullPath
}



loadImageAndApply(n,o){
  
  
 

    const imagePath = 'images/1'; // 资源路径，不包括文件扩展名

    resources.load(n, ImageAsset, (err, imageAsset: ImageAsset) => {
        if (err) {
           // console.error(`Failed to load image asset at path '${imagePath}':`, err);
            return;
        }
console.log(n)
        // 创建 Texture2D 对象
        const texture = new Texture2D();
        texture.image = imageAsset;
   
        // 创建 SpriteFrame 并设置 Texture2D
        const spriteFrame = new SpriteFrame();
        spriteFrame.packable=false
        
        spriteFrame.texture = texture;

        // 获取当前节点的 Sprite 组件
        const sprite = find("Canvas/BAOm").children[o].getComponent(Sprite)
        if (!sprite) {
            console.error('Sprite component not found on the node.');
            return;
        }

        // 设置 SpriteFrame
    
        sprite.spriteFrame = spriteFrame;
     
  
       return
    }
  
  
  )
}


}
