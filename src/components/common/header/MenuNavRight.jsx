import React from 'react';
import { Menu,Button} from 'antd';

function MenuNavRight(props) {
    return (
        <Menu mode="horizontal" style={{textDecoration:'none'}}>
            <Menu.Item key="Login" >
                <Button type="text" >
                    <span >Log In </span>
                </Button>
            </Menu.Item>
            <Menu.Item key="Register" >
                <Button type="text">Register</Button>
            </Menu.Item>
            <Menu.Item key="Download" >
                <Button type="text">Downloads</Button>
            </Menu.Item>
            <Menu.Item key="Language" >
                <Button type="text">English|USD</Button>
            </Menu.Item>
            
        </Menu>
    );
}

export default MenuNavRight;