
"use client"
export default function ErrorBoundary({error,reset}){
    return<><div>{error.message}</div><button   onClick={reset}>click</button></> 
}