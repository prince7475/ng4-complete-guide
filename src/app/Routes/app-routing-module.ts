import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "../Main/Features/Recipe-Book/Recipe-Detail/Recipe-Detail.component";
import { RecipeStartComponent } from "../Main/Features/Recipe-Book/recipe-start/recipe-start.component";
import { RecipesComponent } from "../Main/Features/Recipe-Book/Recipes/Recipes.component";
import { RecipesResolver } from "../Main/Features/Recipe-Book/Services/recipes-resolver.service";
import { ShoppingListComponent } from "../Main/Features/Shopping-List/Shopping-List/Shopping-List.component";

const appRoutes : Routes = [
    { 
    path: '',  
    redirectTo:'/recipes', 
    pathMatch: 'full'
       
    },

    { 
    path: 'recipes',  
    component:RecipesComponent, 
    children: [
        {path: '', component: RecipeStartComponent},
        {path: ':id', component:RecipeDetailComponent, resolve: {recipe: RecipesResolver } }
    ]
    },

    {
    path: 'shopping-list', 
    component: ShoppingListComponent
    },

    {
    path:'**',
    redirectTo:'/'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: false})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}