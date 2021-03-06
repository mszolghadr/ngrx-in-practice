import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  // router: routerReducer
};

export function logger(reducer: ActionReducer<any>)
  : ActionReducer<any> {
  return (state, action) => {
    console.log('state before: ', state);
    console.log('action before: ', action);

    // _!_ never forget this line to call next reducer
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [/*logger*/] : [];
