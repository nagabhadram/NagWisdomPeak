import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'
import Module from './components/Module/Module'
import './App.css'

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/module" element={<Module />} />
        </Routes>
      </div>
    </div>
  </Router>
)

export default App
