import { tap } from 'rxjs/operators';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { IsLoggedIn } from './auth.selectors';
import { AppState } from '../reducers';

@Injectable()
export class AuthGuard implements CanActivate {
    /**
     *
     */
    constructor(private store: Store<AppState>, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.store.pipe(
            select(IsLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }
}
