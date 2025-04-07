import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app" ,
    initialState : {
        isSideBarOpen : true
    },
    reducers : {
        toggleSideBar : (state) => {
            state.isSideBarOpen = !state.isSideBarOpen
        } ,
        openSideBar : (state) => {
            state.isSideBarOpen = true
        } ,
        closeSideBar : (state) => {
            state.isSideBarOpen = false
        }
    }
})

export const { toggleSideBar , closeSideBar , openSideBar } = appSlice.actions

export default appSlice.reducer