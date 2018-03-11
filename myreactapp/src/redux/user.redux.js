import axios from 'axios';
import {ERR_OK} from "../common/js/common";

const ERR = 'ERR';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const initState = {
    name: '',
    password: '',
    repeatPwd: '',
    type: '',
    isAuth: '',
    msg: ''
};

// reducer
export function user(state= initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS: return {isAuth: true, msg: action.msg, success: true};
        case ERR: return {...state, isAuth: false, msg: action.msg,success: false};
        default: return state;
    }
}

function errMsg(msg) {
    return {msg, type: ERR};
}

function registSuccess(msg) {
    return {msg: msg,type: REGISTER_SUCCESS};
}

export function register({ name,password,repeatPwd,type }) {
    if(!name || !password) {
        return errMsg('用户名或密码不可为空！');
    }

    if(password !== repeatPwd) {
        return errMsg('密码与确认密码不相同！');
    }
    return dispatch => {
        axios.post('/user/register',{name,password, type}).then(res => {
            if(res.status === 200) {
                let code = res.data.code;
                let msg = res.data.msg;
                if(code === ERR_OK) {
                    dispatch(registSuccess(msg));
                }else {
                    dispatch(errMsg(res.data.msg));
                }
            }
        });
    }
}