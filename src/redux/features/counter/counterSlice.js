import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        artir: (state) => {
            state.counter -= 1
        },
        azalt: (state) => {
            state.counter += 1
        },
        custom: (state, action) => {
            state.counter += action.payload
        }
    }
})

export const { artir, azalt, custom } = counterSlice.actions
export default counterSlice.reducer