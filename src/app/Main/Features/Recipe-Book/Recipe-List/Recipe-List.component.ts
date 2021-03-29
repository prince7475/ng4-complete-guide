import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipes/models/recipe.mode';

@Component({
  selector: 'app-Recipe-List',
  templateUrl: './Recipe-List.component.html',
  styleUrls: ['./Recipe-List.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Ghanian Jollof', "The best Jollof out there", "https://www.demandafrica.com/wp-content/uploads/2018/06/Nigerian-jollof.jpeg"),
    new Recipe('Ghanian Jollof', "The best Jollof out there", "https://www.demandafrica.com/wp-content/uploads/2018/06/Nigerian-jollof.jpeg"),
    new Recipe('Ghanian Jollof', "The best Jollof out there", "https://www.demandafrica.com/wp-content/uploads/2018/06/Nigerian-jollof.jpeg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
