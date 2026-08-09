import { TaskProviderFunc } from "./context/TaskContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
function App() {

  return (
    <TaskProviderFunc>
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </Router>
    </TaskProviderFunc>
  )
}

export default App
