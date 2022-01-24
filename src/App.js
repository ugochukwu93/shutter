import * as React from "react";
// import Dashboard from "./components/dashboard/Dashboard"
// import { Routes, Route} from "react-router-dom";
import './App.scss';
// import CreateAcc from './components/createAcc/CreateAcc';
// import DashboardNav from "./components/dashboardNav/DashboardNav";
import Route from "./components/route/Route";
function App() {
  return (
    <div className="App">
      <Route/>
      {/* <Routes>
        <Route exact path="/" element={<CreateAcc/>}/>
        <Route path="/dashboard" element={<DashboardNav/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
