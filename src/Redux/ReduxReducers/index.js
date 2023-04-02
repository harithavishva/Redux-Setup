import { combineReducers } from "redux";
import inventoryReducer from "./inventoryReducer";
import userListReducers from "./userReducer";



const reducers = combineReducers(
    {
        inventory : inventoryReducer,
        userList : userListReducers,
    }
)

export default reducers;