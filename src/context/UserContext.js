import {createContext, useState} from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <UserContext.Provider
      value={{users, setUsers, loading, setLoading, error, setError}}
    >
      {children}
    </UserContext.Provider>
  )
}
