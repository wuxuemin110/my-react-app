import React, { Component } from 'react';

/*
* 点击状态组件
* */

export default class TouchableOpacity extends Component{

    handelTouchStart(){
        this.refs.btn.style.opacity = '0.3'
    }
    handelTouchEnd(){
        this.refs.btn.style.opacity = '1'
        this.props.clickCallBack()
    }


    render(){
        return(
            <div id='btn' onTouchEnd={()=>{this.handelTouchEnd()}} onTouchStart={()=>{this.handelTouchStart()}} className={`btn-con ${this.props.className}`}  ref='btn'>{this.props.title}</div>
        )
    }
}