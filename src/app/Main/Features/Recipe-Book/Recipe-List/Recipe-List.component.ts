import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../Recipes/models/recipe.mode';
import { RecipesService } from '../Services/recipes.service';

@Component({
  selector: 'app-Recipe-List',
  templateUrl: './Recipe-List.component.html',
  styleUrls: ['./Recipe-List.component.css']

})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes()
    this.onSelectedRecipe(this.recipes[0])
  }

  onSelectedRecipe(recipe: Recipe){
    this.recipesService.onDisplayRecipeDetails(recipe)
  }

}
