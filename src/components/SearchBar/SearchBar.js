import {useContext} from 'react'
import {UserContext} from '../../context/UserContext'
import './SearchBar.css'

const SearchBar = () => {
  const {setUsers} = useContext(UserContext) // Removed `users`

  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase()
    setUsers(prevUsers =>
      prevUsers.filter(user => user.name.toLowerCase().includes(searchTerm)),
    )
  }

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search users..."
      onChange={handleSearch}
    />
  )
}

export default SearchBar
