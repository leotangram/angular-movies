import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Store } from '@ngrx/store';
import * as UserActions from '../store/user/user.actions';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  user: User;

  constructor(private userService: UserService, private store: Store<AppState>) { }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  login(): void {
    this.store.dispatch(new UserActions.UserLogin(this.user));
  }

}
