import { SharedModule } from './shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './../pages/recipes/recipes.component';
import { RecipeListComponent } from './../pages/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './../pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './../pages/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './../pages/recipes/recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeListComponent,
  ],
  imports: [CommonModule, RouterModule, RecipesRoutingModule, SharedModule],
})
export class RecipeModule {}
