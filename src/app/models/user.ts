export interface User {
    _id?: string;
    username?: string;
    email?: string;
    password?: string;
}

export class Auth {
    // Token del usuario
    jwt: string;
    user: User;
}
