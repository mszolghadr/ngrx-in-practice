import { tap, filter, first } from 'rxjs/operators';
import { CoursesEntityService } from './services/courses-entity.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CoursesResolver implements Resolve<boolean> {

    constructor(private entityService: CoursesEntityService) { }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.entityService.loaded$.pipe(
            tap(loaded => {
                if (!loaded) {
                    this.entityService.getAll();
                }
            }),
            filter(loaded => !!loaded),
            first());
    }

}
