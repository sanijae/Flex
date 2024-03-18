import { combineReducers} from 'redux';
import authReducer from './User_reducer';

export default combineReducers({
    users: authReducer
})
