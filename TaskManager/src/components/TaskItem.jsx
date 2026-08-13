import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

let TaskItem = ({ i, h }) => {
    let data = useContext(TaskContext);
    console.log(i);
    
    let funcCahnge = () => {
        let val = document.getElementById('EditInput'+i.id).value;

        if (event.key == 'Enter'){
            
            data.EditItem(val,i.id)
        }
    }
    return (
        <div className="ItemTaskList">
            <div className="status">
                {i.finised == true ? <> <input type="checkbox" key={h} name="" id="" onClick={() => { data.ChangeStatusItem(i.id) }} checked /> <p>انجام شده</p> </> : <><input type="checkbox" onClick={() => { data.ChangeStatusItem(i.id) }} key={h} name="" id="" /> <p>انجام نشده</p> </>}

            </div>
            <div className="right">
                {data.EditMode ?  <input defaultValue={i.name} id={`EditInput${i.id}`} onKeyDown={() => { funcCahnge()}} />: <h1>{i.name}</h1>}
                <img className="deleteIcon" onClick={() => { data.DeleteTaskItem(i.id) }} src="src/assets/red-trash-can-icon.svg" alt="" />
                <img className="EditIcon" onClick={() => { data.ChangingEditModeFunc() }} src="src/assets/pencil-icon-113248-512.png" alt="" />
            </div>


        </div>
    )
}

export default TaskItem