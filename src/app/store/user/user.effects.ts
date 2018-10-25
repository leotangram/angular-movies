import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UserActions from './user.actions'
import { switchMap, tap, map, concatMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { User, Auth } from 'src/app/models/user';


@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private userService: UserService) {}

    @Effect({ dispatch: false })
    loadUser$: Observable<Action> = this.actions$.pipe(
        ofType(UserActions.USER_LOAD),
        
    );

    //Login
    @Effect()
    loginUser$: Observable<Action> = this.actions$.pipe(
        ofType(UserActions.USER_LOGIN),
        switchMap((action: UserActions.UserLogin) => {
            return this.userService.login(action.user).pipe(
                map(auth => {
                    localStorage.setItem('auth', JSON.stringify(auth));
                    return new UserActions.UserLoad();
                })
            )
        })
    )
}