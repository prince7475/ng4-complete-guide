import { Component } from '@angular/core';
import { Recipe } from './Main/Features/Recipe-Book/Recipes/models/recipe.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayCurrentFeature = 'recipe'

  onNavigate(feature: string){
    this.displayCurrentFeature = feature;
  }

}
