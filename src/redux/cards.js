import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "card",
    initialState: {
        listcard: [],
        listtitle: []
    },
    reducers:{
        setListCard: (state, action) => {
            state.listcard = action.payload;
        },

        setListTitle: (state, action) => {
            state.listtitle = action.payload;
        }
    }
});

export const { setListCard,setListTitle } = counterSlice.actions;
export default counterSlice.reducer;