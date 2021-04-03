import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../Shared/Model/Ingredient.model';
import { ShoppingListService } from '../Services/shopping-list.service';

@Component({
  selector: 'app-Shopping-List',
  templateUrl: './Shopping-List.component.html',
  styleUrls: ['./Shopping-List.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[] = []
  constructor(private shoppingListService: ShoppingListService) { 
    
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.newIngredientsAdded.subscribe((newIngredients: Ingredient[]) => {
      this.ingredients = newIngredients;
    })
  }



}
