


export interface Iproduct{
    pName: string;
    pId: string;
    pStatus: prodstatus;
    canReturn: number
}

export enum prodstatus{
    Dispathched='dis-patch',
    InProgress='in-progress',
    Delivered='deliver'
}