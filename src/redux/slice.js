import { createSlice, nanoid } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        users: [],
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        plus: (state,action) => {
            const data =  state.value + action
            state.value = data
        },
        // addUser: (v,action) => {
        //     id: nanoid()
        //     name: action.name
        // },
    }
})

export const { increment,plus } = counterSlice.actions;
export default counterSlice.reducer;