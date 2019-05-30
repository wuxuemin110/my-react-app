import * as home from './action-types'

//保存表单数据
export const saveFormData = (value,dataType)=>{
    return {
        type:home.SAVEFORMDATA,
        value,
        dataType
    }
}