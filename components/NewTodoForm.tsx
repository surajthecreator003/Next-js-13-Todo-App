"use client"

import { useState,useEffect } from "react";


/*so you can only send serializable data in props as the server sends it with the server side generated static html and this is done as bcz
  the client side generated component cant wait for the hydration(getting converted to react elements and adding event listeners) of
 the server side generated page and then get the props from those elemets 
 
 SO YOU CAN ONLY SEND SERIALIZABEL DATA FROM SERVER COMPONENT TO CLIENT COMPONENT*/

const NewTodoForm=({serializable})=>{
    
    /*this line below wont work as client components dosent mean it will not be rendered on server it will still be and the whole 
    javascript version of this component will be sent to client and the window.localStorage will break on server only*/
    //console.log(window.localStorage);
    //Solution put it in useEffect and it will work on CLient 


    useEffect(()=>{console.log("am NewTodoForm a Client Client Component going through Hydration Phase on Client")},[]);
    //will get rendered on only client
    
    console.log("am NewTodoForm a Client Component going through Pre-Render Phase on Server ");
    //will get rendered on both client and server

    const [state,setState]=useState("");
    
    return <div>
        <form>
            <input type="text"></input>
        </form>
    </div>
}

export default NewTodoForm;


/*And Remember Client component dosen't means it wont get rendered on Server but rather it will as its the default nature of Next js
  but the twist is that only the static html part or whatever part is static and all those useffect or whatever useClient() we used will be
  rendered on Client */