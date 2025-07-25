import { _decorator, Component, Node, Sprite, Vec3, UITransform, Tween, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScrollingBackground')
export class ScrollingBackground extends Component {
    // 滚动方向
    
    direction: "horizontal" | "vertical" = "vertical";
    
    // 滚动速度（像素/秒）
    @property({
        tooltip: "滚动速度（像素/秒）"
    })
    speed: number = 100;
    
    // 是否自动开始
    @property({
        tooltip: "是否在启动时自动开始滚动"
    })
    autoStart: boolean = true;
    
    // 是否循环滚动
    @property({
        tooltip: "是否循环滚动"
    })
    loop: boolean = true;
    
    // 图片节点数组
    @property({
        type: [Node],
        tooltip: "需要滚动的图片节点（至少两个）"
    })
    imageNodes: Node[] = [];
    
    // 私有属性
    private _isScrolling: boolean = false;
    private _imageWidth: number = 0;
    private _imageHeight: number = 0;
    private _imagePositions: Vec3[] = [];
    
    onLoad() {
        // 初始化图片位置
        this._initImagePositions();
        
        // 自动开始滚动
        if (this.autoStart) {
            this.startScrolling();
        }
    }
    
    // 初始化图片位置
    private _initImagePositions() {
        if (this.imageNodes.length < 2) {
            console.error("需要至少两个图片节点才能实现循环滚动");
            return;
        }
        
        // 获取第一张图片的尺寸
        const firstNode = this.imageNodes[0];
        const uiTransform = firstNode.getComponent(UITransform);
        if (!uiTransform) {
            console.error("图片节点缺少 UITransform 组件");
            return;
        }
        
        this._imageWidth = uiTransform.width;
        this._imageHeight = uiTransform.height;
        
        // 保存初始位置
        this._imagePositions = this.imageNodes.map(node => node.position.clone());
        
        // 根据方向排列图片位置
        if (this.direction === "horizontal") {
            this._arrangeHorizontally();
        } else {
            this._arrangeVertically();
        }
    }
    
    // 水平方向排列图片
    private _arrangeHorizontally() {
        for (let i = 0; i < this.imageNodes.length; i++) {
            const pos = v3(i * this._imageWidth, 0, 0);
            this.imageNodes[i].position = pos;
            this._imagePositions[i] = pos.clone();
        }
    }
    
    // 垂直方向排列图片
    private _arrangeVertically() {
        for (let i = 0; i < this.imageNodes.length; i++) {
            const pos = v3(0, -i * this._imageHeight, 0);
            this.imageNodes[i].position = pos;
            this._imagePositions[i] = pos.clone();
        }
    }
    
    // 开始滚动
    startScrolling() {
        if (this._isScrolling || this.imageNodes.length < 2) return;
        
        this._isScrolling = true;
        this._updateScrolling();
    }
    
    // 停止滚动
    stopScrolling() {
        this._isScrolling = false;
    }
    
    // 重置位置
    resetPositions() {
        this.stopScrolling();
        for (let i = 0; i < this.imageNodes.length; i++) {
            this.imageNodes[i].position = this._imagePositions[i].clone();
        }
    }
    
    // 更新滚动状态
    private _updateScrolling() {
        if (!this._isScrolling) return;
        
        // 计算移动向量
        const moveVector = this.direction === "horizontal" 
            ? v3(-this.speed, 0, 0) 
            : v3(0, this.speed, 0);
        
        // 创建移动动画
        for (const node of this.imageNodes) {
            tween(node)
                .by(1, { position: moveVector })
                .call(() => this._checkAndResetPosition(node))
                .start();
        }
        
        // 递归调用实现循环
        this.scheduleOnce(() => this._updateScrolling(), 1);
    }
    
    // 检查并重置位置
    private _checkAndResetPosition(node: Node) {
        if (!this.loop) return;
        
        const position = node.position;
     //   const screenWidth = UITransform.WIDTH;
     //   const screenHeight = UITransform.HEIGHT;
        
        // 根据方向检查是否移出屏幕
        if (this.direction === "horizontal") {
            if (position.x <= -this._imageWidth) {
                // 移动到最后一个图片的右侧
                const lastNode = this.imageNodes[this.imageNodes.length - 1];
                node.position = v3(lastNode.position.x + this._imageWidth, position.y, 0);
            }
        } else {
            if (position.y >= this._imageHeight) {
                // 移动到最后一个图片的下方
                const lastNode = this.imageNodes[this.imageNodes.length - 1];
                node.position = v3(position.x, lastNode.position.y - this._imageHeight, 0);
            }
        }
    }
    
    onDestroy() {
        this.stopScrolling();
    }
}