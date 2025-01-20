import './UserItem.css'

const UserItem = ({user, onClick}) => (
  <div
    className="user-item"
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={e => e.key === 'Enter' && onClick()}
  >
    <h3>{user.name}</h3>
    <p>{user.email}</p>
    <p>{user.address.city}</p>
  </div>
)

export default UserItem
