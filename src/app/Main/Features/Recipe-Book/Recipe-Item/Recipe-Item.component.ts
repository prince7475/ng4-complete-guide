import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../Recipes/models/recipe.mode';

@Component({
  selector: 'app-Recipe-Item',
  templateUrl: './Recipe-Item.component.html',
  styleUrls: ['./Recipe-Item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('currentRecipe') recipe: Recipe
  @Output('selectedRecipe') selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelectingRecipe(){
    this.selectedRecipe.emit(this.recipe)
  }

}
