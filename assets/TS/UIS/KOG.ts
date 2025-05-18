// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, UITransform } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('KOG')
export default class KOG extends Component {
    static A2:number[]=[0.21,0.4,0.8]
static A1:number[]=[0.2,0.42,0.8]
static A3:number[]=[0.35,0.32,0.8]
static B:number[]=[0.5,0.4,0.8]
static C:number[]=[0.58,0.3,1.2]
static D:number[]=[0.5,0.45,1]
static Dk:number[]=[0.5,0.55,0.5]
      


start() {
           
        }
  

static SP(n:string){



  if (n=="D07") {
  return [0.51,0.52,1.3]  
}

switch (n[0]) {
  case "F":
    return [0.5,0.45,0.6]  
  break
    case "A":switch (n[1]) {
        case "1":return KOG.A1
            
            break;
            case "2":return KOG.A2
            
            break;
            case "3":return KOG.A3
            
            break;
        default:return KOG.A3
            break;
    }
        
        break;
        case "B":return KOG.B

        break
        case "C":return KOG.C

        break
        case "D":if(["D17","D16-b","D04","D06","D15","D19"].includes(n)){return KOG.Dk}else{return KOG.D}

        break
    default:return KOG.A3     
        break;
}



}

static DSP(node:Node,n:string){


  
  
}

 
    }
    

    
