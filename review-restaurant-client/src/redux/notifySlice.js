import {createSlice} from "@reduxjs/toolkit"
import {copyWithStructuralSharing} from "@reduxjs/toolkit/query";

const notifySlice = createSlice({
    name: "NOTIFY",
    initialState: {
        loading: false,
        success: "",
        error: ""
    },
    reducers: {
        notifyLoading : (state)=>{
            state.loading = true
        },
        notifySuccess: (state,action) => {
            state.loading = false;
            state.success = action.payload;
            state.error = null;
        },
        notifyError: (state,action) =>{
            state.loading = false;
            state.success = "";
            state.error = action.payload;
        }
    }
})

export const {notifyLoading,notifySuccess,notifyError} = notifySlice.actions;
export default notifySlice.reducer;