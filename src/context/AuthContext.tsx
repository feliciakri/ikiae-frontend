import React, { useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

export interface AuthContextInterface {
  token: string | null;
  user: Object | null;
  isLogged: boolean;
  isFetching: boolean;
  error: boolean;
}
const tokenInLocalStorage = localStorage.getItem("token");

const initialState = {
  token: null || tokenInLocalStorage,
  user: null,
  isLogged: tokenInLocalStorage ? true : false,
  isFetching: false,
  error: false,
};
export const AuthContext = React.createContext<{
  state: AuthContextInterface;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
