import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Recipes/models/recipe.mode';
import { RecipesService } from '../Services/recipes.service';

@Component({
  selector: 'app-Recipe-Detail',
  templateUrl: './Recipe-Detail.component.html',
  styleUrls: ['./Recipe-Detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  currentRecipeToDisplay: Recipe;

  constructor(private recipeService: RecipesService) { 
    this.recipeService.currentRecipe.subscribe((recipe: Recipe) => {
      this.currentRecipeToDisplay = recipe
    })
  }

  ngOnInit() {
  
  }

}
