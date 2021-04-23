import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../../../Shared/Model/Ingredient.model';
import { ShoppingListService } from '../../Shopping-List/Services/shopping-list.service';
import { Recipe } from '../Recipes/models/recipe.mode';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe(1, 'Ghanian Jollof 1', "The best Jollof out there 1", "https://www.demandafrica.com/wp-content/uploads/2018/06/Nigerian-jollof.jpeg", [new Ingredient("food 2", 4),new Ingredient("Food", 1)]),
    new Recipe(2,'Ghanian Jollof 2', "The best Jollof out there 2", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636", [new Ingredient("food 2", 4),new Ingredient("Food", 1)]),
    new Recipe(3,'Ghanian Jollof 3', "The best Jollof out there 3", "https://i.ytimg.com/vi/0SPwwpruGIA/maxresdefault.jpg", [new Ingredient("food 2", 4),new Ingredient("Food", 1)]),
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

getRecipeById(id: number): Recipe{
  return this.recipes.find((recipe) => recipe.id === id)
}

}
