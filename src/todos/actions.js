import * as actionTypes from './actionTypes';

export const addTodo = text => {
    return {
        type: actionTypes.ADD_TODO,
        text,
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: actionTypes.SET_VISIBILITY_FILTER,
        filter,
    };
};

export const toggleTodo = id => {
    return {
        type: actionTypes.TOGGLE_TODO,
        id,
    };
};
