
"use client"
export default function Dashboard({ children ,notifications,users,revenue }) {



  const isloggedIn=false

    return isloggedIn?(
      
     
        <>   
        {children}
        {notifications}
        {users}
        {revenue}
        
        </>
     
    ):(<h1>login</h1>)
  }
  