import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { DynamicButtonComponent } from './components/dynamic-button/dynamic-button.component';
import { CommonButtonComponent } from './components/dynamic-button/common-button/common-button.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DynamicButtonComponent,
    CommonButtonComponent,
  ],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ButtonModule { }
