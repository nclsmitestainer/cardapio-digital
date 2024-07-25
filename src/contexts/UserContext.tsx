import React from "react";

interface IUserContext {
  categoryActive: string;
  setCategoryActive: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = React.createContext<IUserContext | null>(null);

export const useData = () => {
  const context = React.useContext(UserContext);
  if (!context) throw new Error("useData precisa estar em UserContextProvider");
  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [categoryActive, setCategoryActive] = React.useState('');

  return (
    <UserContext.Provider
      value={{ categoryActive, setCategoryActive }}
    >
      {children}
    </UserContext.Provider>
  );
};
