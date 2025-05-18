    
    // 假设这些类型已存在
    import { v3 } from 'cc';
    import { _decorator, Component, Vec3, tween, Node, UIOpacity } from 'cc';
    import ComponentBase from '../../BASE/ComponentBase';
import { SpriteFrame, Prefab, instantiate, RichText } from 'cc';
import { gif1 } from '../../BASE/spineANDgif/gif';
import GeZiManager from '../../Manager/GeZiManager';
import turn from '../../game/time/turn';

    
    const { ccclass, property } = _decorator;
    
    @ccclass('Xgmove')
    export default class xgcol extends ComponentBase {
        // 配置参数
     
        positions: Vec3[] = []; // 0-4号位的坐标和缩放（x,y,z,w=scale）
    
        @property(SpriteFrame)
        picture: SpriteFrame[] = [];
        
        @property(Prefab)
        richTextPrefab: Prefab = null;
    
        @property
        moveDuration: number = 1; // 移动动画时长
    
        // 运行时数据
        private richTextNodes: Node[] = []; // 当前存在的节点
        private tur: number = 0; // 当前生成计数器
        public xxx: number[]=[1,0.9,0.8,0.7,0]
    
        start() {
            this.initDemo();
            turn.Roo.push(this)
        }
    
        // 初始化示例数据
        private initDemo() {
            // 初始化5个位置（示例值）
            this.positions = [
                new Vec3(13, -155, 0),   // 位置0
                new Vec3(395, -128, 0),  // 位置1
                new Vec3(762, -100, 0),     // 位置2
                new Vec3(1045, -90, 0),   // 位置3
                new Vec3(1100, -85, 0)     // 位置4
            ];





            for (let index = 0; index <= 4; index++) {
              let a=  instantiate(this.richTextPrefab)
                a.setParent(this.node)
                a.setPosition(this.positions[index])
            a.scale=new Vec3(this.xxx[index],this.xxx[index],this.xxx[index])
           // a.getComponentInChildren(gif1).spriteFrame= a.getComponentInChildren(gif1).atlas1.getSpriteFrame(GeZiManager.TNJM[index].toString())
            }
        }
    c(){

        for (let index = 0; index <= 4; index++) {
         
          this.node.children[index].getComponentInChildren(gif1).spriteFrame=   this.node.children[index].getComponentInChildren(gif1).atlas1.getSpriteFrame((GeZiManager.TNJM[index]+1).toString())
          }


    }
        // 核心移动方法
        movel() {
          
            this.node.children[0].active=false
            this.node.children[0].getComponentInChildren(gif1).spriteFrame=   this.node.children[0].getComponentInChildren(gif1).atlas1.getSpriteFrame((GeZiManager.TNJM[turn.round+3]+1).toString())
            tween(this.node.children[0]).to(0.5,{position:this.positions[4],scale:v3(this.xxx[4],this.xxx[4],this.xxx[4])}).start()
            for (let index = 1; index <= 5; index++) {
                let c=this.node.children[index]
              if (index==4) {
               this.fadeINAndA(this.node.children[index],200)
              }
            tween(c).to(0.5,{position:this.positions[index-1],scale:v3(this.xxx[index-1],this.xxx[index-1],this.xxx[index-1])}).start()
            
            
            }
            
           
this.shiftFirstToLast()






            }
    
           
        
    
        // 生成新节点到位置4
      
    
        roundPass(){


this.movel()


        }
        shiftFirstToLast() {
            // 获取所有子节点
            const children = this.node.children;
            
            // 边界检查：至少需要2个子节点才有移动意义
            if (children.length < 2) return;
    
            // 记录第一个子节点
            const firstChild = children[0];
            
            // 从父节点移除第一个子节点
            this.node.removeChild(firstChild);
            
            // 将移除的子节点添加到最后位置
            this.node.addChild(firstChild);
        }


        reverseTransform(output: number): number {
            const reverseMap = {
                1: 2,
                2: 2,
                3: 5,
                4: 7,
                5: 2,
                6: 2,
                7: 5,
                8: 7

            };
            return reverseMap[output] ?? output;
        }

    }