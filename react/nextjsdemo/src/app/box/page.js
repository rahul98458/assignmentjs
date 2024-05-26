'use client'
import { changeColor, changeHeight, changeShape, changeWidth,sideShift,udShift,normalPosition } from '@/redux/reducerSlices/boxSlice'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'



const box = () => {
    const {backgroundColor,width,height,borderRadius,left,top} = useSelector(state=>state.box)
    const dispatch = useDispatch()
    
    const generateArea = () =>
      {
        if (borderRadius==='50%')
        {
            return Math.PI * (width/2) ** 2
        }
        else
        {
            return width * height
        }
      }
    
  return (
    <div className = 'flex items-center flex-col p-20'>
    <div style={{backgroundColor:backgroundColor , height:height , width : width,borderRadius:borderRadius , position:'relative' , left,top ,margin:100}}> 
    </div>
    <Button onClick={()=>dispatch(udShift(-100))}>top</Button>
    <Button onClick={()=>dispatch(udShift(100))}>bottom</Button>
    <Button onClick={()=>dispatch(sideShift(100))}>right</Button>
    <Button onClick={()=>dispatch(sideShift(-100))}>left</Button>
    <Button onClick={()=>dispatch(normalPosition())}>Normal Position</Button>
      <Button onClick={()=>dispatch(changeWidth())}>+width</Button>
       <Button onClick={()=>dispatch(changeHeight())}>+height</Button>
       <Button onClick={()=>dispatch(changeShape())}>change shape</Button>
       <Input placeholder='enter the new color' onChange={(e)=> dispatch(changeColor(e.target.value))}/>
        {generateArea()}
    </div>
  
  )
}

export default box