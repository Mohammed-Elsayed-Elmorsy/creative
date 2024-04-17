import Circles from "./components/Circles"
import Features from "./components/Features"
import Header from "./components/Header"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Register from "./components/Register"
import Robot from "./components/Robot"
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="app overflow-hidden" >
      <Header />
      <Circles />
      <Routes>
        <Route path={'/Features'} element={<Features />} />
        <Route path={'/new-account'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/'} element={
          <>
            <Landing />
            <Robot />
            <Features />
            <div className=" absolute h-full w-full top-[1000px] z-[-10]">
              <Circles />
            </div>
          </>
        } />
      </Routes>
    </div>
  )
}

export default App