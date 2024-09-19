'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type UserType = {
  name: string;
};

type AuthContextValueType = {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
};

const AuthContext = createContext<AuthContextValueType>({
  user: null,
  setUser: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);

export const AuthConsumer = ({
  loggedInChild,
  unloggedInChild,
}: {
  loggedInChild: ReactNode;
  unloggedInChild: ReactNode;
}) => {
  return (
    <AuthContext.Consumer>
      {({ user }) => <>{user ? loggedInChild : unloggedInChild}</>}
    </AuthContext.Consumer>
  );
};
