import React from 'react';
import { Layout, Row,Col } from 'antd';
import MenuNavLeft from './MenuNavLeft';
import MenuNavRight from './MenuNavRight';

const { Header} = Layout;

function HeaderIndex(props) {
    return (
        <div className="header">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%',background:"#FFFFFF" }}>
            <Row >
                <Col span={3}>
                    <img style={{width:'100px',height:'50px'}}
                    alt="logo"
                    src={require('../../../assets/images/logo1.png').default}
                    />
                </Col>
                <Col span={14}>
                    <MenuNavLeft/>
                </Col>
                <Col span={7} >
                    <MenuNavRight/>
                </Col>
            </Row>
                
               
            </Header>
        </div>
       
    );
}

export default HeaderIndex;