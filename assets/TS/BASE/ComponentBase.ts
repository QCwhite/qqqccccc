// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, Vec3, Camera, UIOpacity, tween, math, Quat, Material, resources, Sprite } from 'cc';
const {ccclass, property} = _decorator;

import AnimalManager from "../Manager/AnimalManager";
import GeZiManager from "../Manager/GeZiManager";
import GMessage from "../Message/GMessage";

import KHD2 from "../Message/KHD2";
import { Message } from "../Message/Message";
import { SHMessage } from "../Message/SHMessage";
import turn from "../game/time/turn";
import Character from "./Character";
import Cspine from "./spineANDgif/Cspine";
import  gif1  from "./spineANDgif/gif";
import realThing from './realThing';
import { truncate } from 'fs';

@ccclass('ComponentBase')
export default class ComponentBase extends Component {
  x: number;
  y: number;
    WDT() {
        throw new Error('Method not implemented.');
    }
   T3() {
 
   }
   Kill3(Pturn: number) {
     
   }
  Attack3(an: number[]) {
 
  }
  Attack2(an: number[]) {
   
  }
   xd2(message: GMessage) {
      
   }
   
   Behurt2(message: SHMessage, arg1:Character, arg2: realThing) {
    
   }
        xd1(message: SHMessage,n:number) {
              
        }
        ReceiveMessage(message: Message) {
                
        }
        Magic1() {
               
        }
        Shop3() {
               
        }
        Shop1() {
             
        }
        Shop2(arg0: string, arg1: boolean) {
       
        }
        P6F(): any {
          
        }
  turnPass() {
   
  }
        Walk3(ZB: number) {
         
        }
        Walk2(ZB: number) {
             
        }
        Move3(ZB: number, Pturn: number) {
             
        }
        Move2(ZB: number, Pturn: number, time: number) {
              
        }
   Behurt222(k:number, arg1: this, arg2: any) {

   }
 ZB:number=0
 FW:number[]=[]
  ObstaclesName: string;
  color: string;
  tt: string;
  BZ(preZB:number,zi:boolean)
  {}
 LK(ZB:number){}
 JR(ZB:number){}
  WD1(){}
  
  T0(turn: number) {

   }
   mg(m:string) {
//      //throw new Error("Method not implemented.");
   }
   Kill2() {

   }
  Attack1() {

  }
   Qi3() {

   }
    Magic3(ZB:number) {

    }
  dayPass() {

  }
 
   HPM3(){}
FH1(n:number){}
   
   HPM2(n:number,fo:number,wo:number) {
   }
   Walk25(ZB: number) {

   }
   Behurt3(n: number,killp:any,k:number,BK:number) {
   }
    Turn3(N?:number) {

    }
    Turn1(N?:number) {

    }
   Dead2(dead:number) {

   }
   Dead1() {

   }
    T1(turn:number) {

    }
   Walk1() {

   }
    Magic2() {

    }
    
 
findGe(face: number,i:number,ZB:number) {
let n = 0;
let a = ZB;
let x:number;

let y:number;
if(ZB % 8 == 0) {x = 8 } else {x = ZB % 8; }
y = Math.ceil(ZB / 8)

for (let b = 0; b < i; b++) {
  if ((x === 1) && (face === 4)) { n = 66 } else if ((x === 8) && (face === 6)) { n = 66; } else if ((y === 1) && (face === 2)) { n = 66; } else if ((y === 8) && (face === 8)) { n = 66; }
  else {

    switch (face) {
      case 1: n = a - 9
        break;

      case 2: n = a - 8
        break;

      case 3: n = a - 7
        break;
      case 4: n = a - 1
        break;
      case 5: n = a
        break;
      case 6: n = a + 1
        break;
      case 7: n = a + 7
        break;
      case 8: n = a + 8
        break;
      case 9: n = a + 9
        break;
    }
    a = n;
  }
}
return n;
}
getNIG(n:number){
let NK:number[]=[];
for (let index = 1; index <= 9; index++) {
  
 NK.push(this.findGe(index,1,n))
}
return NK;
}


getNIGno5(n:number){
let NK:number[]=[];
  for (let index = 1; index <= 9; index++) {
 if (index!=5) {
  NK.push(this.findGe(index,1,n))
 }   
  

  }
  return NK;
}



roundPass(){
}




Qi1(n:number){}
Qi2(n:number,pn:number,m:SHMessage){}

PPC(){
if(KHD2.PT.includes(turn.turn)){
  return true
}else{return false}
}



turn8(arr: number[]): number[] {
const transformationMap = {
  1: 9,
  2: 8,
  3: 7,
  4: 6,
  5: 5,
  6: 4,
  7: 3,
  8: 2,
  9: 1
};
for (let i = 0; i < arr.length; i++) {
  arr[i] = transformationMap[arr[i]] || arr[i];
}
return arr;
}//通用校对的基本方法，不用理会

tt6(arr:number): number {
const transformationMap = {
  1: 3,
  2: 6,
  3: 7,
  4: 2,
  5: 5,
  6: 8,
  7: 1,
  8: 4,
  9: 7
};

  arr = transformationMap[arr]

return arr;
}//通用校对的基本方法，不用理会

tt4(arr:number): number {
const transformationMap = {
  3: 1,
  6: 2,
 7: 3,
  2: 4,
  5: 5,
  8: 4,
  1: 7,
 4: 8,
  9:3
};
arr = transformationMap[arr]

return arr;
}

d2468(a: number, b: number): number {
if (a === b) {
  return 2; // 同
} else if (a === 2) {
  if (b === 4) {
    return 6; // 顺时针转90度
  } else if (b === 6) {
    return 8; // 180度
  } else if (b === 8) {
    return 4; // 逆时针转90度
  }
} else if (a === 4) {
  if (b === 2) {
    return 8; // 180度
  } else if (b === 6) {
    return 2; // 同
  } else if (b === 8) {
    return 6; // 顺时针转90度
  }
} else if (a === 6) {
  if (b === 2) {
    return 4; // 逆时针转90度
  } else if (b === 4) {
    return 8; // 180度
  } else if (b === 8) {
    return 2; // 同
  }
} else if (a === 8) {
  if (b === 2) {
    return 6; // 顺时针转90度
  } else if (b === 4) {
    return 2; // 同
  } else if (b === 6) {
    return 4; // 逆时针转90度
  }
}
return -1; // 非法输入，返回-1表示无效结果
}

fadeOutAndDisappear(node: Node, duration: number) {
 
 tween(node.getComponent(UIOpacity))
 .to(duration/1000,{opacity:0})
 .call( ()=>{node.active = false})
 .start()
}

fadeINAndA(node:Node, duration:number) {
if (this.node.isValid&&node.isValid) {

  node.active=true;
node.getComponent(UIOpacity).opacity=0;
const fps = 60;
const totalFrames = Math.ceil(duration / 1000 * fps);
const step = 255 / totalFrames;
let currentFrame = 0;

const interval = setInterval(() => {
  if (node.isValid) {
  node.getComponent(UIOpacity).opacity += step;
  currentFrame++;
  }

}, 1000 / fps);
}
}
fadeINAndAK(node:Node, duration:number,n:number) {
if (this.node.isValid) {


  node.active=true;
node.getComponent(UIOpacity).opacity=0;
tween(node.getComponent(UIOpacity))
.to(duration/1000,{opacity:n})
.call( ()=>{node.active = true})
.start()
}
}
NtoColor(n){
if(n<0){return "Green"}
switch (n%2) {
case 1:return "Blue"
case 0:return "Red"
 

default:
  break;
}

}

ColortoN(c:String){

switch (c) {
case "Blue":return 1
case "Red":return 0
case "Green":return -1

default:
  break;
}

}

getpos(ZB:number){




  let point;
  switch (ZB) {
    case 0: point = new Vec3(0, 0,1);

      break;


    case 1: point = new Vec3(300, 65,1);
      break;
    case 2: point = new Vec3(634, 65,1);
      break;
    case 3: point = new Vec3(906, 65,1);
      break;
    case 4: point = new Vec3(1188, 65,1);
      break;
    case 5: point = new Vec3(1485, 65,1);
      break;
    case 6: point = new Vec3(1774, 65,1);
      break;
    case 7: point = new Vec3(2058, 65,1);
      break;
    case 8: point = new Vec3(2228, 65,1);
      break;



    case 9: point = new Vec3(445, 270,1);
      break;
    case 10: point = new Vec3(684, 270,1); console.log("10");
      break;
    case 11: point = new Vec3(950, 270,1);
      break;
    case 12: point = new Vec3(1212, 270,1);
      break;
    case 13: point = new Vec3(1465, 270,1);
      break;
    case 14: point = new Vec3(1724, 270,1);
      break;
    case 15: point = new Vec3(1983, 270,1);
      break;
    case 16: point = new Vec3(2203, 270,1);
      break;


    case 17: point = new Vec3(445, 436,1);
      break;
    case 18: point = new Vec3(684, 436,1);
      break;
    case 19: point = new Vec3(950, 436,1);
      break;
    case 20: point = new Vec3(1212, 436,1);
      break;
    case 21: point = new Vec3(1465, 436,1);
      break;
    case 22: point = new Vec3(1724, 436,1);
      break;
    case 23: point = new Vec3(1983, 436,1);
      break;
    case 24: point = new Vec3(2203, 436,1);
      break;



    case 25: point = new Vec3(572, 592,1);
      break;
    case 26: point = new Vec3(792, 592,1);
      break;
    case 27: point = new Vec3(1008, 592,1);
      break;
    case 28: point = new Vec3(1229, 592,1);
      break;
    case 29: point = new Vec3(1439, 592,1);
      break;
    case 30: point = new Vec3(1660, 592,1);
      break;
    case 31: point = new Vec3(1886, 592,1);
      break;
    case 32: point = new Vec3(2083, 592,1);
      break;






    case 33: point = new Vec3(654, 740,1);
      break;
    case 34: point = new Vec3(843, 740,1);
      break;
    case 35: point = new Vec3(1039, 740,1);
      break;
    case 36: point = new Vec3(1241, 740,1);
      break;
    case 37: point = new Vec3(1431, 740,1);
      break;
    case 38: point = new Vec3(1630, 740,1);
      break;
    case 39: point = new Vec3(1831, 740,1);
      break;
    case 40: point = new Vec3(2018, 740,1);
      break;





    case 41: point = new Vec3(719, 883,1);
      break;
    case 42: point = new Vec3(888, 883,1);
      break;
    case 43: point = new Vec3(1067, 883,1);
      break;
    case 44: point = new Vec3(1246, 883,1);
      break;
    case 45: point = new Vec3(1423, 883,1);
      break;
    case 46: point = new Vec3(1600, 883,1);
      break;
    case 47: point = new Vec3(1784, 883,1);
      break;
    case 48: point = new Vec3(1958, 883,1);
      break;




    case 49: point = new Vec3(765, 995,1);
      break;
    case 50: point = new Vec3(924, 995,1);
      break;
    case 51: point = new Vec3(1088, 995,1);
      break;
    case 52: point = new Vec3(1252, 995,1);
      break;
    case 53: point = new Vec3(1412, 995,1);
      break;
    case 54: point = new Vec3(1578, 995,1);
      break;
    case 55: point = new Vec3(1742, 995,1);
      break;
    case 56: point = new Vec3(1900, 995,1);
      break;



    case 57: point = new Vec3(815, 1080,1);
      break;
    case 58: point = new Vec3(956, 1096,1);
      break;
    case 59: point = new Vec3(1107, 1096,1);
      break;
    case 60: point = new Vec3(1260, 1096,1);
      break;
    case 61: point = new Vec3(1410, 1096,1);
      break;
    case 62: point = new Vec3(1562, 1096,1);
      break;
    case 63: point = new Vec3(1708, 1096,1);
      break;
    case 64: point = new Vec3(1848, 1096,1);
      break;
    case 65:point = new Vec3(1848, 1096,1);
      break;

  }
return point
}




mArr1Arr2<T>(...arrays: T[][]): T[] {
const mergedArray: T[] = [].concat(...arrays);
return mergedArray;
}
//合并相同元素？
addZ(banX: number[], useR: number[], banT: number[]): number {
function getR(banR:number[]):number[] {
  let k=[]
    for(let a of banR){
   
    switch (a) {
        case 1:k.push(28,29,36,37);
            
            break;
            case 2:k.push(19,20,21,22,30,38,46,45,44,43,35,27)
            
            break;
            case 3:k.push(10,11,12,13,14,15,23,31,39,47,55,54,53,52,51,50,42,34,26,18)
            
            break;
    
        default:
            break;
    }
  }
  //console.log(k)
    return k
}


function isWaterCell(x: number, y: number): boolean {
  return x === 1 || y === 1 || x === 8 || y === 8;
}


function getCoordinates(cellNumber: number): [number, number] {
  const row = Math.ceil(cellNumber / 8);
  const col = cellNumber % 8 === 0 ? 8 : cellNumber % 8;
  return [ col,row];
}
const validCoordinates: number[] = [];
for (let i = 1; i <= 64; i++) {
  const [x, y] = getCoordinates(i);
  const isXForbidden = banX.includes(x);
  const isRingForbidden = getR(useR).includes(i)
  const isCellForbidden = banT.includes(i);
  const isWater = isWaterCell(x, y);
  
  
  if (!isXForbidden && isRingForbidden && !isCellForbidden && !isWater) {
    validCoordinates.push(i);
  }
}

if (validCoordinates.length!=0) {
return  validCoordinates[Math.floor(Math.random() * validCoordinates.length)]
}else{return -1}

}



faceSide(n:number)
{

switch (n) {
case 2:return[2,1,3]
  
  break;
  case 4:return[4,1,7]
  
  break;
  case 6:return[6,8,3]
  
  break;
  case 8:return[7,8,9]
  
  break;
default:return[0]
  break;
}




}



getRAA<T>(arr: T[], num: number): T[] {
let shuffled = arr.slice(0);
for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}
return shuffled.slice(0, num);
}

 getRA(arr:string[], n:number) {
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


getWorldPos(node: Node): Vec3 {
        return node.worldPosition;
    }

    /**
     * 设置节点的世界坐标
     */
    setWorldPos(node: Node, worldPosition: Vec3) {
        if (node.parent) {
                const localPosition = new Vec3();
       node.parent.inverseTransformPoint(localPosition,worldPosition);
            node.position = localPosition;
        }
    }

    /**
     * 抖动节点
     */
    shakeNodehh(node: Node, duration: number, range: number) {
        const startPosition = node.position.clone();
        const startScale = node.scale.clone();

        tween(node)
            .to(duration / 4, { position: new Vec3(startPosition.x + range, startPosition.y + range, startPosition.z) }, { easing: "sineInOut" })
            .to(duration / 4, { position: startPosition }, { easing: "sineInOut" })
            .call(() => {
                const uiTransform = node.getComponent(UIOpacity);
                if (uiTransform) {
                    uiTransform.opacity = 255; // 设置透明度
                }
            })
            .start();
    }

    /**
     * 显示子节点并抖动
     */
    showAndShakeChildren(node: Node) {
        node.children.forEach(child => {
            child.active = false; // 首先确保子节点是隐藏的

            tween(child)
                .delay(0.5)
                .call(() => {
                    const uiTransform = child.getComponent(UIOpacity);
                    if (uiTransform) {
                        uiTransform.opacity = 255; // 设置透明度
                    }
                })
                .call(() => {
                    this.shakeNodehh(child, 1, 10); // 子节点显示后开始抖动
                })
                .start();
        });
    }

    /**
     * 显示子节点并抖动（带参数）
     */
    showAndShakeChildren2(node: Node, time: number, f: number) {
        node.children.forEach(child => {
            const uiTransform = child.getComponent(UIOpacity);
            if (uiTransform) {
                uiTransform.opacity = 0; // 首先确保子节点是隐藏的
            }

            tween( uiTransform)
                .to(0.2, { opacity: 255 }, { easing: "sineInOut" })
                .start();

            this.shakeNodehh(child, time, f); // 抖动子节点
        });
    }

    /**
     * 抖动相机和节点
     */
    shakeCameraAndNode(camera: Camera, node: Node, intensity: number, duration: number) {
        const originalCameraPos = camera.node.position.clone();
        const originalNodePos = node.position.clone();

        let elapsed = 0;
        const fps = 60;

        const interval = setInterval(() => {
            const randomX = (Math.random() - 0.5) * intensity;
            const randomY = (Math.random() - 0.5) * intensity;

            camera.node.setPosition(originalCameraPos.x + randomX, originalCameraPos.y + randomY, originalCameraPos.z);
            node.setPosition(originalNodePos.x + randomX, originalNodePos.y + randomY, originalNodePos.z);

            elapsed += 1000 / fps;

            if (elapsed >= duration) {
                clearInterval(interval);
                camera.node.setPosition(originalCameraPos);
                node.setPosition(originalNodePos);
            }
        }, 1000 / fps);
    }

    /**
     * 淡出效果
     */
    fadeOut(node: Node, duration05: number, targetOpacity: number): void {
        const uiTransform = node.getComponent(UIOpacity);
        if (uiTransform) {
            tween(uiTransform)
                .to(duration05, { opacity: targetOpacity })
                .start();
        }
    }



    
rotateNode(node: Node, angle: number) {
        // 创建一个四元数
        const rotation = new Quat();

        // 获取当前旋转
        Quat.copy(rotation, node.rotation);

        // 绕 Y 轴旋转
        Quat.rotateY(rotation, rotation, math.toRadian(angle));

        // 设置新的旋转
        return  rotation;
    }

    /**
     * 示例：使用欧拉角设置旋转
     */
    setRotationWithEuler(node: Node, euler: Vec3) {
        const rotation = new Quat();
        Quat.fromEuler(rotation, euler.x, euler.y, euler.z); // 将欧拉角转换为四元数
        node.rotation = rotation; // 设置旋转
    }

    /**
     * 示例：获取节点的欧拉角
     */
    getEulerFromRotation(node: Node): Vec3 {
        const euler = new Vec3();
        Quat.toEuler(euler, node.rotation); // 将四元数转换为欧拉角
        return euler;
    }




    rotateB(n:number|null) {
        // 获取当前节点的旋转
        if (n) {
                
     
        const node = this.node;
        const currentRotation = node.rotation;

        // 将四元数转换为欧拉角
        const euler = new Vec3();
        Quat.toEuler(euler, currentRotation);

        // 增加 30 度
       
        euler.z += n; // 绕 Z 轴旋转（2D UI 通常绕 Z 轴旋转）

        // 将欧拉角转换回四元数
        const newRotation = new Quat();
        Quat.fromEuler(newRotation, euler.x, euler.y, euler.z);

        // 设置新的旋转

        return     newRotation;
    }else{
        const newRotation = new Quat();
        return   Quat.fromEuler(newRotation, 0, 0, 0);}
}


getFarINN(Z:number,dis: number) {
  let c=[]

for (let index = 1; index < 56; index++) {
  const { x, y } = this.getCurrentPosition(index);
    if (Math.abs(x - this.x) + Math.abs(y - this.y) <= dis) {
        c.push(index);
    }
  
}
  

    return c
}

// 获取当前棋子的位置
getCurrentPosition(o) {
    const x = o % 8 === 0 ? 8 : o % 8;
    const y = Math.ceil(o / 8);
    return { x, y };
}








}
