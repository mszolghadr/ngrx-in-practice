import { AppState } from './../reducers/index';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { tap, filter, first, finalize } from 'rxjs/operators';
import { loadingAllCourses } from './courses.actions';
import { Injectable } from '@angular/core';
import { selectAreCoursesLoaded } from './courses.selectors';

@Injectable()
export class CoursesResolver implements Resolve<any> {

    loading = false;

    constructor(private store: Store<AppState>) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(selectAreCoursesLoaded),
            tap(areCoursesLoaded => {
                if (!this.loading && !areCoursesLoaded) {
                    this.loading = true;
                    this.store.dispatch(loadingAllCourses());
                }
            }),
            filter(areCoursesLoaded => areCoursesLoaded),
            first(),
            finalize(() => {
                this.loading = false;
            })
        );
    }
}
