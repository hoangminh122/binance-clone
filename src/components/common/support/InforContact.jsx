import React from 'react';
import { List} from 'antd';

import { Typography } from 'antd';
import '../carolsel/intro-title.scss'

const { Title } = Typography;

function InforContact(props) {
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
        {
          title: 'Title 4',
        },
      ];

    return (
        <>
            <div className="site-card-border-less-wrapper" >
                    <List style={{width:'75%'}}
                        grid={{ gutter: 16, column: 5 }}
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                          <div  style={{ width: 240 }}>
                            <Title level={3} style={{textAlign:'start'}}>About</Title>
                            <Title level={5} style={{textAlign:'start',color:'#707A8A',fontSize:'14'}}>Careers</Title>
                            <Title level={5} style={{textAlign:'start',color:'#707A8A',fontSize:'14'}}>Business Conatcts</Title>
                            <Title level={5} style={{textAlign:'start',color:'#707A8A',fontSize:'14'}}>Community</Title>
                            <Title level={5} style={{textAlign:'start',color:'#707A8A',fontSize:'14'}}>Terms</Title>
                            <Title level={5} style={{textAlign:'start',color:'#707A8A',fontSize:'14'}}>Privacy</Title>
                            <Title level={5} style={{textAlign:'start',color:'#707A8A',fontSize:'14'}}>News</Title>
                          </div>
                            
                        </List.Item>
                        )}
                    />
            </div>
        </>
    );
}

export default InforContact;