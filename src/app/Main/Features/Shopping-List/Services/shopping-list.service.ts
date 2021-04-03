import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Model/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {


  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Coffee", 5),
  ]

  newIngredientsAdded = new EventEmitter<Ingredient[]>()

constructor() { }

getIngredients(): Ingredient[]{
  return this.ingredients.slice()
}

onAddIngredients(ingredient: Ingredient){
  this.ingredients.push(ingredient)
  this.newIngredientsAdded.emit(this.ingredients.slice())
}
onAddListOfIngredients(ingredients: Ingredient[] ){
this.ingredients.push(...ingredients)
this.newIngredientsAdded.emit(this.ingredients.slice())
}

}
