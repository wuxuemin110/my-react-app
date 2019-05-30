import React,{Component} from 'react';
export default class lance extends Component{
    render(){
        return(
            <div>{this.props.match.type}</div>
        )
    }
}