import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Recipe } from '../../Recipes/models/recipe.mode';
import { RecipesService } from '../../Services/recipes.service';

@Component({
  selector: 'app-Recipe-Detail',
  templateUrl: './Recipe-Detail.component.html',
  styleUrls: ['./Recipe-Detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  currentRecipeToDisplay: Recipe = null;

  constructor(private recipeService: RecipesService,
    private activeRoute: ActivatedRoute,
    private router: Router
    ) { 

  }

  ngOnInit() {
  this.activeRoute.data.subscribe((data: Data) =>  {
    this.currentRecipeToDisplay = data['recipe']
  })
  }

  addListOfIngredientsToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.currentRecipeToDisplay.ingredients)
  }

}
