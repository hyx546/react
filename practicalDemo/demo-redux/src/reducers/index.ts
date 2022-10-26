import { numberActionType,numberActionEnum, InfoReducerActionType, InfoReducerActionEnum } from './indexTypes';

export function numberReducer(state =1 ,action:numberActionType) {
    switch (action.type) {
        case numberActionEnum.ADD:
            return state+1;
        case numberActionEnum.DEL:
            return state-1;
        default:
            return state;
    }
}


export function InfoReducer(state = {}, action:InfoReducerActionType) {
    const {payLoad = {}} = action;
    switch (action.type) {
        case InfoReducerActionEnum.SET:
            return {
                ...state,
                ...payLoad
            }
        default:
            return state
    }
}


