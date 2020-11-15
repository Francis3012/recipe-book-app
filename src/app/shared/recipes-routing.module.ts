import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { RecipesComponent } from './../pages/recipes/recipes.component';
import { RecipeDetailComponent } from './../pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './../pages/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './../pages/recipes/recipe-start/recipe-start.component';

const routes: Routes = [
    {
        path: '',
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecipesRoutingModule {}
