export const restoreProduct = (prod) => {
    return (dispatch)=>{
        dispatch({
           type :"restore_inventory",
           payload : prod
        })
    }
 }


 export const purchaseProduct = (prod)=>{
    return (dispatch)=>{
        dispatch({
            type: "purchase_product",
            payload : prod
        })
    }
 }