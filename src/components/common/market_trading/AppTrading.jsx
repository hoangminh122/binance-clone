import React from 'react';
import { Row,Col,Image,List,Card} from 'antd';
import { Typography } from 'antd';
import '../carolsel/intro-title.scss'

const { Title } = Typography;


function AppTrading(props) {

    const data = [
        {
            title: 'App Store',
        },
        {
            title: 'App Store',
        },
        {
            title: 'App Store',
        },
        {
            title: 'App Store',
        },
        {
            title: 'App Store',
        },
      ];


    return (
        <>
        <div className="site-card-border-less-wrapper">
            <div style={{width:'75%'}}>
                <Title level={2} style={{textAlign:'start'}}>Trade. Anywhere.</Title>
                <Title level={5} style={{textAlign:'start',color:'gray'}}>Compatible with multiple devices, start trading with safety and convenience.</Title>
                <Row >
                    <Col span={12}>
                        <Image
                            width='100%'
                            style={{padding:20}}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </Col>
                    <Col span={12}>
                        <Row >
                            <Col span={5}>
                                <img alt="trading" style={{width:'150px',height:'150px',padding:10}} src={require('../../../assets/images/trading.png').default}></img>
                                
                            </Col>
                            <Col span={10}>
                                <p>Scan to Download </p>
                                <p>iOS & Android</p>
                           </Col>
                        </Row>
                        <Row >
                            <List style={contentStyle}
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={data}
                                renderItem={item => (
                                <List.Item>
                                    <Card title={<p>{item.title}</p>} style={{background:'#FAFAFB'}} >
                                    <img alt="trading" style={{width:'50px',height:'50px'}} src={require('../../../assets/images/iphone.png').default}></img>
                                    </Card>
                                </List.Item>
                                )}
                            />
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    );
}

const contentStyle = {
    height: '160px',
    color: '#FAFAFB',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#FAFAFB',
};

export default AppTrading;