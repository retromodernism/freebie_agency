import { createStore, applyMiddleware, compose, Action } from "redux";
import ThunkMiddleware, { ThunkAction } from "redux-thunk";
import reduxLogger from "redux-logger";
import rootReducers from "./modules";

const isProduction = process.env.NODE_ENV === "production";

const configureStore = isProduction
  ? (preloadedState = {}, middlewares = []) =>
      createStore(
        rootReducers,
        preloadedState,
        compose(applyMiddleware(...middlewares, ThunkMiddleware))
      )
  : (preloadedState = {}, middlewares = []) =>
      createStore(
        rootReducers,
        preloadedState,
        compose(
          applyMiddleware(...middlewares, ThunkMiddleware, reduxLogger),
          (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
      );

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;
export default configureStore;
export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>;
