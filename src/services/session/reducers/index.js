import { combineReducers } from 'redux';
import worksReducer from './worksReducer';

const rootReducer = combineReducers({
    works: worksReducer
})

export default rootReducer;