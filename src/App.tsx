
import './App.css'
import DirList from './componenets/DirList'
import ErrorList from './componenets/ErrorList'
import SideBar from './componenets/SideBar'

function App() {

  return (
    <div className='home-container'>
        <SideBar/>
        <DirList/>
        <ErrorList/>
    </div>
  )
}

export default App
