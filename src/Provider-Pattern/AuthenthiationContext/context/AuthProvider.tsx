import { ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';

interface Props {
    children: ReactNode
}
export const AuthProvider = ({ children } : Props) => {
  const [userState, setUserState] = useState({
    isAuthenticated: false,
    user: null
  })

  const login = (username : any , password : any) => {
    const isAuthenticated = true
    const user : any = { username, email: 'sample@example.com' }
    setUserState({ ...userState, isAuthenticated, user })
  }
 
  const logout = () => {
    setUserState({ ...useState, isAuthenticated: false, user: null})
  }
  const { isAuthenticated, user } = userState
  return (
    <AuthContext.Provider value={{ isAuthenticated , user, login, logout } as any}>
      { children }
    </AuthContext.Provider>
  );
};

export const UserConsumer = AuthContext.Consumer;


