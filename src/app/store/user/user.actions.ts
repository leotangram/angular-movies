import { Action } from '@ngrx/store'
import { User } from './../../models/user'

// Action types
export const USER_LOAD = '[USER] Load'
export const USER_CLEAR = '[USER] Clear'

// Actions declaration
export class UserLoad implements Action {
    readonly type = USER_LOAD
}

export class UserClear implements Action {
    readonly type = USER_CLEAR
}

// Export actions
export type Actions = UserLoad | UserClear;
