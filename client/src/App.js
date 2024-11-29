import {BrowserRouter, Routes , Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Dashboard from "./components/Dashboard";


function App() {
  return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Public />} />
              <Route path={"login"} element={<Login />}/>
              <Route path={"register"} element={<Register />}/>
              <Route path={"dashboard"} element={<Dashboard />}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
