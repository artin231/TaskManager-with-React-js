import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

export let TaskContext = createContext();


export let TaskProviderFunc = ({ children }) => {
    let [ListTask,UpdateListTask] = useState([{id:uuidv4(),name:'برنامه نویسی',finised:false}]);

    let ChangeStatusItem = (Id) => {
        let updatedList = ListTask.map(i => {
            if(i.id == Id){
                i.finised = !i.finised;
                return i
            }
            return i
        });
        UpdateListTask(updatedList);
    };

    let DeleteTaskItem = (Id) => {
        let updatedList = ListTask.filter(i => {
            return i.id != Id;
        });
        UpdateListTask(updatedList);
    };

    return (
        <TaskContext.Provider value={{ListTask,UpdateListTask,ChangeStatusItem,DeleteTaskItem}}>
            {children}
        </TaskContext.Provider>
    )
}