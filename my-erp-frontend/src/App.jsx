import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import DashBoard from "./components/dashboard-manager.jsx";
import Order from "./pages/Order.jsx";
import Production from "./pages/Production.jsx";
import Employee from "./pages/Employee.jsx";
import Layout from "./components/layout.jsx";
import Login from './pages/login.jsx';
import EmployeeModel from './components/EmployeeModel.jsx';

function App() {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
          <Route path="/" element={<Layout/>}>
            <Route index  element={<Navigate to="dashboard" replace={true} />}
            />
            
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/orders" element={<Order/>} />
            <Route path="/products" element={<Production/>} />
            <Route path="/customers" element="{<Customers/>}" />
            <Route path="/inventory" element="{<Inventory/>}" />
            <Route path="/suppliers" element="{<Suppliers/>}" />
            <Route path="/payments" element="{<Payments/>}" />
            <Route path="/reports" element="" />
            <Route path="/employees" element={<Employee/>} />
            
        </Route>
        <Route path="/empModel" element={<EmployeeModel/>}/>
        </Routes>

    </BrowserRouter>



  )


}

export default App
