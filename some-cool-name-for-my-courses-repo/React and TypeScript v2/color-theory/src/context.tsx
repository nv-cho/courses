import { Dispatch, PropsWithChildren, useReducer } from 'react';
import {
  AdjustColorActions,
  colorReducer,
  initialState,
} from './color-reducer';
import { createContext } from './create.context';

type CreateContextState = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

// export const ColorContext = createContext<CreateContextState>({
//   hexColor: '#000000',
// } as CreateContextState);

const [useContext, ContextProvider] = createContext<CreateContextState>();

export const useColorContext = useContext;

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
  );
};
