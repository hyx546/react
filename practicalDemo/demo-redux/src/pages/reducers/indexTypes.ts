export interface numberActionType {
    type: numberActionEnum;
}

export enum numberActionEnum {
    ADD = 'ADD',
    DEL = 'DEL'
}


export interface InfoReducerActionType {
    type: InfoReducerActionEnum;
    payLoad: {
        name: string;
        mes: string;
    };
}

export enum InfoReducerActionEnum {
    SET = 'SET'
}