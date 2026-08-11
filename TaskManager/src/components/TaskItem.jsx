let TaskItem = ({ i, h }) => {
    return (
        <div className="ItemTaskList">
            <div className="status">
                {i.finised == true ? <> <input type="checkbox" key={h} name="" id="" onClick={() => {}} checked /> <p>انجام شده</p> </> : <><input type="checkbox" onClick={() => {}}  key={h} name="" id="" /> <p>انجام نشده</p> </>}

            </div>
<div className="right">
            <h1>{i.name}</h1>
            <img className="deleteIcon" src="src/assets/red-trash-can-icon.svg" alt="" />
            <img className="EditIcon" src="src/assets/pencil-icon-113248-512.png" alt="" />
</div>


        </div>
    )
}

export default TaskItem