import { notFound } from "next/navigation"

export default function Reveiw({params}){

    if(parseInt(params.reviewId)==0){
        notFound()
    }
    return (<h1>Review of Product {params.reviewId} {params.productId}</h1>)
}