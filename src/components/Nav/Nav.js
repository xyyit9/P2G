import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb} from 'antd';
import './Nav.css';
 class Nav extends Component {
    render() {
        return (
            <div className="header-box">
            <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '40px',float:"right"}}
            >
            <Menu.Item key="1"><Link to="/register">注册</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/login">登录</Link></Menu.Item>
            <Menu.Item key="3">消息</Menu.Item>
            <Menu.Item key="4">关于我们</Menu.Item>
            <Menu.Item key="5">安全保障</Menu.Item>
            <Menu.Item key="6">商务合作</Menu.Item>
            </Menu>
            </div>
        )
    }
} 

export default Nav;