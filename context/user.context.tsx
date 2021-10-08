import React, { useState } from "react";

export interface User {
  type: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  code?: string;
}

type UserContext = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const UserContext = React.createContext<UserContext | null>(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState<User>({
    type: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used inside a UserProvider");
  }
  return context;
};