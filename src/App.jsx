import { NavBar, Footer } from "./components";
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <NavBar />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
