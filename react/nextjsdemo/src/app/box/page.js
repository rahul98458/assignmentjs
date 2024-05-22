'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const box = () => {
    const {backgroundColor,width,height} = useSelector(state=>state.box)
  return (
    <div style={{backgroundColor:backgroundColor , height:height , width : width}}> 
       
    </div>
  )
}

export default box