import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Home from '../pages/home/home'
import Balance from '../pages/balance/balance'
import production from '../pages/prodution/production'
import record from '../pages/record/record'
export default class RouteConfig extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact  path='/' component={Home} />
                    <Route  path='/balance' component={Balance} />
                    <Route  path='/production' component={production}/>
                    <Route  path='/record' component={record}/>
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}