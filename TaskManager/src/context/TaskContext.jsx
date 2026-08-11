import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

export let TaskContext = createContext();


export let TaskProviderFunc = ({ children }) => {
    let [ListTask,UpdateListTask] = useState([{id:uuidv4(),name:'برنامه نویسی',finised:false}]);
    return (
        <TaskContext.Provider value={{ListTask,UpdateListTask}}>
            {children}
        </TaskContext.Provider>
    )
}