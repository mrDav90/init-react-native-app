import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name  : "navigation",
    initialState : {
        navigation : null 
    } ,
    reducers : {
        setNavigation : (state , action)=>{
            state.navigation = action.payload
        }
    }
})

export const {setNavigation} = navigationSlice.actions
export default navigationSlice.reducer