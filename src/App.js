import './App.css';
import AddBond from './MyComponent/AddBond';
import AddEquity from './MyComponent/AddEquity';
import AddSec from './MyComponent/AddSec';
import FetchBond from './MyComponent/FetchBond';
import FetchEquity from './MyComponent/FetchEquity';
import Login from './MyComponent/Login';
import {  Route, Routes } from "react-router-dom";
import SecurityView from './MyComponent/SecurityView';
import EditEquityForm from './MyComponent/EditEquityForm';
import EditBondForm from './MyComponent/EditBondForm';
import BondView from './MyComponent/BondView';
import SpecificBond from './MyComponent/SpecificBond';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/addsec" element={<AddSec/>} />
        <Route path="/equity" element={<AddEquity/>} />
        <Route path="/bond" element={<AddBond/>} />
        <Route path="/fetche" element={<FetchEquity/>} />
        <Route path="/fetchb" element={<FetchBond/>} />
        <Route path="/viewsec" element={<SecurityView/>} />
        <Route path="/edite" element={<EditEquityForm/>} />
        <Route path="/editb" element={<EditBondForm/>} />
        <Route path="/viewb" element={<BondView/>} />
        <Route path="/specificb" element={<SpecificBond/>} />
      </Routes>
    </div>
  );
}

export default App;
