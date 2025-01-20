import {useContext} from 'react'
import {UserContext} from '../../context/UserContext'
import './SortButtons.css'

const SortButtons = () => {
  const {users, setUsers} = useContext(UserContext)

  const sortAZ = () =>
    setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)))
  const sortZA = () =>
    setUsers([...users].sort((a, b) => b.name.localeCompare(a.name)))

  return (
    <div className="sort-buttons">
      <button type="button" onClick={sortAZ}>
        Sort A-Z
      </button>
      <button type="button" onClick={sortZA}>
        Sort Z-A
      </button>
    </div>
  )
}

export default SortButtons
