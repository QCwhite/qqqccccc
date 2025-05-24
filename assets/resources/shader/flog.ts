import { _decorator, Component, Material, Color, Vec3, MeshRenderer, tween } from 'cc';
import { gif1 } from '../../TS/BASE/spineANDgif/gif';
import { Sprite, find } from 'cc';
import AnimalManager from '../../TS/Manager/AnimalManager';

const { ccclass, property, executeInEditMode } = _decorator;

// 闪烁模式枚举
enum FlashMode {
    STEADY = 0,     // 保持当前状态
    SUSTAIN = 1,    // 峰值保持 30% 时长
    HEARTBEAT = 2   // 心跳式双闪
}

@ccclass('DynamicFlickerEffect')
@executeInEditMode
export class flog extends Component {
    // ---------- 浮动动画参数 ----------
    @property({ tooltip: "浮动高度" })
    floatHeight: number = 35;

   
    floatDuration: number = 3;

    // ---------- 闪烁效果参数 ----------
    @property(Material)
    public sharedMaterial: Material | null = null;

  
    public flashMode: FlashMode = FlashMode.SUSTAIN;

  
    public totalDuration: number = 3.0;

 @property(Number)
    public maxEmissionPower: number = 0.3;

    // ---------- 内部状态 ----------
     materialInstance: Material[]=[]
    private _timeAccumulator: number = 0;
    private _originalPos: Vec3 = new Vec3();

    onLoad() {
        Vec3.copy(this._originalPos, this.node.position); // 确保在节点加载后捕获位置
    }
    start() {
        // 初始化浮动动画

        setTimeout(()=>{this.setMaterialToSprite("m")
        this.initFloating();},300)
       

    
    }

    update(deltaTime: number) {
      //  console.log(this.materialInstance)
        
        if (this.materialInstance.length==0){return;}

        this._timeAccumulator += deltaTime;
        this._timeAccumulator %= this.totalDuration;
        const t = this._timeAccumulator / this.totalDuration;

        let emissionPower = 0.0;
        switch (this.flashMode) {
            case FlashMode.STEADY:
                emissionPower = this.maxEmissionPower;
                break;
            case FlashMode.SUSTAIN:
                emissionPower = this.calculateSustain(t);
                break;
            case FlashMode.HEARTBEAT:
                emissionPower = this.calculateHeartbeat(t);
                break;
        }

        // 更新材质属性
       // console.log(emissionPower)
     
        for (let c of this.materialInstance) {
            if (!c || c instanceof Material === false) { // 检查有效性
                console.error("无效的材质实例:", c);
                continue;
            }
            //c.setProperty("emissionPower",emissionPower);
            const pass = c.passes[0]; // 获取指定 Pass
            pass.setUniform(pass.getHandle("emissionPower"), emissionPower); // 直接操作 Pass 的 Uniform
        }
     
    }
   
    

    // ---------- 浮动动画 ----------
    private initFloating() {
     
     if (this.floatHeight!=0) {
        
    
     
     
        Vec3.copy(this._originalPos, this.node.position);

  this.ak() ;   } 
    }
    ak(){
        tween(this.node)
        .to(this.floatDuration / 2, 
            { position: new Vec3(this._originalPos.x, this._originalPos.y + this.floatHeight, this._originalPos.z) }, 
            { easing: 'cubicOut' }
        )
        .to(this.floatDuration / 2, 
            { position: new Vec3(this._originalPos.x, this._originalPos.y , this._originalPos.z) }, 
            { easing: 'cubicIn' }
        )
        .call(() => {
           this.ak()
           },this.floatDuration)
        .start()
    }
    // ---------- 闪烁效果计算（保持原有逻辑） ----------
    private calculateSteady(t: number): number {
        return this.maxEmissionPower;
    }

    private calculateSustain(t: number): number {
        const riseTime = 0.45;
        const sustainTime = 0.1;
        const fallTime = 0.45;

        if (t < riseTime) {
            return this.maxEmissionPower * (t / riseTime);
        } else if (t < riseTime + sustainTime) {
            return this.maxEmissionPower;
        } else {
            return this.maxEmissionPower * (1 - (t - riseTime - sustainTime) / fallTime);
        }
    }

    private calculateHeartbeat(t: number): number {
        const firstPeakTime = 0.3;
        const secondPeakTime = 0.7;
        const decayRate = 0.5;

        const firstPeak = Math.exp(-10 * Math.pow(t - firstPeakTime, 2));
        const secondPeak = Math.exp(-10 * Math.pow(t - secondPeakTime, 2));
        
        return this.maxEmissionPower * (firstPeak + decayRate * secondPeak);
    }





setMaterialToSprite( materialName: string) {
        // 查找目标精灵节点
        const targetSpriteNode = this.node
        if (!targetSpriteNode) {
        //    console.error(`未找到名称为 的节点`);
            return;
        }
      
        // 获取目标精灵组件
        const targetSprite =this.node.getComponent(Sprite);
        if (!targetSprite) {
      //      console.error(`节点 " 上未找到 Sprite 组件`);
            return;
        }
      
        // 加载材质资源

        let material
        
        if (find("Canvas/DituManager/New Node/AnimalManager")) {
            material=find("Canvas/DituManager/New Node/AnimalManager").getComponent(AnimalManager).NB
        }else{material=this.node.getComponent(Sprite).customMaterial}
        
  
    
  
            // 设置材质
if (material) {
    

          

            const newMaterial = new Material();
            newMaterial.initialize({ effectName: material.effectName }); // 显式初始化
            newMaterial.copy(material); // 复制属性
            targetSprite.customMaterial = newMaterial;
         
         
      
               this.materialInstance.push(targetSprite.customMaterial)
            
           
        //    console.log(`成功将材质 "${materialName}" 设置到节点 "" 的 Sprite 组件上`);


          //  material.setProperty('contrast', this.contrast);
        
           // material.setProperty('brightness', 1);
      
        }
      }






}

