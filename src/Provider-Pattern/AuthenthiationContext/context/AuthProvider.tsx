import { ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';

interface Props {
    children: ReactNode
}
export const AuthProvider = ({ children } : Props) => {
  const [userState, setUserState] = useState<string>('')
  const updateUser = (user : any) => {
    setUserState(user);
  }
  return (
    <AuthContext.Provider value={{ userState , updateUser } as any}>
      { children }
    </AuthContext.Provider>
  );
};

export const UserConsumer = AuthContext.Consumer;