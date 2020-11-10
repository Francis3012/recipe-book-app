import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [DropdownDirective],
  imports: [FormsModule, ReactiveFormsModule, FlexLayoutModule],
  exports: [
    DropdownDirective,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
})
export class SharedModule {}
