import Server from './axios'

 class API extends Server{

     /*获取商品数据*/
     async getProduction(params={}){
         try {
            let result = await this.apiAxios('GET','/shopro/data/products',params)
             if(result && result.data instanceof Object){
                return result.data.data
             }
         }catch (e) {
             throw e
         }
     }

    /*上传图片*/
     async uploadImg(params={}){
         try {
             let result = await this.apiAxios('POST','//elm.cangdu.org/v1/addimg/shop',params)
             if(result){
                 return result;
             }
         }catch (e) {
             throw e;
         }
     }

     /*获取记录数据*/
     async getRedcord(type){
         try {
             let result = await this.apiAxios('GET',`/shopro/data/record/${type}`);
             if(result && result.http_code === 200){
                 return result.data;
             }
         }catch (e) {
             throw e
         }
     }

}

export default new API();