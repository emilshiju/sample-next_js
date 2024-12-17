
"use client"
export default function ProductList(){

    const random=()=>{
        return 2
    }

    let ans=random()
  
    if (ans === 2) {
        // throw new Error("error");
    }


    return (<>
    
    <h1>ProductList</h1>
    <h1>product 1</h1>
    <h1>product 2</h1>
    <h1>product 3</h1>

    </>)
}