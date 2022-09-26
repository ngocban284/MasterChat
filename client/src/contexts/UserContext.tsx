import React, { createContext, Dispatch, useReducer, useContext } from 'react';

export interface User {
  avatar: string;
  nickname: string;
  lang: string;
  code: string;
}

type Action =
  | { type: 'GET_USER' }
  | { type: 'SET_AVATAR'; avatar: string }
  | { type: 'SET_NICKNAME'; nickname: string }
  | { type: 'SET_LANG'; lang: string }
  | { type: 'SET_CODE'; code: string };

type UserDispatch = Dispatch<Action>;

const initialState: User = {
  avatar:
    'https://user-images.githubusercontent.com/92626813/192159152-f46ed76b-b365-4d72-a3d0-705f491f7808.png',
  nickname: '',
  lang: 'en',
  code: '',
};

const UserStateContext = createContext<User | undefined>(undefined);
const UserDispatchContext = createContext<UserDispatch | undefined>(undefined);

function userReducer(state: User, action: Action): User {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
      };
    case 'SET_AVATAR':
      return {
        ...state,
        avatar: action.avatar,
      };
    case 'SET_NICKNAME':
      return {
        ...state,
        nickname: action.nickname,
      };
    case 'SET_LANG':
      return {
        ...state,
        lang: action.lang,
      };
    case 'SET_CODE':
      return {
        ...state,
        code: action.code,
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={user}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
}

export const useUserState = (): User => {
  const state = useContext(UserStateContext);
  if (!state) throw new Error('UserStateContext Provider not found');
  return state;
};

export const useUserDispatch = (): UserDispatch => {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error('UserDispatchContext Provider not found');
  return dispatch;
};
