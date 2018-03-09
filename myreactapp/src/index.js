import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from "./redux/redux";
import Login from "src/container/login/login";
import Register from 'src/container/register/register';
import 'antd-mobile/dist/antd-mobile.css';
import AuthRoute from "./components/authRoute/authRoute";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                {/* 如果没有匹配到/login和/dashboard,直接跳到/dashboard然后再鉴权 */}
                <Route path="/login" exact component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
