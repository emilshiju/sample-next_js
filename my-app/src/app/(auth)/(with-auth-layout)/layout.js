"use client"

import { useState } from "react"

export default function  AuthLayout({ children }) {


    const [name,setName]=useState('')
    return (
      
     
        <>   
        <input value={name} onChange={(e)=>setName(e.target.value)}></input>
        {children}
         <h1>innerlayout</h1>
        </>
     
    )
  }


  // template acit like layout but  it will create a new instance of shared componet and also allow to share to multiple componetns.
  