import { NextResponse } from "next/server"


export const middleware=(request)=>{
    return NextResponse.redirect(new URL("/"),request.url)
}


export default middleware 

export const config={//config object states that to which route this shoudl be applied
    matcher:["/todo"]
}