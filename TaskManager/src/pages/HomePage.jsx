import Header from "../components/Header"

let HomePage = () => {
    return (
        <div className="container">
            <Header />
            <div className="TasksBox">
                <h1>تسک ها</h1>
                <div className="TaskList">
                    <div className="task">
                        <div className="left">
                        <h1 className="task_title"></h1>
                        <h1 className="task_status"></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage