import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListMenuRestarauntPageComponent } from './pages/list-menu-restaraunt-page/list-menu-restaraunt-page.component';
import { ListDishesMenuPageComponent } from './pages/list-dishes-menu-page/list-dishes-menu-page.component';
import { RestarauntPageComponent } from './pages/restaraunt-page/restaraunt-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { TypeMenuPageComponent } from './pages/type-menu-page/type-menu-page.component';
import { DishPageComponent } from './pages/dish-page/dish-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TypeDishComponent } from './pages/type-dish/type-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListMenuRestarauntPageComponent,
    ListDishesMenuPageComponent,
    RestarauntPageComponent,
    MenuPageComponent,
    TypeMenuPageComponent,
    DishPageComponent,
    LoginPageComponent,
    HeaderComponent,
    TypeDishComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
