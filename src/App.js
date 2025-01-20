import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import UserDetailPage from './components/UserDetailPage/UserDetailPage'
import {UserProvider} from './context/UserContext'
import './App.css'

const App = () => (
  <UserProvider>
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </div>
    </Router>
  </UserProvider>
)

export default App
