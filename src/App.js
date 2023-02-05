import './App.css';
import Navbar from './Navbar';
import SideNav from './components/SideNav';
import MainSection from './components/MainSection';
import {useState} from 'react';

function App() {
  const [active, setActive] = useState("INBOX")
  return (
    <div id='main'>
      <Navbar appName={'ToDoList2.0'}/>
    <header>
      <div className="row">
        <div className="col-md-2" style={{borderRight:'1px solid rgba(177, 171, 171, 0.5)',height:'100vh'}}>
          <SideNav change = {setActive}/>
        </div>
        <div className="col-md-10">
          <MainSection active = {active}/>
        </div>
      </div>
    </header>
  </div>
  );
}

export default App;
