import { UIOpacity } from 'cc';
import { find, EventTouch, instantiate } from 'cc';
import { _decorator, Component, Node, LabelComponent, UITransform, Vec3, v3, Tween, tween } from 'cc';
import AnimalManager from '../Manager/AnimalManager';
import { view } from 'cc';
import shopM from './shop/ShopM';
import { Sprite } from 'cc';
import GeZiManager from '../Manager/GeZiManager';
import NWshopM from './shop/NWshopM';

const { ccclass, property } = _decorator;

@ccclass('HoverTooltip')
export class HoverTooltip extends Component {

    @property({ multiline: true, tooltip: '提示文本内容' })
    tooltipText: string = "默认提示内容";

    private tooltipInstance: Node | null = null;
    private isHovering: boolean = false;
    private hoverDelay: number = 0.1;

    onLoad() {
        this.node.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.on(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
        this.node.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
    }

    // 鼠标进入
    private onMouseEnter() {
        this.isHovering = true;
        this.scheduleOnce(() => {
            if (this.isHovering) this.showTooltip();
        }, this.hoverDelay);
    }

    // 鼠标移动
    private onMouseMove(event: EventTouch) {
        if (this.tooltipInstance) {
            const uiLocation = event.getUILocation();
            const worldPos = v3(uiLocation.x, uiLocation.y, 0);
            this.updateTooltipPosition(worldPos);
        }
    }

    private updateTooltipPosition(worldPos: Vec3) {
        if (!this.tooltipInstance) return;

        const tooltipTransform = this.tooltipInstance.getComponent(UITransform)!;
        const screenWidth = view.getVisibleSize().width;

        // 边界检测（增加容错判断）
        if (tooltipTransform && worldPos.x + tooltipTransform.width > screenWidth) {
            this.tooltipInstance.setWorldPosition(v3(
                worldPos.x - tooltipTransform.width - 120,
                worldPos.y + 100,
                0
            ));
        } else if (tooltipTransform) {
            this.tooltipInstance.setWorldPosition(v3(
                worldPos.x + 120,
                worldPos.y + 100,
                0
            ));
        }
    }

    // 鼠标离开
    private onMouseLeave() {
        this.isHovering = false;
        this.unschedule(this.showTooltip);
        this.hideTooltip();
    }

    // 显示提示框（核心修复部分）
    private showTooltip() {
        const prefab = find("Canvas/DituManager/New Node/AnimalManager")?.getComponent(AnimalManager)?.tooltipPrefab;

        if (!prefab) return;

        // 销毁旧实例
        if (this.tooltipInstance) {
            this.tooltipInstance.destroy();
            this.tooltipInstance = null;
        }

        // 创建新实例
        this.tooltipInstance = instantiate(prefab);
        this.tooltipInstance.setParent(find("Canvas/BAOm"));

        // === 新增关键代码 ===
        // 1. 禁用碰撞检测
        const disableHitTest = (node: Node) => {
            const uiTransform = node.getComponent(UITransform);
            if (uiTransform) uiTransform.enabled = false;
            node.children.forEach(child => disableHitTest(child));
        };
        disableHitTest(this.tooltipInstance);

        // 2. 初始化状态
        this.tooltipInstance.active = true;
        this.tooltipInstance.setWorldPosition(v3(-1000, -1000, 0));

        // 3. 设置内容
        const label = this.tooltipInstance.getComponentInChildren(LabelComponent);
        let contentKey: string | null = null;

        switch (this.tooltipText) {
            case "SH1": contentKey = shopM.A1n[2]; break;
            case "SH2": contentKey = shopM.A2n[2]; break;
            case "SH3": contentKey = shopM.A3n[2]; break;
            case "SH4": contentKey = shopM.A4n; break;
            case "SH5": contentKey = shopM.A5n; break;
            case "SH6": 
                contentKey = find("Canvas/Main Camera/UIManager/shopUI/3L/Leve/Yan/P")?.getComponent(Sprite)?.spriteFrame?.name || '';
                break;
            case "NW1": contentKey = NWshopM.NWN[0]; break;
            case "NW2": contentKey = NWshopM.NWN[1]; break;
            case "NW3": contentKey = NWshopM.NWN[2]; break;
            case "NW4": contentKey = NWshopM.NWN[3]; break;
            case "NW5": contentKey = NWshopM.NWN[4]; break;
        }

        if (label && contentKey) {
            label.string = GeZiManager.skillDataMap[contentKey]?.effect || '';
        }

        // 4. 动画控制
        const uiOpacity = this.tooltipInstance.getComponent(UIOpacity); // 确保添加透明度组件
        uiOpacity.opacity = 0;
        
        Tween.stopAllByTarget(uiOpacity);
        tween(uiOpacity)
            .to(0.2, { opacity: 255 }, { easing: 'sineOut' })
            .start();
    }

    // 隐藏提示框（优化销毁逻辑）
    private hideTooltip() {
        if (this.tooltipInstance) {
            const uiOpacity = this.tooltipInstance.getComponent(UIOpacity);
            Tween.stopAllByTarget(uiOpacity);
            
            tween(uiOpacity)
                .to(0.15, { opacity: 0 })
                .call(() => {
                    this.tooltipInstance?.destroy();
                    this.tooltipInstance = null;
                })
                .start();
        }
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        if (this.tooltipInstance) {
            this.tooltipInstance.destroy();
        }
        this.node.off(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.off(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
        this.node.off(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
    }
}

