let cartVals = {
    cartSize : 0,
    cartPrice : 0
};

const cartValsReducer = (state = cartVals, action) => {
    
    switch (action.type) {
        case "Cart_Vals":
            return {
                cartSize : action.payload.size,
                cartPrice : action.payload.price
            }
        
        default:
            return state
    }
}

export default cartValsReducer;