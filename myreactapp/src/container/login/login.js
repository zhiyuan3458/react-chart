import React from 'react';
import {List, Button, WingBlank, InputItem, WhiteSpace} from 'antd-mobile';
import Logo from 'src/components/logo/logo';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    register() {
        this.props.history.push('/register');
    }

    render() {
        return (
            <div>
                <Logo />
                <List>
                    <WingBlank>
                        <InputItem>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
                    </WingBlank>
                </List>
                <WhiteSpace/>
                <Button type="primary">登录</Button>
                <WhiteSpace/>
                <Button type="default" onClick={() => {this.register()}}>注册</Button>
            </div>
        );
    }
}

export default Login;