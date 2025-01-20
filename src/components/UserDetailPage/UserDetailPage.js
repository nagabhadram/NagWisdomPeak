import {useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {UserContext} from '../../context/UserContext'
import BackButton from '../BackButton/BackButton'
import './UserDetailPage.css'

const UserDetailPage = () => {
  const {id} = useParams()
  const {users} = useContext(UserContext)
  const navigate = useNavigate()
  const user = users.find(u => u.id === parseInt(id))

  return (
    <div className="user-detail">
      {user ? (
        <>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company.name}</p>
          <p>Website: {user.website}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
      <BackButton onClick={() => navigate(-1)} />
    </div>
  )
}

export default UserDetailPage
