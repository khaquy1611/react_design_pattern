import { createContext } from 'react';

interface AuthContext {
  isAuthenticated: boolean
  user: any
  login: (username : any , password : any) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContext>({
    isAuthenticated: false,
    user: null,
    login: () => {},
    logout: () => {}
});