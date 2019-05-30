import * as home from './action-types'

let defaultState={
    orderSum:'',//金额
    name:'',//姓名
    phoneNo:'',//手机号
    imgPath:'',//图片地址
}

//首页表单数据
export const formData = (state=defaultState,action={})=>{
    switch (action.type){
        case home.SAVEFORMDATA:
            return {...state,...{[action.dataType]:action.value}}
        default:
            return state;
    }
}