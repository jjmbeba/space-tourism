import {createSlice} from '@reduxjs/toolkit'

const menuSlice = createSlice({
    name:'menu',
    initialState:{
        menu:false,
    },
    reducers:{
        setMenuState:(state) => {
            state.menu = !state.menu;
        }
    }
})

export const {setMenuState} = menuSlice.actions;

export default menuSlice