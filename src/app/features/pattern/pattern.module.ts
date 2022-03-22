import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternRoutingModule } from './pattern-routing.module';
import { PatternComponent } from './components/pattern/pattern.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PatternComponent
  ],
  imports: [
    CommonModule,
    PatternRoutingModule,
    SharedModule
  ]
})
export class PatternModule { }
