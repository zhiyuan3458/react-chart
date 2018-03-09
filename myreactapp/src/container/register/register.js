import React from 'react';
import { connect } from 'react-redux';
import {Button, WhiteSpace, WingBlank, List, InputItem, Radio} from 'antd-mobile';
import Logo from "../../components/logo/logo";
import { register } from 'src/redux/user.redux';
import './less/register.less';

@connect(
    state => state.user,
    {register}
)
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            repeatPwd: '',
            type: 'genius'
        };
        this.handleRegister = this.handleRegister.bind(this);
    }

    // 当改变input以及单选框时触发
    handleChange(key, val) {
        this.setState({
            [key]: val
        });
    }

    // 点击注册按钮
    handleRegister() {
        this.props.register(this.state);
        console.log(this.props);
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo/>
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className="err-msg">{this.props.msg}</p> : ''}
                        <WhiteSpace/>
                        <InputItem
                            onChange={val => this.handleChange('name', val)}>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password"
                            onChange={val => this.handleChange('password', val)}>密码</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password"
                            onChange={val => this.handleChange('repeatPwd', val)}>确认密码</InputItem>
                        <WhiteSpace/>
                        <RadioItem
                            checked={this.state.type === 'genius'}
                            onChange={val => this.handleChange('type', 'genius')}>牛人</RadioItem>
                        <WhiteSpace/>
                        <RadioItem
                            checked={this.state.type === 'boss'}
                            onChange={val => this.handleChange('type', 'boss')}>BOSS</RadioItem>
                    </List>
                </WingBlank>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Register;