import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../Shared/Model/Ingredient.model';

@Component({
  selector: 'app-Shopping-List',
  templateUrl: './Shopping-List.component.html',
  styleUrls: ['./Shopping-List.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Coffee", 5),
  ]

  constructor() { }

  ngOnInit() {
  }

}
