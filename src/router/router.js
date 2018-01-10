import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import Test from 'bundle-loader?lazy&name=test!pages/Test/Test';
import MainPage from 'bundle-loader?lazy&name=mainpage!pages/MainPage/MainPage';
import Login from 'bundle-loader?lazy&name=login!pages/Login/Login';
import Register from 'bundle-loader?lazy&name=register!pages/Login/Register';
import ForgetPassword from 'bundle-loader?lazy&name=forgetpassword!pages/Login/ForgetPassword';
import BindBank from 'bundle-loader?lazy&name=bindbank!pages/Login/BindBank';
const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(MainPage)}/>
            <Route path="/page1" component={createComponent(Page1)}/> 
            <Route path="/counter" component={createComponent(Counter)}/>
            <Route path="/userinfo" component={createComponent(UserInfo)}/>
            <Route path="/test" component={createComponent(Test)}/>
            <Route path="/mainpage" component={createComponent(MainPage)}/>
            <Route path="/login" component={createComponent(Login)}/>
            <Route path="/register" component={createComponent(Register)}/>
            <Route path="/forgetpassword" component={createComponent(ForgetPassword)}/>
            <Route path="/bindbank" component={createComponent(BindBank)}/>
             <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
);