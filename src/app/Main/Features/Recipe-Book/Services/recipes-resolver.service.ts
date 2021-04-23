import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../Recipes/models/recipe.mode';
import { RecipesService } from './recipes.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolver implements Resolve<Recipe> {

    constructor(private recipesService: RecipesService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
        return this.recipesService.getRecipeById(+route.params['id']);
    }
}