"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

const NotFoundContext = createContext<{
  notFound: boolean;
  setNotFound: Dispatch<SetStateAction<boolean>>;
}>({
  notFound: false,
  setNotFound: () => {},
});

export const useNotFound = () => useContext(NotFoundContext);

export function NotFoundProvider({ children }: { children: React.ReactNode }) {
  const [notFound, setNotFound] = useState(false);

  return (
    <NotFoundContext.Provider value={{ notFound, setNotFound }}>
      {children}
    </NotFoundContext.Provider>
  );
}
