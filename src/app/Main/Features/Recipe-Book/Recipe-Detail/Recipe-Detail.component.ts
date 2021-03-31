import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Recipe-Detail',
  templateUrl: './Recipe-Detail.component.html',
  styleUrls: ['./Recipe-Detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('currentRecipeToDisplay') currentRecipeToDisplay;

  constructor() { }

  ngOnInit() {
  }

}
