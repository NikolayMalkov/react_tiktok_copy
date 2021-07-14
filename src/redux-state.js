import { combineReducers, createStore } from "redux";
import dialogsPage_reducer from "./dialogsPage_reducer";
import profilePage_reducer from './profilePage_reducer';
import usersPage_reducer from './usersPage_reducer';


let reducers = combineReducers({
    profilePage: profilePage_reducer,
    dialogsPage: dialogsPage_reducer,
    usersPage: usersPage_reducer
});

let Store = createStore(reducers);



export default Store;