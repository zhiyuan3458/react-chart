const ADD_GUN = '加机关枪';
const MIN_GUN = '减机关枪';

// reducer
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_GUN: {return state + 1;}
        case MIN_GUN: {return state - 1}
        default: {return 10;}
    }
}

// action creator
export function addGun() {
    return {type: ADD_GUN};
}

export function minGun() {
    return {type: MIN_GUN};
}

// dispatch用来提交action，通知reducer修改了action
export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun());
        }, 2000);
    }
}