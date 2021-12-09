import {TypeMenu} from "./TypeMenu";
import {Restaurant} from "./Restaurant";

export class Menu {
  id: number;
  name: string;
  typeMenu: TypeMenu;
  description: string;
  restaurant: Restaurant;

  constructor(id: number, name: string, typeMenu: TypeMenu, description: string, restaurant: Restaurant) {
    this.id = id;
    this.name = name;
    this.typeMenu = typeMenu;
    this.description = description;
    this.restaurant =restaurant;
  }
}
