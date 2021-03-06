import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { compareCourses, Course } from '../model/course';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { map, shareReplay } from 'rxjs/operators';
import { AppState } from '../../reducers';
import { selectAdvancedCourses, selectAllCourses, selectBeginnerCourses, selectPromoTotal } from '../courses.selectors';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  promoTotal$: Observable<number>;

  loading$: Observable<boolean>;

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;


  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>) {

  }

  ngOnInit() {
    this.reload();
  }

  reload() {

    const courses$ = this.store.select(selectAllCourses);

    this.loading$ = courses$.pipe(map(courses => !!courses));

    this.beginnerCourses$ = this.store.select(selectBeginnerCourses);


    this.advancedCourses$ = this.store.select(selectAdvancedCourses);

    this.promoTotal$ = this.store.select(selectPromoTotal);

  }

  onAddCourse() {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Create Course',
      mode: 'create'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);

  }


}
