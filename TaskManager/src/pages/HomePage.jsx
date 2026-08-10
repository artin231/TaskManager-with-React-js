import Header from "../components/Header"
import TaskList from "../components/TaskList"
import '../css/main.css'

let HomePage = () => {
    return (
        <div className="container">
            <Header />
            <TaskList />
        </div>

    )
}

export default HomePage