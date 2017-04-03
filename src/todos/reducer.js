import * as actionTypes from './actionTypes';
import uuid from 'uuid';
import { combineReducers } from 'redux';

// const initialState = {
//     todos: [],
// };

const todo = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                id: uuid.v4(),
                text: action.text,
                price: action.price,
                completed: false,
            };

        case actionTypes.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                completed: !state.completed,
            });

        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                todo(undefined, action),
            ];

        case actionTypes.TOGGLE_TODO:
            return state.map(item =>
                todo(item, action)
            );

        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todos,
    visibilityFilter,
});

export default rootReducer;
