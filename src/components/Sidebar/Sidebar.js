import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => (
  <aside className="sidebar">
    <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/module">Module</Link>
      </li>
    </ul>
  </aside>
)

export default Sidebar
