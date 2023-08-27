//Making the NewTodoForm Component fully Server Side

import { newTodo } from "@/utils/actions";

const NewTodoFormProdcution=()=>{
    
     
    return ( 
    <div>
        <form action={newTodo}>
            <input name="content" type="text" className="border-2 border-black/25"/>
            <button type="submit"> ➕ New Todo </button>    
        </form>
    </div>
           )
}

export default NewTodoFormProdcution;


