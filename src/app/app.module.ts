import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { RouterModule ,Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes=[
  {
    path:"",component:IndexComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"recipe",component:RecipeComponent
  },
  {
    path:"contact",component:ContactComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    AboutComponent,
    RecipeComponent,
    ContactComponent
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
