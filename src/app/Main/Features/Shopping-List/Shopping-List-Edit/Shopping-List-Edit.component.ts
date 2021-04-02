import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../../../Shared/Model/Ingredient.model';

@Component({
  selector: 'app-Shopping-List-Edit',
  templateUrl: './Shopping-List-Edit.component.html',
  styleUrls: ['./Shopping-List-Edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output('ingredientAdded') ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
  const ingName = this.nameInputRef.nativeElement.value
  const ingAmount = this.amountInputRef.nativeElement.value
  this.ingredientAdded.emit({name: ingName, amount: ingAmount})
  }

}
