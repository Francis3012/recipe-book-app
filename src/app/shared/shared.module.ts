import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [DropdownDirective],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [DropdownDirective, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
