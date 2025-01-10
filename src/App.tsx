import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Loading from './pages/Loading'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/loading" element={<Loading/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
