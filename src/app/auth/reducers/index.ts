import { User } from './../model/user.model';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer: ActionReducer<AuthState, Action> = createReducer(initialAuthState,
  on(AuthActions.Login, (state, action) => {
    return {
      user: action.user
    };
  }),
  on(AuthActions.Logout, (state, action) => {
    return {
      user: undefined
    };
  })
);

