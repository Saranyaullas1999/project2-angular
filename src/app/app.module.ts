import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { RouterModule ,Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes=[
  {
    path:"",component:IndexComponent
  },
  {
    path:"about",component:AboutComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
