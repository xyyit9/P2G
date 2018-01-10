import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb} from 'antd';
import { Carousel,Icon} from 'antd';
import { Button } from 'antd';
import { BackTop } from 'antd';
import Nav from 'components/Nav/Nav';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/bank.jpg';
import image6 from './images/company.jpg';
import image7 from './images/color.jpg';
import image8 from './images/block.jpg';
import image9 from './images/logoPic.png';
import {Table} from 'antd';
import './MainPage.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;

class MainPage extends Component{
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render(){
    return(
      <Layout className="mainLeaf">
      <Nav/>
      <Content style={{ padding: '10 50px'}}>
      <div className="contentBox">
      <div className="test-box"> <img  src={image9}/></div>
      <div>
      <Menu className="menu"
      onClick={this.handleClick}
      selectedKeys={[this.state.current]}
      mode="horizontal"
      >
      <Menu.Item key="mail">
      <Icon type="mail" />首页
      </Menu.Item>
      <Menu.Item key="app">
      <Icon type="appstore" />理财频道
      </Menu.Item>
      <Menu.Item key="mail">
      <Icon type="mail" />转让专区
      </Menu.Item>
      <Menu.Item key="mail">
      <Icon type="mail" />我的账户
      </Menu.Item>
      </Menu>
      </div>
      </div>
      <Carousel autoplay>
      <div><img src={image1}/></div>
      <div><img src={image2}/></div>
      <div><img src={image3}/></div>
      <div><img src={image4}/></div>
      </Carousel>
      <Layout style={{height: '120px',background:'#FFFFFF'}}>
      <div className="homepageBank" >
      <div>
      <img  src={image5}/>
      <div className="intro" style={{height:"120px",float:"right",width:"70%"}}>
      <span>上市公司背景</span>
      <span>银江股份(300020)旗下</span>
      <span>产业基金3000万A轮融资</span>
      </div>
      </div>
      <div>
      <img src={image6}/>
      <div className="intro" style={{height:"120px",float:"right",width:"70%"}}>
      <span>银行存管</span>
      <span>银江股份(300020)旗下</span>
      <span>产业基金3000万A轮融资</span>
      </div>
      </div>
      <div>
      <img  src={image7}/>
      <div className="intro" style={{height:"120px",float:"right",width:"70%"}}>
      <span>资产透明</span>
      <span>银江股份(300020)旗下</span>
      <span>产业基金3000万A轮融资</span>
      </div>
      </div>
      <div>
      <img src={image8}/>
      <div className="intro" style={{height:"120px",float:"right",width:"70%"}}>
      <span>区块链保全</span>
      <span>银江股份(300020)旗下</span>
      <span>产业基金3000万A轮融资</span>
      </div>
      </div>
      </div>

      </Layout>
      
      <div className="test">
      <div className="testHead">
      理财产品
      <a href="#" className="moreProduct">更多理财产品>></a>
      </div>

      <div className="products-box">
      <div className="product-box">
      <div className="name-box">普定城投-006     贵州安顺</div>
      <div className="info-box">
      <div className="info">
        <div className="upInfo">8.5<span className="up-percent">%</span></div>
        <div className="downInfo">预期年化收益率</div>
      </div>
       <div className="info">
        <div className="upInfo">24 <span className="up-percent">个月</span></div>
        <div className="downInfo">产品期限</div>
      </div>
       <div className="info">
        <div className="upInfo">100 <span className="up-percent">万元</span></div>
        <div className="downInfo">起投金额</div>
      </div>     
       <div className="info">
        <div className="upInfo"><Button type="primary">立即投资</Button></div>
        <div className="lastInfo">即时计息，每半年收益，到期回本</div>
      </div>      
      </div>                        
      </div>
      </div>


 <div className="products-box">
      <div className="product-box">
      <div className="name-box">普定城投-006     贵州安顺</div>
      <div className="info-box">
      <div className="info">
        <div className="upInfo">8.5<span className="up-percent">%</span></div>
        <div className="downInfo">预期年化收益率</div>
      </div>
       <div className="info">
        <div className="upInfo">24 <span className="up-percent">个月</span></div>
        <div className="downInfo">产品期限</div>
      </div>
       <div className="info">
        <div className="upInfo">100 <span className="up-percent">万元</span></div>
        <div className="downInfo">起投金额</div>
      </div>     
       <div className="info">
        <div className="upInfo"><Button type="primary">立即投资</Button></div>
        <div className="lastInfo">即时计息，每半年收益，到期回本</div>
      </div>      
      </div>                        
      </div>
      </div>


<div className="products-box">
      <div className="product-box">
      <div className="name-box">普定城投-006     贵州安顺</div>
      <div className="info-box">
      <div className="info">
        <div className="upInfo">8.5<span className="up-percent">%</span></div>
        <div className="downInfo">预期年化收益率</div>
      </div>
       <div className="info">
        <div className="upInfo">24 <span className="up-percent">个月</span></div>
        <div className="downInfo">产品期限</div>
      </div>
       <div className="info">
        <div className="upInfo">100 <span className="up-percent">万元</span></div>
        <div className="downInfo">起投金额</div>
      </div>     
       <div className="info">
        <div className="upInfo"><Button type="primary">立即投资</Button></div>
        <div className="lastInfo">即时计息，每半年收益，到期回本</div>
      </div>      
      </div>                        
      </div>
      </div>


      <div className="products-box">
      <div className="product-box">
      <div className="name-box">普定城投-006     贵州安顺</div>
      <div className="info-box">
      <div className="info">
        <div className="upInfo">8.5<span className="up-percent">%</span></div>
        <div className="downInfo">预期年化收益率</div>
      </div>
       <div className="info">
        <div className="upInfo">24 <span className="up-percent">个月</span></div>
        <div className="downInfo">产品期限</div>
      </div>
       <div className="info">
        <div className="upInfo">100 <span className="up-percent">万元</span></div>
        <div className="downInfo">起投金额</div>
      </div>     
       <div className="info">
        <div className="upInfo"><Button type="primary">立即投资</Button></div>
        <div className="lastInfo">即时计息，每半年收益，到期回本</div>
      </div>      
      </div>                        
      </div>
      </div>


      <div className="products-box">
      <div className="product-box">
      <div className="name-box">普定城投-006     贵州安顺</div>
      <div className="info-box">
      <div className="info">
        <div className="upInfo">8.5<span className="up-percent">%</span></div>
        <div className="downInfo">预期年化收益率</div>
      </div>
       <div className="info">
        <div className="upInfo">24 <span className="up-percent">个月</span></div>
        <div className="downInfo">产品期限</div>
      </div>
       <div className="info">
        <div className="upInfo">100 <span className="up-percent">万元</span></div>
        <div className="downInfo">起投金额</div>
      </div>     
       <div className="info">
        <div className="upInfo"><Button type="primary">立即投资</Button></div>
        <div className="lastInfo">即时计息，每半年收益，到期回本</div>
      </div>      
      </div>                        
      </div>
      </div>


      </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
      </Footer>
      <div>
      <BackTop />
      Scroll down to see the bottom-right
      <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
      button.
      </div>
      </Layout>
      )
    }
  }
  export default MainPage;