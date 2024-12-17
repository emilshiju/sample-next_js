
"use client"
export default function ProductDetails({ children }) {


    const random=()=>{
        return 2
    }

    let ans=random()
  
    if (ans === 2) {
        throw new Error("error");
    }


    return (
      
     
        <>   
        {children}
         <h1>000000</h1>
        </>
     
    )
  }
  