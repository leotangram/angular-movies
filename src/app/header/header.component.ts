import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import * as UserActions from '../store/user/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  // @Input() user: User;
  // tslint:disable-next-line:no-output-on-prefix
  // @Output('onLogout') onLogout = new EventEmitter();

  constructor(private _store: Store<AppState>) {

  }

  ngOnInit() {
    this._store.select('user').subscribe(user => {
      console.log(this.user);
      this.user = user;
      
    });
  }

  logout () {
    this._store.dispatch(new UserActions.UserClear());
  }

}
