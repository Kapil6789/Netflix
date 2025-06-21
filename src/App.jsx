import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import {Home} from './Components/Home/Home.jsx'
import {Header} from './Components/Header/Header.jsx'

function App() {


  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
