import { rgb } from 'color-convert';

type UpdateHEXColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [number, number, number];
  };
};

type ColorState = {
  hexColor: string;
};

export type AdjustColorActions = UpdateHEXColorAction | UpdateRGBColorAction;

export const initialState: ColorState = {
  hexColor: '#000000',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
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
      hexColor: '#' + rgb.hex(action.payload.rgb),
    };
  }

  return state;
};
