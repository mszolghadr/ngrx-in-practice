import { Course } from './model/course';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const loadingAllCourses = createAction(
    '[Courses Resolver] Loading All Courses'
);

export const allCoursesLoaded = createAction(
    '[LoadingAllCourses SideEffect] All Courses Loaded',
    props<{ courses: Course[] }>()
);

export const courseUpdated = createAction(
    '[Update Dialogue] Update Course',
    props<{update: Update<Course>}>()
);
