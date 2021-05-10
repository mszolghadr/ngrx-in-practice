import { User } from './model/user.model';
import { createAction, props } from '@ngrx/store';

export const Login = createAction('[Login Page] User Login', props<{ user: User }>());

export const Logout = createAction('[Top Nav] Logout');
