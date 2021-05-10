import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './reducers';

const authState = createFeatureSelector<AuthState>('auth');

const IsLoggedOut = createSelector(
    authState,
    auth => !auth.user
);

export const IsLoggedIn = createSelector(
    IsLoggedOut,
    loggedout => !loggedout
);
