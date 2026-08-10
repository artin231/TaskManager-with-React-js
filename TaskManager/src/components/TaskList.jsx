import { useContext } from "react"

let TaskList = () => {
    return (
        <div className="TasksBox">
            <h1>تسک ها</h1>
            <div className="AddPlace">
                <input type="text" className="InputAdd" placeholder="نام تسک خود را وارد کنید" />
                <button>ثبت اطلاعات</button>
            </div>
        </div>
    )
}

export default TaskList