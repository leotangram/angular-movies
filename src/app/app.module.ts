import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './services/user.service';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

// Implementation of Redux
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './store/user/user.reducer';

// Imports for NgRX Devel Tool
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

//Effects implementation
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user/user.effects';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    UserComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      user: UserReducer
    }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
