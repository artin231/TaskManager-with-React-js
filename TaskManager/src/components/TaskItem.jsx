let TaskItem = ({ i,h }) => {
    return (
        <li className="ItemTaskLi">
            <li>
                {i.finised == true ? <input type="checkbox" key={h} name="" id="" checked /> : <input type="checkbox" name="" id="" />}

                <h1>{i.name}</h1>

            </li>
        </li>
    )
}

export default TaskItem