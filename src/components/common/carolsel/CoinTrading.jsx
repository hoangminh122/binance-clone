import React from 'react';
import { Card,Carousel,List} from 'antd';

import './intro-title.scss'

function CoinTrading(props) {

    function onChange(a, b, c) {
        // console.log(a, b, c);
    }

    const data = [
        {
            title: 'BTC/USDT + 3.78%',
        },
        {
            title: 'BTC/USDT + 3.78%',
        },
        {
            title: 'BTC/USDT + 3.78%',
        },
        {
            title: 'BTC/USDT + 3.78%',
        },
        {
            title: 'BTC/USDT + 3.78%',
        },
      ];

    return (
        <Carousel afterChange={onChange} >
            <div>
                <List style={contentStyle}
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.title} style={{border:'none',background:'#FAFAFB'}} >
                            <p>306.3</p>
                            <p>$2.56</p>
                        </Card>
                    </List.Item>
                    )}
                />
            </div>
            <div>
                <List style={contentStyle}
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.title} style={{border:'none',background:'#FAFAFB'}} >
                            <p>306.3</p>
                            <p>$2.56</p>
                        </Card>
                    </List.Item>
                    )}
                />
            </div>
            <div>
                <List style={contentStyle}
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.title} style={{border:'none',background:'#FAFAFB'}} >
                            <p>306.3</p>
                            <p>$2.56</p>
                        </Card>
                    </List.Item>
                    )}
                />
            </div>
        </Carousel>
    );
}

const contentStyle = {
    height: '160px',
    color: '#FAFAFB',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#FAFAFB',
};



export default CoinTrading;