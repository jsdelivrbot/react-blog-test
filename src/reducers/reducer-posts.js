import _ from 'lodash';
import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            // const clone = Object.assign({}, state)
            // delete clone[action.payload];
            // Does the exact same but single line, thank you lodash :)
            return _.omit(state, action.payload);
        default:
            return state;
    }
}