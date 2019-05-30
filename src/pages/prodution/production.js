import React,{Component} from 'react';
import Header from '../../components/Header/Header'
import {getProData,togglePro,editPro,cleanPro} from "../../store/production/action";
import {connect} from 'react-redux'
class production extends Component{
    componentDidMount(){
        if(!this.props.proData.dataList.length){
            this.props.getProData()
        }
    }

    toggleSelect(index){
       this.props.togglePro(index)
    }
    handleEdit(index,num){
        let currentNum = this.props.proData.dataList[index].selectNum + num;
        if(currentNum <0){
            return
        }

        this.props.editPro(index,currentNum)
    }
    cleanAllData(){
        this.props.cleanPro()
    }
    render(){
        return(
            <div className='common-con-top'>
                <Header confirm title='产品' />
                <section className='pro-list-con'>
                    <div style={{color:'red'}} onClick={()=>{this.cleanAllData()}}>清空数据</div>
                    <ul className='pro-list-ul'>
                        {
                            this.props.proData.dataList.map((item,index)=>{
                                return  <li className='pro-item' key={index}>
                                    <div className='pro-item-select' onClick={()=>this.toggleSelect(index)}>
                                        <span className={`icon-xuanze1 pro-select-status ${item.selectStatus?'pro-selected':''}`}></span>
                                        <span className='pro-name'>{item['product_name']}</span>
                                    </div>
                                    <div className='pro-item-edit'>
                                        <span className={`icon-jian ${item.selectNum>0 ? 'edit-active':''}`} onClick={()=>{this.handleEdit(index,-1)}} ></span>
                                        <span className='pro-num'>{item['selectNum']}</span>
                                        <span className='icon-jia' onClick={()=>{this.handleEdit(index,1)}}></span>
                                    </div>
                                </li>
                            })
                        }


                    </ul>
                </section>
            </div>
        )
    }
}
export default connect(state=>({
    proData: state.proData,
}),{getProData,togglePro,editPro,cleanPro})(production)
