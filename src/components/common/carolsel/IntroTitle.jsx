import React from 'react';
import { Card,Button} from 'antd';

import './intro-title.scss'
import CoinTrading from './CoinTrading';

function IntroTitle(props) {
    return (
        <>
        <div className="site-card-border-less-wrapper">
            <Card title={<span style={{fontSize: '50px'}}>Buy & sell Crypto in minutes</span>} bordered={false} style={{ width: "75%",background: '#FAFAFB',textAlign:'start'}}>
            <p>Join the world's largest crypto exchange</p>
            <Button type="primary" style={{background:'#FCD535',color:'black',border:'none'}}>Register Now</Button>
            </Card>
            {/* coin */}
           
        </div>
        <div className="site-card-border-less-wrapper" >
            <div style={{width:'75%'}}>
                <CoinTrading />
            </div>
        </div>
        </>
    );
}

export default IntroTitle;