import { Component, OnInit } from '@angular/core';
import {Menu} from "../../models/Menu";
import {TypeMenu} from "../../models/TypeMenu";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {Restaurant} from "../../models/Restaurant";

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  menu!: Menu;
  typeMenus!:TypeMenu[];
  restaurants!:Restaurant[];
  private menuId: any;
  private routeSubscription: Subscription;


  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.routeSubscription = route.params.subscribe(params => this.menuId = params['menu_id']);

    this.httpService.getMenusTypes().subscribe(
      (data) => {
        this.typeMenus = data;
        console.log(this.typeMenus);
      },
      error => alert(error)
    );

    this.httpService.getAllRestaurants().subscribe(
      (data) => {
        this.restaurants = data;
        console.log(this.restaurants);
      },
      error => alert(error)
    );
    console.log(this.typeMenus);
    if (this.menuId != null && this.menuId.length > 0) {
      httpService.getMenusByMenuId(this.menuId).subscribe(
        (data) => {
          this.menu = data;
          console.log(this.menu);
        },
        error => {
          alert(error);
          this.menu = new Menu(0, "", new TypeMenu(0, ""), "", new Restaurant(-1, '', ''));
        }
      )
    } else {
      this.menu = new Menu(0, "", new TypeMenu(0, ""), "", new Restaurant(-1, '', ''));
    }
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.menu);
    if(this.menu.id > 0) {
      //update
      this.httpService.updateMenu(this.menu).subscribe(
        (data) => {
          alert('Menu success updated');
          window.location.href = 'restaurants/';
        }, error => alert("Error update")
      );
    } else {
      //create
      this.httpService.createMenu(this.menu).subscribe(
        (data) => {
          alert('Menu success created with id: ' + data.id);
          window.location.href = 'restaurants/';
        }, error => alert("Error create")
      );
    }
  }

  delete() {
    this.httpService.deleteMenu(this.menu).subscribe(
      (data: any) => {
        alert('Menu success deleted');
        window.location.href = 'restaurants/';
      }, error => alert("Error")
    )
  }
}
