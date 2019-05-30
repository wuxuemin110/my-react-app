import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TouchableOpacity from '../TouchableOpacity/TouchableOpacity'
export default class Alert extends Component{
    close(){
        this.props.closeAlert();
    }
    render(){
        return(
            <ReactCSSTransitionGroup
                transitionName="alert"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
            >
                {
                  this.props.alertStatus &&  <div className="alert-con">
                        <div className="alert-context">
                            <div className="alert-content-detail">{this.props.alertTip}</div>
                            <TouchableOpacity clickCallBack={()=>{this.close()}}  className="confirm-btn" title='确定'/>
                        </div>
                    </div>
                }
            </ReactCSSTransitionGroup>
        )
    }
}