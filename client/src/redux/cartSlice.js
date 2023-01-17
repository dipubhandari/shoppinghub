import { createSlice, current } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            // checking if the  is already exist in cart
            const product = { ...action.payload, qty: 1 }

            const product_id = action.payload.id
            const currentState = current(state);
            const items_in_cart_id = currentState.map((item, id) => {
                return item.id
            })
            const check = items_in_cart_id.includes(product_id)
            if (!check) {
                state.push(product)
            }

        },
        remove: (state, action) => {
            const identity = action.payload.id
            // ✅ This is safe, because we made a copy
            return state.filter(filter => filter.id !== identity)

        },
        updateQuantity: (state, action) => {
            return state = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { add, remove, updateQuantity } = cartSlice.actions

export default cartSlice.reducer