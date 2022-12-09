export enum DishType {
  ENTREE = "ENTREE",
  PLAT = "PLAT",
  DESSERT = "DESSERT"
}

export default interface Dish {
  id: number;
  type: DishType;
  name: string;
  done : boolean;
  number: number;
}
