import { Component, OnInit } from '@angular/core';

// Store imports
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import * as UserActions from './store/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('App Init');
    this.store.dispatch(new UserActions.UserLoad());
  }
}
