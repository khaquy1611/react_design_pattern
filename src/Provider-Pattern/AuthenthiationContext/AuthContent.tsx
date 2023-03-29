import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

const AuthContent = () => {
  const { isAuthenticated, user, login, logout } = useContext(AuthContext)
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Hello , {user.username}</p>
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button onClick={() => login('sampleuser', 'samplepassword')}>
            Login
          </button>
        </div>
      )}
    </div>
  )
}

export default AuthContent
