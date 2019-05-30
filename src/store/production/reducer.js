import * as pro from './action-type'

let defaultState={
    dataList:[]
}

export const proData=(state=defaultState,action)=>{
    switch (action.type){
        case pro.GETPRODUCTION:
            return {...state,...action};
        case pro.TOGGLEPRODUCTION:
            state.dataList.map((item,index)=>{
                if(action.index === index){
                    item.selectStatus = !item.selectStatus;
                }
                return item
            })
            return {...state};
        case pro.EDITPRODUCTION:
            state.dataList.map((item,index)=>{
                if(action.index === index){
                    item.selectNum = action.currentNum
                }
                return item
            })
            return {...state}
        case pro.CLEANPRODUCTION:
            state.dataList.map((item,index)=>{
                item.selectNum = 0;
                item.selectStatus = true;
                return item
            })

            return {...state}
        default:
            return state
    }
}

