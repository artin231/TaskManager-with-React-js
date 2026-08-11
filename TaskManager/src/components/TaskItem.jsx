let TaskItem = ({ i, h }) => {
    return (
        <div className="ItemTaskList">
            <div className="status">
                {i.finised == true ? <> <input type="checkbox" key={h} name="" id="" onClick={() => {}} checked /> <p>انجام شده</p> </> : <><input type="checkbox" key={h} name="" id="" /> <p>انجام نشده</p> </>}

            </div>

            <h1>{i.name}</h1>
            <i className="fa fa-trash" aria-hidden="true"></i>

        </div>
    )
}

export default TaskItem