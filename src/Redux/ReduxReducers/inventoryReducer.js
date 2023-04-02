const inventoryReducer = (state = 10 , action)=>{
    switch (action.type){
        case "restore_inventory":
            return state + +action.payload;
        case "purchase_product":
           return state - action.payload; 
        default :
        return state
    }
}

export default inventoryReducer;
