import { createContext, useState } from "react";


let TaskContext = createContext();


let TaskProviderFunc = ({ children }) => {
    let [ListTask,UpdateListTask] = useState([]);
    return (
        <TaskContext value={{ListTask,UpdateListTask}}>
            {children}
        </TaskContext>
    )
}