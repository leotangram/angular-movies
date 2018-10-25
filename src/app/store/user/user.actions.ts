import { Action } from '@ngrx/store';
import { User } from './../../models/user';

// Action types
export const USER_CLEAR = '[USER] Clear';
export const USER_LOAD = '[USER] Load';
export const USER_LOGIN = '[USER] Login';
export const USER_SET = '[USER] Set';

// Actions declaration
export class UserLoad implements Action {
    readonly type = USER_LOAD;
}

export class UserLogin implements Action {
    readonly type = USER_LOGIN;
    constructor(public user: User) { }
}
export class UserSet implements Action {
    readonly type = USER_SET;
    constructor(public user: User) {}
}

export class UserClear implements Action {
    readonly type = USER_CLEAR;
}

// Export actions
export type Actions = UserLoad|UserLogin|UserSet;
