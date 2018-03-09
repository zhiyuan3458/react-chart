import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import {ERR_OK} from "../../common/js/common";

@withRouter
class AuthRoute extends React.Component {
    componentDidMount() {
        const publicList = ['/login', 'register'];
        const pathName = this.props.location.pathname;
        if(publicList.indexOf(pathName) > -1) {
            return null;
        }
        axios.get('/user/info').then(res => {
            if(res.status === 200) {
                let code = res.data.code;
                if(code === ERR_OK) {
                    console.log(res.data.data);
                }else {
                    this.props.history.push('/login');
                }
            }
        });
    }

    render() {
        return null;
    }
}

export default AuthRoute;