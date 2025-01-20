import UserItem from '../UserItem/UserItem'
import './UserList.css'

const UserList = ({users, onUserClick}) => (
  <div className="user-list">
    {users.map(user => (
      <UserItem
        key={user.id}
        user={user}
        onClick={() => onUserClick(user.id)}
      />
    ))}
  </div>
)

export default UserList
