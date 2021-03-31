import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.mode';

@Component({
  selector: 'app-Recipes',
  templateUrl: './Recipes.component.html',
  styleUrls: ['./Recipes.component.css']
})
export class RecipesComponent implements OnInit {

  currentRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onDisplayRecipeDetails(recipe:Recipe){
    this.currentRecipe = recipe;
  }

}
