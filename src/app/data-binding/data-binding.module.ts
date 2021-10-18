import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    OnewayBindingComponent,
    TwowayBindingComponent,
  ],
  exports: [DataBindingComponent],
  imports: [CommonModule],
})
export class DataBindingModule {}
