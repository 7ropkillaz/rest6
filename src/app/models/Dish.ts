import {Menu} from "./Menu";
import {TypeDish} from "./TypeDish";

export class Dish {
  id: number;
  name: string;
  ingredients: string;
  ves: string;
  price: string;
  menu: Menu;
  typeDish: TypeDish;


  constructor(id: number, name: string, ingredients: string, ves: string, price: string, menu: Menu, typeDish: TypeDish) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.ves = ves;
    this.price = price;
    this.menu = menu;
    this.typeDish = typeDish;
  }
}
