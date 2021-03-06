import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthActions } from './action-types';

@Injectable({ providedIn: 'root' })
export class AuthEffects {

    login$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.Login),
            tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
        ),
        // _!_ never forget this line to prevent infinite loop
        { dispatch: false }
    );

    logout$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.Logout),
            tap(() => {
                localStorage.removeItem('user');
                this.router.navigateByUrl('/login');
            })
        ), { dispatch: false});

    constructor(private action$: Actions, private router: Router) { }
}
