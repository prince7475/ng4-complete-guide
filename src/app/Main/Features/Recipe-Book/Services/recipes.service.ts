import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../../../Shared/Model/Ingredient.model';
import { ShoppingListService } from '../../Shopping-List/Services/shopping-list.service';
import { Recipe } from '../Recipes/models/recipe.mode';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe('Ghanian Jollof', "The best Jollof out there", "https://www.demandafrica.com/wp-content/uploads/2018/06/Nigerian-jollof.jpeg", [new Ingredient("food 2", 4),new Ingredient("Food", 1)]),
  ]
  currentRecipe = new EventEmitter<Recipe>();

constructor(private shoppingListService: ShoppingListService) { }

onDisplayRecipeDetails(recipe:Recipe){
  this.currentRecipe.emit(recipe)
}

getRecipes(){
  return this.recipes.slice()
}

addIngredientsToShoppingList(Ingredients : Ingredient[]){
  this.shoppingListService.onAddListOfIngredients(Ingredients)
}

}
