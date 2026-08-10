import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import TaskItem from "./TaskItem";

let TaskList = () => {
    let data = useContext(TaskContext);
    console.log(data);
    
    return (
        <div className="TasksBox">
            <h1>تسک ها</h1>
            <div className="AddPlace">
                <input type="text" className="InputAdd" placeholder="نام تسک خود را وارد کنید" />
                <button>ثبت اطلاعات</button>
            </div>
            <ul className="ListOfTasks">
                {data.ListTask.map((i,h) => {
                    return (<TaskItem i={i} h={h}/>)
                })}
            </ul>
        </div>
    )
}

export default TaskList