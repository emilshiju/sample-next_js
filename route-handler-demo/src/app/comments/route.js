import { comments } from "./data"


export const dynamic='force-dynamic';"auto"

export async function GET(){
    return  Response.json(comments)
}


export async function POST(request){
  const com =  await request.json()
  comments.push(com)
  return new Response.json("suces")

}