import { rgb } from 'color-convert';

export type UpdateHEXColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [number, number, number];
  };
};

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#000000',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: UpdateHEXColorAction | UpdateRGBColorAction,
): ColorState => {
  if (action.type === 'update-hex-color') {
    return {
      ...state,
      hexColor: action.payload.hexColor,
    };
  }

  if (action.type === 'update-rgb-color') {
    return {
      ...state,
      hexColor: rgb.hex(action.payload.rgb),
    };
  }

  return state;
};
