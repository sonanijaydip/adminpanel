import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Loginform from './component/Loginform';
import Dashboard from './component/Dashboard';
import AdvancedElement from './component/AdvancedElement';
import GeneralElement from './component/GeneralElement';
import Addcourse from './component/Addcourse';
import Viewcourse from './component/Viewcourse';
import Admission from './component/Admission';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Loginform/> } />
        <Route path="/login" element={ <Loginform/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
        <Route path="/advance" element={ <AdvancedElement/> } />
        <Route path="/general" element={ <GeneralElement/> } />
        <Route path="/addcourse" element={ <Addcourse/> } />
        <Route path="/viewcourse" element={ <Viewcourse/> } />
        <Route path="/Admission" element={ <Admission/> } />
      </Routes>
      
    </div>

  );
}

export default App;
