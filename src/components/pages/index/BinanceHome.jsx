import React from 'react';
import { Layout, } from 'antd';
import  './binance-home-style.scss'
import HeaderIndex from '../../common/header/Header';
import IntroTitle from '../../common/carolsel/IntroTitle';
import ListSale from '../../common/sale/ListSale';
import MarketTable from '../../common/market_trading/MaketTable';
import AppTrading from '../../common/market_trading/AppTrading';
import FooterIndex from '../../common/footer/Footer';
import Support from '../../common/support/Support';
import InforContact from '../../common/support/InforContact';
import ToRegister from '../../common/market_trading/ToRegister';


const { Content } = Layout;

function BinanceHome(props) {
    return (
      <Layout>
        <HeaderIndex/>
        <Content className="site-layout" style={{ padding: '0 0', marginTop: 1 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <IntroTitle/>
            <ListSale/>
            <MarketTable/>
            <AppTrading/>
            <Support/>
            <ToRegister/>
            <InforContact/>
          </div>
        </Content>
        <FooterIndex/>
  </Layout>
    );
}

export default BinanceHome;