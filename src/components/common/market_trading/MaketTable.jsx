import React from 'react';
import { Table } from 'antd';
import '../carolsel/intro-title.scss'
import { Typography } from 'antd';

const { Title } = Typography;

function MarketTable(props) {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a href="!#" style={{color:'black',fontSize:20}}>{text}</a>,
        },
        {
          title: 'Last Price',
          dataIndex: 'age',
          key: 'age',
          render: text => <p style={{fontWeight:'600',fontSize:18,}}>{text}</p>,
        },
        {
          title: '24h Change',
          dataIndex: 'address',
          key: 'address',
          render: text => <p style={{fontWeight:'600',fontSize:20,color:"green"}}>{text}</p>,
        },
        {
          title: 'Markets',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              <img alt="trading" style={{width:'80px',height:'40px'}} src={require('../../../assets/images/trading.png').default}/>
            </>
          ),
        },
       
      ];
      
      const data = [
        {
          key: '1',
          name: 'BTC Bitcoin',
          age: '$304.87',
          address: '+4.03%',
          tags: ['nice', 'developer'],
        },
        {
        key: '2',
        name: 'BTC Bitcoin',
        age: '$304.87',
        address: '+4.03%',
        tags: ['nice', 'developer'],
        },
        {
        key: '3',
        name: 'BTC Bitcoin',
        age: '$304.87',
        address: '+4.03%',
        tags: ['nice', 'developer'],
        },
        
      ];

    return (
        <>
            <div className="site-card-border-less-wrapper" >
                <div style={{width:'75%'}}>
                    <Title level={2} style={{textAlign:'start'}}>Market trend</Title>
                    <Table columns={columns}  pagination={false} dataSource={data}  />
                </div>
            </div>
        </>
    );
}

export default MarketTable;