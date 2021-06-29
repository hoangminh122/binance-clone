import React from 'react';
import { Card,Button} from 'antd';

import '../carolsel/intro-title.scss'

function ToRegister(props) {
    
    return (
        <>
            <div className="site-card-border-less-wrapper"  style={{background:'#fff'}}>
                <Card title={<h1>Start trading now</h1>} bordered={false}>
                    <Button type="primary" style={{background:'#FCD535',margin:10,border:'none'}} >
                        Register Now
                    </Button>
                    <Button style={{margin:10}}>
                        Trade Now
                    </Button>
                </Card>
            </div>
        </>
    );
}

export default ToRegister;