import React from 'react';
import { Card,List} from 'antd';
import '../carolsel/intro-title.scss'

const { Meta } = Card;

function ListSale(props) {

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
        <div className="site-card-border-less-wrapper" style={{background:'#fff'}}>
            <List style={{width:'75%'}}
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" style={{maxHeight:'150px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </List.Item>
                )}
            />
           
        </div>
        </>
    );
}

export default ListSale;