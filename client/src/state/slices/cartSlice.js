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
            const newItem = action.payload.item;

            const existingItem = state.cart.find(
                (item) => item.documentId === newItem.documentId
            );

            if (existingItem) {
                existingItem.count += newItem.count ?? 1;
            } else {
                state.cart.push({
                    ...newItem,
                    count: newItem.count ?? 1,
                });
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.documentId !== action.payload.documentId
            );
        },

        increaseCount: (state, action) => {
            const item = state.cart.find(
                (i) => i.documentId === action.payload.documentId
            );
            if (item) {
                item.count++;
            }
        },
        decreaseCount: (state, action) => {
            const item = state.cart.find(
                (i) => i.documentId === action.payload.documentId
            );
            if (item && item.count > 1) {
                item.count--;
            }
        },

        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        }
    },
});



export const { setItems, addToCart, removeFromCart, increaseCount, decreaseCount, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;