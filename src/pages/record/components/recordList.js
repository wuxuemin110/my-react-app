import React, {Component} from 'react';
import api from '../../../api/api'

export default class recordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recordData: []
        }
    }

    /*获取记录*/
    async getRecord(type) {
        try {
            let result = await api.getRedcord(type);
            this.setState({
                recordData: result.data
            })
        } catch (e) {
            console.log(e)
        }
    }

    componentWillReceiveProps(nextProps) {
        let currentType = this.props.location.pathname.split('/')[2];
        let type = nextProps.location.pathname.split('/')[2];
        if (currentType !== type) {
            this.getRecord(type);
        }
    }

    componentWillMount() {
        let type = this.props.location.pathname.split('/')[2];
         this.getRecord(type)
    }

    render() {
        return (
            <ul className="record-list-con">
                {
                    this.state.recordData.length > 0 ? this.state.recordData.map((item, index) => {
                        return <li key={index} className="record-item">
                            <section className="record-item-header">
                                <span>创建时间：{item.created_at}</span><span>{item.type_name}</span>
                            </section>
                            <section className="record-item-content">
                                <p><span>用户名：</span>{item.customers_name} &emsp; {item.customers_phone}</p>
                                <p><span>商&emsp;品：</span>{item.product[0].product_name}</p>
                                <p><span>金&emsp;额：</span>{item.sales_money} &emsp; 佣金：{item.commission}</p>
                            </section>
                            <p className="record-item-footer">等待管理员审核，审核通过后，佣金将结算至账户</p></li>
                    }) : '无数据'
                }

            </ul>
        )
    }
}