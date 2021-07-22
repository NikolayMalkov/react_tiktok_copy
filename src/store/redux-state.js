import { applyMiddleware, combineReducers, createStore } from "redux";
import auth_reducer from "./auth_reducer";
import dialogsPage_reducer from "./dialogsPage_reducer";
import profilePage_reducer from './profilePage_reducer';
import usersPage_reducer from './usersPage_reducer';
import thunk from 'redux-thunk';    


let reducers = combineReducers({
    profilePage: profilePage_reducer,
    dialogsPage: dialogsPage_reducer,
    usersPage: usersPage_reducer,
    auth: auth_reducer
});

let Store = createStore(reducers, applyMiddleware(thunk));



export default Store;