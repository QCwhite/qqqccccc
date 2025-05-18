
import { _decorator, Component, director, Node } from 'cc';
import KHD2 from './KHD2';
import { find } from 'cc';
import label from '../UIS/label';
import { Label } from 'cc';
const { ccclass } = _decorator;

type MessageHandler = (data: any) => void;

@ccclass('WebSocketManager')
export class WebSocketManager extends Component {
   static _instance: WebSocketManager | null = null;
   public ws: WebSocket | null = null;
    private handlers: Map<number, MessageHandler[]> = new Map();
    private reconnectAttempts = 0;
    private maxReconnectAttempts = 5;

    static get instance(): WebSocketManager {
     
      
        if (!WebSocketManager._instance) {
            const node = new Node('WebSocketManager');
            director.addPersistRootNode(node);
          
            WebSocketManager._instance = node.addComponent(WebSocketManager);
           // find("Canvas/Node").getComponent(Label).string="去连了"
            WebSocketManager._instance.connect('ws://119.29.174.60:4000')
           // console.error(WebSocketManager._instance)
        }
        return WebSocketManager._instance;
    }

    connect(url: string) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {return;}
     
        this.ws = new WebSocket(url);
    
    }

  disconnect() {
    if (this.ws) {
        // 简单粗暴的直接关闭
        try {
            this.ws.close(1000, "Manual close"); // 正常关闭代码1000
         //     this.ws.onopen(1000, "Manual close"); // 正常关闭代码1000
        } catch (error) {
            console.warn('Close error:', error);
        }
        
        // 快速清理
        this.ws = null; // 直接释放引用
    }
}




n(){

WebSocketManager._instance=null


}
}