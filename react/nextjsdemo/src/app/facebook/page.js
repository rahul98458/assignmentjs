'use client'
import { useState } from "react";
import React from 'react'
import { GrLike } from "react-icons/gr";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaHeart } from "react-icons/fa";


const page = () => {

    const [color,setColor] = useState('red')

    const [lsize,lsetsize] = useState(15)
    const [wsize,wsetsize] = useState(15)
    const [hsize,hsetsize] = useState(15)

    const [reactionDivOpen,setReactionDivOpen]=useState(false)
 
    const clolorHandler=()=>{
        setColor(color==='red' ? 'green' : 'red')
    }

    const ReactionDiv= ()=>{
      return(
     <div  className="border border-gray-800 shadow-lg w-28 bg-zinc-400">
        <button   className="ml-2"><GrLike onMouseEnter={()=> lsetsize(25)} size={lsize} onMouseLeave={()=>lsetsize(12)}  color={'blue'}/></button>
        <button   className="m-2"><MdOutlineEmojiEmotions  onMouseEnter={()=> wsetsize(25)} size={wsize} onMouseLeave={()=>wsetsize(12)} color={'yellow'}/></button>
        <button   className="m-2"><FaHeart  onMouseEnter={()=> hsetsize(25)} size={hsize} onMouseLeave={()=>hsetsize(12)} color={'red'}/></button>
       
      </div>
      )
    }

    const generateReactionButton=()=>{
      return(
        <button onMouseEnter={()=>setReactionDivOpen(true)} className=" ml-2"><GrLike color={color}/></button>
      )
    }

  return (
    <div>
     
     { reactionDivOpen ? <ReactionDiv/> : null }
      {generateReactionButton()}
    </div>
  )
}

export default page