import { createSlice } from "vendor";

let initialState = 0;

let { reducer, action, TYPE } = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    }
})

export default reducer

export { action, TYPE }