import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { MarksheetComponent } from './components/marksheet/marksheet.component';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MarksheetComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class TableModule { }
