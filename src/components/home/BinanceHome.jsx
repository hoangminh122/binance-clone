import React from 'react';
import { Layout, } from 'antd';
import  './binance-home-style.scss'
import HeaderIndex from '../common/header/Header';
import IntroTitle from '../common/carolsel/IntroTitle';


const { Content, Footer } = Layout;

function BinanceHome(props) {
    return (
      <Layout>
        <HeaderIndex/>
        <Content className="site-layout" style={{ padding: '0 0', marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <IntroTitle/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    );
}

export default BinanceHome;