import { concatMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesHttpService } from './services/courses-http.service';
import { Injectable } from '@angular/core';
import { CoursesActions } from './action-types';

@Injectable({ providedIn: 'root' })
export class CoursesEffects {

    constructor(private actions$: Actions, private courseHttpService: CoursesHttpService) { }

    loadCourses$ = createEffect(
        () => this.actions$.pipe(
                ofType(CoursesActions.loadingAllCourses),
                concatMap(action => this.courseHttpService.findAllCourses()),
                map(courses => CoursesActions.allCoursesLoaded({ courses }))
            )
    );
}
