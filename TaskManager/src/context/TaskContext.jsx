import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export let TaskContext = createContext();


export let TaskProviderFunc = ({ children }) => {
    let [ListTask, UpdateListTask] = useState([{ id: uuidv4(), name: 'برنامه نویسی', finised: false }]);
    let [EditMode, UpdateEditMode] = useState(false);


    let ChangeStatusItem = (Id) => {
        let updatedList = ListTask.map(i => {
            if (i.id == Id) {
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

    let ChangingEditModeFunc = () => {
        let NewEditMode = !EditMode;
        UpdateEditMode(NewEditMode);
    }

    let AddItemToList = (ItemName) => {
        let NewList = [...ListTask, { id: uuidv4(), name: ItemName, finised: false }];
        UpdateListTask(NewList);
    }

    let EditItem = (NewName, id) => {
        let NewList = ListTask.map((i) => {
            if (i.id == id) {
                i.name = NewName;
                return i;
            }
            return i;
        })
        UpdateListTask(NewList);
        UpdateEditMode(false);


    }

    return (
        <TaskContext.Provider value={{ ListTask, UpdateListTask, ChangeStatusItem, DeleteTaskItem, EditMode, UpdateEditMode, ChangingEditModeFunc, AddItemToList, EditItem }}>
            {children}
        </TaskContext.Provider>
    )
}