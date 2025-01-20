import {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../../context/UserContext'
import UserList from '../UserList/UserList'
import SearchBar from '../SearchBar/SearchBar'
import SortButtons from '../SortButtons/SortButtons'
import './HomePage.css'

const HomePage = () => {
  const {users, setUsers, loading, setLoading, error, setError} = useContext(
    UserContext,
  )
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        )
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError('Failed to fetch users')
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [setUsers, setLoading, setError])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="home-page">
      <h1>User Directory</h1>
      <SearchBar />
      <SortButtons />
      <UserList users={users} onUserClick={id => navigate(`/user/${id}`)} />
    </div>
  )
}

export default HomePage
