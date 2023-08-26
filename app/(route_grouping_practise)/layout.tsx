import NewTodoFormProduction from "@/components/NewTodoFormProduction";

const layout=({children})=>{

    return <div>
    <h1>dashboard</h1>
    <div><NewTodoFormProduction  /></div>
    <div>{children}</div>
    </div> 

}

export default layout;