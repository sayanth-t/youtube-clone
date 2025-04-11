import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {} ,
    reducers : {
        setCaches : (state,action) => {
            console.log('payLoad -- ', action.payload )
            return { ...action.payload , ...state  }
        }
    }
})

export const { setCaches } = searchSlice.actions ;
export default searchSlice.reducer ;