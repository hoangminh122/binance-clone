import React from 'react';
import { Card,List} from 'antd';

import { Typography } from 'antd';
import '../carolsel/intro-title.scss'

const { Meta } = Card;

const { Title } = Typography;

function Support(props) {
    const data = [
        {
          title: 'Title 1',
        },
        {
          title: 'Title 2',
        },
        {
          title: 'Title 3',
        },
        {
          title: 'Title 4',
        },
      ];

    return (
        <>
            <div className="site-card-border-less-wrapper" >
                <div>
                    <Title level={2} style={{textAlign:'start'}}>Get in touch. Stay in touch.</Title>
                    <List 
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" style={{maxHeight:'150px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="24 / 7 Support" description="Got a problem? Just get in touch. Our support team is available 24/7." />
                            </Card>
                        </List.Item>
                        )}
                    />
                </div>
            </div>
        </>
    );
}

export default Support;