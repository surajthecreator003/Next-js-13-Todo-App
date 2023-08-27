"use client"// so that The todo Component can use the server action

import {useTransition} from "react";
import {completeTodo} from "@/utils/actions"

const Todo = ({todo}) => {
  const [isPending,startTransition]=useTransition()
  return (
    <div onClick={()=>startTransition(()=>completeTodo(todo.id))} className={`border border-black/20 cursor-pointer ${todo.completed ? 'line-through text-gtay-900':''}`}>
      {todo.content}
      </div>
  )
}

export default Todo