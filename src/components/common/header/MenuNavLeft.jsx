import React from 'react';
import { Menu,List,Avatar, Row,Col} from 'antd';
import { MenuOutlined, CaretDownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function MenuNavLeft(props) {
    return (
        <Menu mode="horizontal">
        <SubMenu key="menu" icon={<MenuOutlined />} style={{color:"#1E2329",fontSize:'14px'}} >
          <Menu.Item key="menu:1" style={{minHeight:'60px' }}>
          <Row>
            <Col span={8}>
              <Menu.Item key="menu-left:1" style={{minHeight:'60px' }}>
                <List.Item style={{minWidth:'300px',}}>
                  <List.Item.Meta
                    avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                    title={<span>Binance Earn</span>}
                    description="One-stop Investment Solution"
                  />
                </List.Item>
              </Menu.Item>
              
            </Col>
            
            <Col span={8}>
              <Menu.Item key="menu-center:1" style={{minHeight:'60px' }}>
                <List.Item style={{minWidth:'300px',}}>
                  <List.Item.Meta
                    avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                    title={<span>Binance Earn</span>}
                    description="One-stop Investment Solution"
                  />
                </List.Item>
              </Menu.Item>
              
            </Col>
            <Col span={8}>
              <Menu.Item key="menu-right:1" style={{minHeight:'60px' }}>
                <List.Item style={{minWidth:'300px',}}>
                  <List.Item.Meta
                    avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                    title={<span>Binance Earn</span>}
                    description="One-stop Investment Solution"
                  />
                </List.Item>
              </Menu.Item>
              
            </Col>
          
          </Row>
          </Menu.Item>
          <Menu.Item key="menu:2" style={{minHeight:'60px' }}>
          <Row>
            <Col span={8}>
              <Menu.Item key="menu-left:1" style={{minHeight:'60px' }}>
                <List.Item style={{minWidth:'300px',}}>
                  <List.Item.Meta
                    avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                    title={<span>Binance Earn</span>}
                    description="One-stop Investment Solution"
                  />
                </List.Item>
              </Menu.Item>
              
            </Col>
            
            <Col span={8}>
              <Menu.Item key="menu-center:1" style={{minHeight:'60px' }}>
                <List.Item style={{minWidth:'300px',}}>
                  <List.Item.Meta
                    avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                    title={<span>Binance Earn</span>}
                    description="One-stop Investment Solution"
                  />
                </List.Item>
              </Menu.Item>
              
            </Col>
            <Col span={8}>
              <Menu.Item key="menu-right:1" style={{minHeight:'60px' }}>
                <List.Item style={{minWidth:'300px',}}>
                  <List.Item.Meta
                    avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                    title={<span>Binance Earn</span>}
                    description="One-stop Investment Solution"
                  />
                </List.Item>
              </Menu.Item>
              
            </Col>
          
          </Row>
          </Menu.Item>
          <Menu.Item key="menu:3" style={{minHeight:'60px' }}>
          <Row>
            <Col span={8}>
              <Menu.Item key="menu-left:1" style={{minHeight:'60px' }}>
                <List.Item style={{minWidth:'300px',}}>
                  <List.Item.Meta
                    avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                    title={<span>Binance Earn</span>}
                    description="One-stop Investment Solution"
                  />
                </List.Item>
              </Menu.Item>
              
            </Col>
            
            <Col span={8}>
              <Menu.Item key="menu-center:1" style={{minHeight:'60px' }}>
                <List.Item style={{minWidth:'300px',}}>
                  <List.Item.Meta
                    avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                    title={<span>Binance Earn</span>}
                    description="One-stop Investment Solution"
                  />
                </List.Item>
              </Menu.Item>
              
            </Col>
            <Col span={8}>
              <Menu.Item key="menu-right:1" style={{minHeight:'60px' }}>
                <List.Item style={{minWidth:'300px',}}>
                  <List.Item.Meta
                    avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                    title={<span>Binance Earn</span>}
                    description="One-stop Investment Solution"
                  />
                </List.Item>
              </Menu.Item>
              
            </Col>
          
          </Row>
          </Menu.Item>
        </SubMenu>
        
        <SubMenu key="crypto" icon={<CaretDownOutlined />} title="Buy Crypto" style={{color:"#1E2329",fontSize:'14px'}}>
          <Menu.Item key="crypto:1" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
          <Menu.Item key="crypto:2" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
          <Menu.Item key="crypto:3" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="market" >
          Markets
        </Menu.Item>
        <SubMenu key="trade" icon={<CaretDownOutlined />} title="Trade" style={{color:"#1E2329",fontSize:'14px'}}>
        <Menu.Item key="trade:1" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
          <Menu.Item key="trade:2" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
          <Menu.Item key="trade:3" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="derivatives" icon={<CaretDownOutlined />} title="Derivatives" style={{color:"#1E2329",fontSize:'14px'}}>
        <Menu.Item key="derivatives:1" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
          <Menu.Item key="derivatives:2" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
          <Menu.Item key="derivatives:3" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="finance" icon={<CaretDownOutlined />} title="Finance" style={{color:"#1E2329",fontSize:'14px'}}>
         
          <Menu.Item key="finance:1" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
          <Menu.Item key="finance:2" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
          <Menu.Item key="finance:3" style={{minHeight:'60px' }}>
            <List.Item style={{minWidth:'500px',}}>
              <List.Item.Meta
                avatar={<Avatar src={require("../../../assets/images/logo1.png").default} />}
                title={<span>Binance Earn</span>}
                description="One-stop Investment Solution"
              />
            </List.Item>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="nft" style={{color:"#1E2329",fontSize:'14px'}} >
          NFT
        </Menu.Item>
      
      </Menu>
    );
}

export default MenuNavLeft;