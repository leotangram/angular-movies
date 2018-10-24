import { Action } from '@ngrx/store'
import { User } from './../../models/user'
import * as UserActions from './user.actions'

// initial state
const initialState: User = {
    username: null
}

// Creates the reducer to handle User Actions
export function UserReducer(state: User[] = [initialState], action: UserActions.Actions) {

    // Reducers
    switch (action.type) {
        case UserActions.USER_LOAD:
            const authLocalStorage = localStorage.getItem('auth');
            let user: User;
            if (authLocalStorage) {
                let auth = JSON.parse(authLocalStorage);
                if (auth.jwt && auth.user) {
                    return auth.user;
                }
            }
            console.log('There is not logged in user');
            return [...state];
        case UserActions.USER_CLEAR:
            localStorage.removeItem('auth');
            let user: User;
            return user;
        // tslint:disable-next-line:no-switch-case-fall-through
        default:
        return state;
    }
}