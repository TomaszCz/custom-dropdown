import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureWithDropdownRoutingModule } from './feature-with-dropdown-routing.module';
import { PageComponent } from './components/page/page.component';
import { CustomDropdownComponent } from '../shared/custom-dropdown/custom-dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageComponent, CustomDropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeatureWithDropdownRoutingModule
  ]
})
export class FeatureWithDropdownModule { }
