import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../Recipes/models/recipe.mode';

@Component({
  selector: 'app-Recipe-List',
  templateUrl: './Recipe-List.component.html',
  styleUrls: ['./Recipe-List.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output('displayRecipeDetails') displayRecipeDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Ghanian Jollof', "The best Jollof out there", "https://www.demandafrica.com/wp-content/uploads/2018/06/Nigerian-jollof.jpeg"),
    new Recipe('Rice', "The best Rice out there", "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2020/04/22/coronavirus-and-obesity-doctors-take-aim-at-food-industry-over-poor-diets/10933380-3-eng-GB/Coronavirus-and-obesity-Doctors-take-aim-at-food-industry-over-poor-diets_wrbm_large.jpg"),
    new Recipe('Meat Ball', "The best Meat Ball out there", "https://civileats.com/wp-content/uploads/2020/09/200917-ultra-processed-foods-big-food-conglomerates-junk-food-health-nutrition-waste-packaging-1-credit-mike-mozart.jpg")
  ];



  constructor() { }

  ngOnInit() {
    this.displayRecipeDetails.emit(this.recipes[0])
  }

  onSelectedRecipe(recipe: Recipe){
    this.displayRecipeDetails.emit(recipe)
  }
}
