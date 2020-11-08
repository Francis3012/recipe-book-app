import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShoppingEditComponent } from './../pages/shopping/shopping-edit/shopping-edit.component';
import { ShoppingComponent } from './../pages/shopping/shopping.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [ShoppingComponent, ShoppingEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ShoppingComponent }]),
    SharedModule,
  ],
})
export class ShoppingModule {}
