import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
export default class  extends Component{
    render(){
        return(
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' component={Admin}></Route>
            </Switch>
        )
    }
}