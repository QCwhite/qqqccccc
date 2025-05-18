declare var io : {
    on(arg0: string, arg1: (socket: any) => void): unknown;
    of(arg0: string): any;
    emit(arg0: string, nickname: any): unknown;
    connect(url: string,pz:any): Socket;
};
interface Socket {
    on(event: string, callback: (data: any) => void );
    emit(event: string, data: any);
}