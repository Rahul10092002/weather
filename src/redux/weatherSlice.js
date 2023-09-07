import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState: {
        weather:{}
    },
    reducers: {
        loadInfo: (state, action) => {
            state.weather = action.payload;
        }
    }
})

export const { loadInfo } = weatherSlice.actions;
export default weatherSlice.reducer;
export const loadInformation=(state)=>(state.weatherSlice.weather)