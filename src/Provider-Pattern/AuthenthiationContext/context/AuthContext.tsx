import { createContext } from 'react';

interface AuthContext {
  user: string
  updateUser?: (user : any ) => void
}

export const AuthContext = createContext<AuthContext>({
    user: '',
    updateUser: () => {}
});