import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../Services/recipes.service';
import { Recipe } from './models/recipe.mode';

@Component({
  selector: 'app-Recipes',
  templateUrl: './Recipes.component.html',
  styleUrls: ['./Recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  currentRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }


}
