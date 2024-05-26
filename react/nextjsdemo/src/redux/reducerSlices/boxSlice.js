import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    backgroundColor :'red',
    width : 50 ,
    height : 50 ,
    borderRadius : '0%' ,
    top : 0 ,
    left : 0
 }

const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    changeHeight(state) {
      if(state.borderRadius==='50%')
        {
        const newHeight = state.height + 10
        state.height = newHeight
        state.width=newHeight
        }
        else
        {
          state.height=state.height+10
        }
    },
    changeWidth(state) {
      if(state.borderRadius==='50%')
        {
        const newWidth = state.width + 10
        state.height = newWidth
        state.width= newWidth
        }
        else
        {
          state.width=state.width + 10
        }
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
      udShift(state,actions) {
        state.top=actions.payload
        },
        sideShift(state,actions) {
          state.left=actions.payload
          },
          normalPosition(state) {
            state.left=0
            state.top = 0
            },
  },
})

export const { changeHeight,changeWidth,changeShape,changeColor,udShift,sideShift,normalPosition } = boxSlice.actions
export default boxSlice.reducer
