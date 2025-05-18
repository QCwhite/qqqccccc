// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, SpriteFrame, Node, JsonAsset, resources, RichText, Sprite } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
//     // 技能数据结构
    interface SkillData {
        id: string; // 技能ID
        name: string; // 技能名称
        description: string; // 技能介绍
        jieS: string; // 解锁条件
    }

@ccclass('JNFU')
export class JNFU extends ComponentBase {
    
     // 单独的精灵帧属性
     @property(SpriteFrame)
     FU0: SpriteFrame = null;
 
     @property(SpriteFrame)
     FU1: SpriteFrame = null;
 
     @property(SpriteFrame)
     FU2: SpriteFrame = null;
 
     @property(SpriteFrame)
     FU3: SpriteFrame = null;
 
     @property(SpriteFrame)
     FU4: SpriteFrame = null;
 
     @property(SpriteFrame)
     FU5: SpriteFrame = null;
 
     @property(SpriteFrame)
     RO: SpriteFrame = null;
 
     // 存储技能数据的字典
     skillDataMap: { [key: string]: SkillData } = {};
     skillDataMap2: { [key: string]: SkillData } = {};
    onLoad() {
         // 加载技能数据
         this.loadSkillData(() => {
             // 遍历子节点的子节点，设置富文本和精灵图片
             this.node.children.forEach(child => {
                 child.children.forEach(grandChild => {
                     this.setupGrandChild(grandChild);
                 });
             });  const skillId = "S01-冲锋";
 if( this.skillDataMap[skillId]) {
    

             // 示例：打印技能解锁条件的富文本
           
             const jieS = this.skillDataMap[skillId].jieS;
             const des = this.skillDataMap[skillId].description;
             const richText = this.generateRichTextFromJieS(jieS);
             this.getdescription(des)
             console.log("Generated RichText for skill unlock condition:", richText);
         }});
     }
    




public SetJN(skillId){
 const jieS = this.skillDataMap[skillId].jieS;
 const des = this.skillDataMap[skillId].description;
 const richText = this.generateRichTextFromJieS(jieS);
 this.getdescription(des)
}











     // 加载技能数据
     loadSkillData(callback: () => void): void {
         resources.load("word", (err: Error, data: JsonAsset) => {
             if (err) {
                 console.error("Failed to load skills data:", err);
                 return;
             }
 
             // 解析 JSON 数据并存储到字典中
             let skillList:SkillData[] = []
             
             data.json;
             skillList.forEach(skill => {
                 this.skillDataMap[skill.id] = skill;
             });
 
             console.log("Skills data loaded successfully.");
             callback();
         });

        






     }
 
     // 设置子节点的子节点
     setupGrandChild(grandChild: Node): void {
         // 获取 id 属性
         const id = grandChild.name;
 
         // 设置富文本
         const richText = grandChild.getComponent(RichText);
         if (richText) {
             const text = this.getChineseTextFromId(id);
             const isBoldYellow = id.endsWith("P");
             richText.string = this.generateRichText(text, isBoldYellow);
         }
 
         // 设置精灵图片
         const sprite = grandChild.getComponent(Sprite);
         if (sprite) {
             const spriteFrame = this.getSpriteFrameById(id);
             if (spriteFrame) {
                 sprite.spriteFrame = spriteFrame;
             } else {
                 console.warn(`SpriteFrame not found for id: ${id}`);
             }
         }
     }
 
     // 从 id 中提取中文部分
     getChineseTextFromId(id: string): string {
         const match = id.match(/[\u4e00-\u9fa5]+/); // 匹配中文字符
         return match ? match[0] : "";
     }
 
     // 生成富文本内容
     generateRichText(text: string, isBoldYellow: boolean): string {
         if (isBoldYellow) {
             return `<color=#FFD700><b>${text}</b></color>`;
         }
         return text;
     }



public getdescription(n:string) {




 //this.node.children[0].getComponent(RichText).string=n

}














 
     // 根据 jieS 生成富文本（技能解锁条件）
     generateRichTextFromJieS(jieS: string): string {
         // 解析 jieS 字符串
         const tokens = this.parseJieS(jieS);
         let richText = "";
 
         for (const token of tokens) {
             if (token.type === "symbol") {
                 // 处理运算符（使用 HTML 实体编码）
                 switch (token.value) {
                 //    case "+":
                       //  richText += "&plus;";

                    //     break;
                  //   case "/":
                       //  richText += "&frasl;";
                   //      break;
                  //   case "(":
                       //  richText += "&lpar;";
                     //    break;
                  //   case ")":
                     //    richText += "&rpar;";
                     //    break;
                     default:
                         richText += token.value;
                 }
             } else if (token.type === "count") {
                 // 处理数量
                 const count = token.value;
                 const item = token.item;
                 if (item === "RO") {
                     // 轮数：显示绿色数字 + 轮数图片
                     richText += `<color=green>${count}</color><img src="${this.RO.name}" width="30" height="30" style="vertical-align: middle;"/>`;
                 } else {
                     // 符类：显示多个连续的图片
                     const spriteFrame = this.getSpriteFrameById(item);
                     if (spriteFrame) {
                         for (let i = 0; i < count; i++) {
                             richText += `<img src="${spriteFrame.name}" width="30" height="30" style="vertical-align: middle;"/>`;
                         }
                     }
                 }
             }
         }
 this.node.getComponent(RichText).string=richText

         return richText;
     }
 
     // 解析 jieS 字符串
 // 解析 jieS 字符串
parseJieS(jieS: string): { type: string, value: any, item?: string }[] {
 const tokens = [];
 const regex = /(\d+)x(FU\d|RO)|(FU\d|RO)|([+/\-()])/g; // 支持无数字的符类
 let match;

 while ((match = regex.exec(jieS)) !== null) {
     if (match[1] && match[2]) {
         // 数量 + 符类/轮数
         tokens.push({ type: "count", value: parseInt(match[1]), item: match[2] });
     } else if (match[3]) {
         // 无数字的符类/轮数，默认数量为 1
         tokens.push({ type: "count", value: 1, item: match[3] });
     } else if (match[4]) {
         // 运算符
         tokens.push({ type: "symbol", value: match[4] });
     }
 }

 return tokens;
}
 
     // 根据 id 获取对应的 SpriteFrame
     getSpriteFrameById(id: string): SpriteFrame | null {
         switch (id) {
             case "FU0":
                 return this.FU0;
             case "FU1":
                 return this.FU1;
             case "FU2":
                 return this.FU2;
             case "FU3":
                 return this.FU3;
             case "FU4":
                 return this.FU4;
             case "FU5":
                 return this.FU5;
             case "RO":
                 return this.RO;
             default:
                 return null;
         }
     }
 }
 
 // 技能数据结构
