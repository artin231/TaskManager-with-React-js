import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

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
                    return (<li>
                        {i.finised==true ? <input type="checkbox" key={h} name="" id="" checked />:<input type="checkbox" name="" id="" />}
                        
                        <h1>{i.name}</h1>
                        
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default TaskList