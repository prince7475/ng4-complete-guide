import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../../../Shared/Model/Ingredient.model';
import { ShoppingListService } from '../Services/shopping-list.service';

@Component({
  selector: 'app-Shopping-List',
  templateUrl: './Shopping-List.component.html',
  styleUrls: ['./Shopping-List.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingredients: Ingredient[] = []

  private newIngredientsSub: Subscription

  constructor(private shoppingListService: ShoppingListService) { 
    
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.newIngredientsSub = this.shoppingListService.newIngredientsAdded.subscribe((newIngredients: Ingredient[]) => {
      this.ingredients = newIngredients;
    })
  }

  ngOnDestroy(){
    this.newIngredientsSub.unsubscribe()
  }



}
