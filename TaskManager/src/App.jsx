import { TaskProviderFunc } from "./context/TaskContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <TaskProviderFunc>
      <Router>
        <Routes>
        </Routes>
      </Router>
    </TaskProviderFunc>
  )
}

export default App
