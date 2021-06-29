import React from 'react';
import { Layout} from 'antd';

const { Footer} = Layout;

function FooterIndex(props) {
    return (
        <div className="footer">
            <Footer style={{ textAlign: 'center' }}>Design ©2021 Created by ADM</Footer>
        </div>
       
    );
}

export default FooterIndex;