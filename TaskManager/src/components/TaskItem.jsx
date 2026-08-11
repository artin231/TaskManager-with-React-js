import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

let TaskItem = ({ i, h }) => {
    let data = useContext(TaskContext);

    return (
        <div className="ItemTaskList">
            <div className="status">
                {i.finised == true ? <> <input type="checkbox" key={h} name="" id="" onClick={() => {data.ChangeStatusItem(i.id)}} checked /> <p>انجام شده</p> </> : <><input type="checkbox" onClick={() => {data.ChangeStatusItem(i.id)}} key={h} name="" id=""  /> <p>انجام نشده</p> </>}

            </div>
            <div className="right">
                <h1>{i.name}</h1>
                <img className="deleteIcon" onClick={() => {data.DeleteTaskItem(i.id)}} src="src/assets/red-trash-can-icon.svg" alt="" />
                <img className="EditIcon" src="src/assets/pencil-icon-113248-512.png" alt="" />
            </div>


        </div>
    )
}

export default TaskItem