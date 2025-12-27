import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item]
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },

        increaseCount: (state, action) => {
            const item = state.cart.find(i => i.id === action.payload.id)
            if (item) {
                item.count++;
            }
        },
        decreaseCountCount: (state, action) => {
            const item = state.cart.find(i => i.id === action.payload.id && count > 1)
            if (item) {
                item.count--;
            }
        },

        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen
        }
    },
});



export const { setItems, addToCart, removeFromCart, increaseCount, decreaseCount, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;