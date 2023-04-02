const userListReducers = (state = [], action)=>{
    switch (action.type){
        case "sign_up_user":
            return state + action.payload;
        default:
        return state
    }
}

export default userListReducers