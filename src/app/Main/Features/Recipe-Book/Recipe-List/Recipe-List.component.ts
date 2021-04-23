import { Component, OnInit } from '@angular/core';
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
  }


}
