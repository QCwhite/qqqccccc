import { tween } from 'cc';
import { _decorator, Component, Node, AudioClip, AudioSource, resources, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioManager')
export class AudioManager extends Component {
    // 单例实例
    private static _instance: AudioManager | null = null;
    
    // 音频资源声明
     public Byp: AudioClip[] = [];
     public Nyp: AudioClip[] = [];
    public Ayp: AudioClip[] = [];
  public Bhyp: AudioClip[] = [];
  public Myp: AudioClip[] = [];
    public Uiyp: AudioClip[] = [];
   public Qtyp: AudioClip[] = [];

    // 音频实例管理
    private audioSources: Map<string, AudioSource> = new Map();
    private isInitialized = false;
    private loadingPromise: Promise<void> | null = null;

    // 单例访问器
    public static get instance(): AudioManager {
        if (!AudioManager._instance) {
            const audioManagerNode = new Node('AudioManager');
            director.addPersistRootNode(audioManagerNode);
            AudioManager._instance = audioManagerNode.addComponent(AudioManager);
        }
        return AudioManager._instance!;
    }

    // 初始化方法
    public async initialize(): Promise<void> {
        if (this.isInitialized) return;

        this.loadingPromise = this.loadAudioResources();
        await this.loadingPromise;
        this.isInitialized = true;
    }

    // 资源加载方法
    private async loadAudioResources(): Promise<void> {
   //  console.log(this. Bhyp)
     
        const loadTasks = [
            this.loadAudioSet('audio/bgm', 'Byp'),
            this.loadAudioSet('audio/nature', 'Nyp'),
            this.loadAudioSet('audio/attack', 'Ayp'),
            this.loadAudioSet('audio/hit', 'Bhyp'),
            this.loadAudioSet('audio/magic', 'Myp'),
            this.loadAudioSet('audio/ui', 'Uiyp'),
            this.loadAudioSet('audio/other', 'Qtyp')
        ];

        try {
            await Promise.all(loadTasks);
       //     console.log('所有音频资源加载完成', {
         //       Byp: this.Byp.length,
          //      Nyp: this.Nyp.length,
          //      Ayp: this.Ayp.length,
           //     Bhyp: this.Bhyp.length,
            //    Myp: this.Myp.length,
             //   Uiyp: this.Uiyp.length,
             //   Qtyp: this.Qtyp.length
       //     });
        } catch (error) {
            console.error('音频资源加载失败:', error);
            throw error;
        }
    }

    // 加载单个音频集合
  private async loadAudioSet(folderPath: string, arrayName: keyof AudioManager): Promise<void> {
    return new Promise((resolve, reject) => {
        resources.loadDir(folderPath, AudioClip, (err, clips) => {
            if (err) {
              //  console.error(`[AudioManager] 加载失败: ${folderPath}`, err);
                reject(err);
                return;
            }

            // 创建不可变副本（关键修复）
            const sortedClips = [...clips]; // 浅拷贝

            sortedClips.sort((a, b) => {
                const getNumber = (str: string) => {
                    const match = str.match(/\d+/);
                    return match ? parseInt(match[0]) : -1;
                };
                return getNumber(a.name) - getNumber(b.name) || a.name.localeCompare(b.name);
            });

            // 使用类型安全的方式赋值
            (this as any)[arrayName] = sortedClips as AudioClip[];
            resolve();
        });
    });
}

    // 安全播放方法
    public async ZJP(
        type: 'bgm' | 'nature' | 'attack' | 'hit' | 'magic' | 'ui' | 'other',
        index: number,
        options: {
            loop?: boolean;
            volume?: number;
            fadeIn?: number;
            priority?: number;
        } = {}
    ): Promise<void> {
        if (!this.isInitialized) {
            await this.initialize();
        }

        const typeMap = {
            bgm: 'Byp',
            nature: 'Nyp',
            attack: 'Ayp',
            hit: 'Bhyp',
            magic: 'Myp',
            ui: 'Uiyp',
            other: 'Qtyp'
        };

        const arrayName = typeMap[type];
        const targetArray = this[arrayName as keyof AudioManager] as AudioClip[];

        if (!targetArray || targetArray.length === 0) {
           // console.error(`[AudioManager] 无效的音频类型或未加载: ${type}`);
            return;
        }

        if (index < 0 || index >= targetArray.length) {
         //   console.error(`[AudioManager] 无效索引: ${index} (${type} 共 ${targetArray.length} 个)`);
            return;
        }

        const clip = targetArray[index];
        if (!clip || !clip.loaded) {
           // console.error(`[AudioManager] 音频未加载: ${type}[${index}]`);
            return;
        }

        this.playAudio(clip, options);
       // console.log("bole")
    }

    // 核心播放逻辑
    private playAudio(
        clip: AudioClip,
        options: {
            loop?: boolean;
            volume?: number;
            fadeIn?: number;
        } = {}
    ): void {
        try {
            const audioSource = this.getOrCreateAudioSource(clip);
            
            audioSource.clip = clip;
            audioSource.loop = options.loop || false;
            
            if (options.fadeIn) {
                audioSource.volume = 0;
                tween(audioSource)
                    .to(options.fadeIn, { volume: options.volume ?? 1 })
                    .start();
            } else {
                audioSource.volume = options.volume ?? 1;
            }

            if (!audioSource.playing) {
                audioSource.play();
            }
        } catch (error) {
           // console.error('[AudioManager] 播放失败:', error);
        }
    }

    // 获取音频源
    private getOrCreateAudioSource(clip: AudioClip): AudioSource {
        const existingSource = this.audioSources.get(clip.name);
        if (existingSource) return existingSource;

        const audioNode = new Node(`AudioSource_${clip.name}`);
        audioNode.parent = this.node;
        const newSource = audioNode.addComponent(AudioSource);
        this.audioSources.set(clip.name, newSource);
        return newSource;
    }

    // 停止所有音频
    public stopAll(fadeOut: number = 0): void {
        this.audioSources.forEach(source => {
            if (fadeOut > 0) {
                tween(source)
                    .to(fadeOut, { volume: 0 })
                    .call(() => source.stop())
                    .start();
            } else {
                source.stop();
            }
        });
    }

    // 预加载检查
    public isLoaded(type: string, index: number): boolean {
        const targetArray = this[`${type}yp` as keyof AudioManager] as AudioClip[];
        return !!targetArray?.[index]?.loaded;
    }
}
