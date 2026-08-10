import { createContext, useState } from "react";


export let TaskContext = createContext();


export let TaskProviderFunc = ({ children }) => {
    let [ListTask,UpdateListTask] = useState([{name:'برنامه نویسی',finised:true}]);
    return (
        <TaskContext.Provider value={{ListTask,UpdateListTask}}>
            {children}
        </TaskContext.Provider>
    )
}