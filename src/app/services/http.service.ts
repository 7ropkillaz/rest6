import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurant} from "../models/Restaurant";
import {Menu} from "../models/Menu";
import {TypeMenu} from "../models/TypeMenu";
import {Dish} from "../models/Dish";
import {TypeDish} from "../models/TypeDish";

const hostServer = "http://localhost";
const portServer = "8080";
const urlServer = hostServer + ':' + portServer;
const routes = new Map<string, string>([
  ['login', urlServer + '/auth/login'],
  ['logout', urlServer + '/auth/logout'],

  ['getAllRestaurants', urlServer + '/restaurants'],
  ['geRestaurantById', urlServer + '/restaurant?restaurant_id='],
  ['createRestaurant', urlServer + '/restaurants/create'],
  ['updateRestaurant', urlServer + '/restaurants/update'],
  ['deleteRestaurant', urlServer + '/restaurants/delete'],

  ['getMenusByRestaurantId', urlServer + '/menus?restaurant_id='],
  ['getAllMenus', urlServer + '/menus'],
  ['getMenuTypes', urlServer + '/menus/types'],
  ['getMenusByMenuId', urlServer + '/menu?menu_id='],
  ['createMenu', urlServer + '/menus/create'],
  ['updateMenu', urlServer + '/menus/update'],
  ['deleteMenu', urlServer + '/menus/delete'],

  ['getAllTypesDish', urlServer + '/type-dishes'],
  ['getDishById', urlServer + '/dish?dish_id='],
  ['getDishByMenuId', urlServer + '/dishes?menu_id='],
  ['createDish', urlServer + '/dish/create'],
  ['updateDish', urlServer + '/dish/update'],
  ['deleteDish', urlServer + '/dish/delete'],

]);


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(routes.get('login')!,{username: username, password: password});
  }

  /*logout() {
    return this.http.post<string>(routes.get('login')!,);
  }*/
  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(routes.get('getAllRestaurants')!);
  }

  getRestaurantById(restaurantId: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(routes.get('geRestaurantById')! + restaurantId);
  }
  createRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(routes.get('createRestaurant')!, restaurant);
  }
  updateRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(routes.get('updateRestaurant')!, restaurant);
  }
  deleteRestaurant(restaurant: Restaurant) {
    return this.http.delete(routes.get('deleteRestaurant')!, {body: restaurant});
  }


  getMenusByRestaurant(restaurant: Restaurant): Observable<Menu[]> {
    return this.http.get<Menu[]>(routes.get('getMenusByRestaurantId')! + restaurant.id);
  }
  getMenusByMenuId(menuId: number): Observable<Menu> {
    return this.http.get<Menu>(routes.get('getMenusByMenuId')! + menuId);
  }
  getMenusTypes(): Observable<TypeMenu[]> {
    return this.http.get<TypeMenu[]>(routes.get('getMenuTypes')!);
  }
  createMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(routes.get('createMenu')!, menu);
  }
  updateMenu(menu: Menu): Observable<Menu> {
    return this.http.put<Menu>(routes.get('updateMenu')!, menu);
  }
  deleteMenu(menu: Menu) {
    return this.http.delete(routes.get('deleteRestaurant')!, {body: menu});
  }
  getAllMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(routes.get('getMenuTypes')!);
  }


  getDishByMenuId(menuId: number): Observable<Dish[]> {
    return this.http.get<Dish[]>(routes.get('getDishByMenuId')!+ menuId);
  }
  getDishById(dishId: number): Observable<Dish> {
    return this.http.get<Dish>(routes.get('getDishById')!+ dishId);
  }
  createDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(routes.get('createDish')!, dish);
  }
  updateDish(dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(routes.get('updateDish')!, dish);
  }
  deleteDish(dish: Dish) {
    return this.http.delete(routes.get('deleteDish')!, {body: dish});
  }

  getAllTypeDishes(): Observable<TypeDish[]> {
    return this.http.get<TypeDish[]>(routes.get('getAllTypesDish')!);
  }


}
