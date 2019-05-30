import React,{Component} from 'react';
import Header from '../../components/Header/Header'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import recordList from './components/recordList'
export default class record extends Component{
    constructor(props){
        super(props);
        this.state={
            flagBarPos:'50%',
        }
    }
    setFlagBar(type){
        let flagBarPos;
        switch (type){
            case 'passed':
                flagBarPos = '17%';
            break;
            case 'audited':
                flagBarPos = '50%';
            break;
            case 'failed':
                flagBarPos = '83%';
            break;
            default:;
        }
        this.setState({
            flagBarPos:flagBarPos
        })
    }
    componentWillReceiveProps(nextProps){
        let currenType = this.props.location.pathname.split('/')[2];
        let type = nextProps.location.pathname.split('/')[2];
        if(currenType !== type){
            this.setFlagBar(type)

        }
    }
    componentWillMount(){
        //初始化设置头部底部标签位置
        let type = this.props.location.pathname.split('/')[2];
        this.setFlagBar(type)
    }
    render(){
        return(
            <main className="common-con-top">
                <Header title='记录'/>
                <section className='record-nav-con'>
                    <nav className='record-nav'>
                        <NavLink to={`${this.props.match.path}/passed`} className='nav-link'>已通过</NavLink>
                        <NavLink to={`${this.props.match.path}/audited`} className='nav-link'>待审核</NavLink>
                        <NavLink to={`${this.props.match.path}/failed`} className='nav-link'>未通过</NavLink>
                    </nav>
                    <i className='nav-flag-bar' style={{left:this.state.flagBarPos}}></i>
                </section>
                <Switch>
                    <Route path={`${this.props.match.path}/:type`} component={recordList} />
                    <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/passed`} exact component={recordList} />
                </Switch>

            </main>
        )
    }
}