import * as pro from './action-type';
import api from '../../api/api'

//初始化获取商品数据，保存至redux
export const getProData=()=>{
    //返回函数，异步dispatch
    return async dispatch =>{
        try {
           let result = await api.getProduction()
            result.map(item=>{
                item.selectStatus = true;
                item.selectNum = 0;
                return item;
            })
            dispatch({
                type: pro.GETPRODUCTION,
                dataList: result,
            })
        }catch (e) {
            throw e;
        }
    }
}

//选择商品
export const togglePro=(index)=>{
    return{
        type:pro.TOGGLEPRODUCTION,
        index
    }
}

//编辑商品
export const editPro=(index,currentNum)=>{
    return{
        type:pro.EDITPRODUCTION,
        index,
        currentNum
    }
}

//清空商品数据
export const cleanPro=()=>{
    return{
        type:pro.CLEANPRODUCTION
    }
}