
import Button from './Button'
import {runScan} from "../../server/runScan"
const SideBar = () => {




  return (
    <div className='sidebar-container'>
      <div>
        <h1>Revue</h1>
      </div>
      <div>
        <Button onClick={runScan} text='Scan'/>
      </div>
    </div>
  )
}

export default SideBar