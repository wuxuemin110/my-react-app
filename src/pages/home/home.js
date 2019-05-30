import React,{Component} from 'react';
 import {Link} from 'react-router-dom'
import TouchableOpacity from '../../components/TouchableOpacity/TouchableOpacity'
import Alert from '../../components/Alert/Alert'
import Header from '../../components/Header/Header'
import {cleanPro} from '../../store/production/action'
import {saveFormData} from '../../store/home/action'
import {connect} from 'react-redux'
import api from '../../api/api'
import {imgUrl} from '../../api/config'
 class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            selectedProList:[],
            alertStatus:false,
            alertTip:''
        }
    }

    //初始化数据，选择已选中的数据
    initData(){
        let selectedProList;
        selectedProList=this.props.proData.dataList.filter(item=>{
          return item.selectNum >0 && item.selectStatus
        })
        this.setState({
              selectedProList:selectedProList
          })
    }

    uploadImg = async event=>{
        try {
            let formData = new FormData();
            formData.append('file',event.target.files[0])
            let result = await api.uploadImg(formData)
            if(result.status === 1){
                this.props.saveFormData(imgUrl+result.image_path,'imgPath')
            }
        }catch (err) {
            throw err;
        }
    }

    componentDidMount(){
        this.initData();
    }
    submit(){
        const {orderSum, name , phoneNo} = this.props.formData;
        let alertTip=''
        if(orderSum === ''){
            alertTip='订单不能为空'
        }else if(name === ''){
            alertTip='姓名不能为空'
        }else if(phoneNo ===''){
            alertTip='电话不能为空'
        }else {
            alertTip='数据添加成功'
        }
        this.setState({
            alertStatus:true,
            alertTip:alertTip
        })
    }

    handleInput(event,type){
        let value = event.target.value;
        switch (type){
            case 'orderSum':
            value=value.replace(/\D/g, '');
            break;
            case 'name':
            break;
            case 'phoneNo':
            value=value.replace(/\D/g, '');
            break;
            default:;

        }

        this.props.saveFormData(value,type)
    }

    //关闭弹窗
     closeAlert(){
        this.setState({
            alertStatus:false
        })
     }
    render(){
        return(
            <main className="home-container">
                <Header record title='首页'/>
                <p className="common-title">请录入您的信息</p>
                <form className="home-form">
                    <div className="home-form-tiem">
                        <span>销售金额：</span>
                        <input  type="text" placeholder="请输入订单金额"  onChange={(e)=>{this.handleInput(e,'orderSum')}} />
                    </div>
                    <div className="home-form-tiem">
                        <span>客户姓名：</span>
                        <input type="text" placeholder="请输入客户姓名"  onChange={(e)=>{this.handleInput(e,'name')}}/>
                    </div>
                    <div className="home-form-tiem">
                        <span>客户电话：</span>
                        <input type="text" maxLength="13" placeholder="请输入客户电话" onChange={(e)=>{this.handleInput(e,'phoneNo')}} />
                    </div>
                </form>
                <div>
                    <p className="common-title">请选择销售的产品</p>
                    <Link to='/production'  className="common-select-btn">
                        {
                            this.state.selectedProList.length > 0 ? <ul className='selected-pro-list'>
                                    {
                                        this.state.selectedProList.map((item,index)=>{
                                            return  <li key={index} className='selected-pro-item ellipsis'>{item.product_name}*{item.selectNum}</li>
                                        })
                                    }

                            </ul> : '选择商品'
                        }

                    </Link>
                </div>
                <div className="upload-img-con">
                    <p className="common-title">请上传发票凭证</p>
                    <div className="file-lable">
                        <span className="common-select-btn">上传图片</span>
                        <input onChange={this.uploadImg} type="file" />
                    </div>
                    <img src={this.props.formData.imgPath} className="select-img" alt="" />
                </div>
                <TouchableOpacity clickCallBack={()=>{this.submit()}} className='submit-btn' title='提交'/>
                <Alert closeAlert={()=>{this.closeAlert()}} title='确定' alertTip={this.state.alertTip} alertStatus={this.state.alertStatus} />
            </main>
        )
    }
}

export default connect(state=>({
    proData:state.proData,
    formData:state.formData
}),{cleanPro,saveFormData})(Home)


