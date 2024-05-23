import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    backgroundColor :'red',
    width : 50 ,
    height : 50 ,
    borderRadius : '0%'
 }

const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    changeHeight(state) {
        state.height=state.height+10
    },
    changeWidth(state) {
      state.width=state.width+10
  },
  changeColor(state,actions) {
    state.backgroundColor=actions.payload
    },
    changeShape(state) {
      if(state.borderRadius=== '0%')
        {
      state.borderRadius= '50%'
        }
        else
        {
          state.borderRadius= '0%'
        }
      },
  },
})

export const { changeHeight,changeWidth,changeShape,changeColor } = boxSlice.actions
export default boxSlice.reducer
