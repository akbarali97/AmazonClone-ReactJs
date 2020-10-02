export const initialState = { cart:[]};

export function reducer(state,action) {
    console.log(action);
    switch(action.type){
        case "Add_to_Cart":
            // some logic for adding to cart
            return {...state, cart: [...state.cart, action.item]};
        case "Remove_from_Cart":
            // some logic for removing item from cart
            let newCart = [ ...state.cart ]
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
            if (index >= 0){
                newCart.splice(index,1);
            }
            return { ...state, cart: newCart};
        default:
            // some default logic
            return {state};
    }
}

export default reducer;