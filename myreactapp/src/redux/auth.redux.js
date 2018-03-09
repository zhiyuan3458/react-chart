import axios from 'axios';

const LOGIN = 'login';
const LOGOUT = 'logout';
const USER_DATA = 'user_data';

const initState = {
    isAuth: false,
    username: '吕智源',
    age: 18
};

export function auth(state= initState,action) {
    switch(action.type) {
        case LOGIN:
            return {...state, isAuth: true};
        case LOGOUT:
            return {...state, isAuth: false};
        case USER_DATA:
            return {...state, username: action.payload[0].name, age: action.payload[0].age};
        default:
            return state;
    }
}

function userData(userData) {
    return {type: USER_DATA, payload: userData};
}

export function getUserData() {
    return dispatch => {
        axios.get('/data').then(res => {
            dispatch(userData(res.data));
        });
    }
}

export function login() {
    return {type: LOGIN};
}

export function logout() {
    return {type: LOGOUT};
}