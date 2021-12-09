import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ListMenuRestarauntPageComponent} from "./pages/list-menu-restaraunt-page/list-menu-restaraunt-page.component";
import {ListDishesMenuPageComponent} from "./pages/list-dishes-menu-page/list-dishes-menu-page.component";
import {TypeMenuPageComponent} from "./pages/type-menu-page/type-menu-page.component";
import {RestarauntPageComponent} from "./pages/restaraunt-page/restaraunt-page.component";
import {MenuPageComponent} from "./pages/menu-page/menu-page.component";
import {DishPageComponent} from "./pages/dish-page/dish-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'restaurant/:id/menus',
    component: ListMenuRestarauntPageComponent
  },
  {
    path: 'menu/:id/dishes',
    component: ListDishesMenuPageComponent
  },
  {
    path: 'type-menu',
    component: TypeMenuPageComponent
  },
  {
    path: 'restaurant/:restaurant_id',
    component: RestarauntPageComponent
  },
  {
    path: 'restaurant',
    component: RestarauntPageComponent
  },
  {
    path: 'menu/:menu_id',
    component: MenuPageComponent
  },
  {
    path: 'menu',
    component: MenuPageComponent
  },
  {
    path: 'dish/:dish_id',
    component: DishPageComponent
  },
  {
    path: 'dish',
    component: DishPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
