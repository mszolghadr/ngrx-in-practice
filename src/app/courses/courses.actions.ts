import { Course } from './model/course';
import { createAction, props } from '@ngrx/store';

export const loadingAllCourses = createAction(
    '[Courses Resolver] Loading All Courses'
);

export const allCoursesLoaded = createAction(
    '[LoadingAllCourses SideEffect] All Courses Loaded',
    props<{ courses: Course[] }>()
);
