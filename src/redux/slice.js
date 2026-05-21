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
            state.value += action.payload
        },
        addUser: (v,action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            v.users.push(data)
        },
    }
})

export const { increment,plus,addUser } = counterSlice.actions;
export default counterSlice.reducer;