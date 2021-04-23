import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './Main/Features/Recipe-Book/Recipe-List/Recipe-List.component';
import { RecipesComponent } from './Main/Features/Recipe-Book/Recipes/Recipes.component';
import { ShoppingListEditComponent } from './Main/Features/Shopping-List/Shopping-List-Edit/Shopping-List-Edit.component';
import { ShoppingListComponent } from './Main/Features/Shopping-List/Shopping-List/Shopping-List.component';
import { HeaderComponent } from './Main/Header/Header/Header.component';
import { DropdownDirective } from './Shared/directives/dropdown/dropdown.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesService } from './Main/Features/Recipe-Book/Services/recipes.service';
import { AppRoutingModule } from './Routes/app-routing-module';
import { RecipeStartComponent } from './Main/Features/Recipe-Book/Recipe-List/Recipe-start/recipe-start.component';
import { RecipeItemComponent } from './Main/Features/Recipe-Book/Recipe-List/Recipe-Item/Recipe-Item.component';
import { RecipeDetailComponent } from './Main/Features/Recipe-Book/Recipe-List/Recipe-Detail/Recipe-Detail.component';
import { RecipeEditComponent } from './Main/Features/Recipe-Book/Recipe-edit/Recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
