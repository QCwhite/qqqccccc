import { _decorator, Component, find } from 'cc';
const {ccclass, property} = _decorator;

import fsc from "./fashucontrol";

@ccclass('Fashuchoose')
export default class fsChoose extends Component {
        Q:boolean=false;
        f:fsc=null
        
           
        
        start(): void {
         this.f= find("Canvas/Main Camera/background/fashu background").getComponent(fsc)
        }
        fixui()//修改ui
            {
        
            if(this.Q){this.node.children[0].active=true}else this.node.children[0].active=false
               
            }
        
        DJ(){
          this.f.PD(parseInt(this.node.name))
         
        }
        
        
}
        