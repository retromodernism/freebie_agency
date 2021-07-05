import { BaseThunkType, InferActionsTypes } from "./../store";

const moduleName = "plug";

const PLUG_ACTION = `${moduleName}/PLUG_ACTION`;

const actions = {
  plugAction: (data: null) => ({ type: PLUG_ACTION, payload: data }),
};

const initialState = {
  plug: null,
};

const reducer = (state = initialState, { type, payload }: ActionsTypes) => {
  switch (type) {
    case PLUG_ACTION:
      return { ...state, plug: payload };
    default:
      return state;
  }
};

export default reducer;

export const plugAction =
  (payload: object): ThunkType =>
  async (dispatch: any) => {
    const data = null;
    dispatch(actions.plugAction(data));
  };

export type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
