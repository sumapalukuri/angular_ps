import { Component, OnInit } from '@angular/core';
import { TableModel } from '../../models/table.model';
import { TableService } from '../../service/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  marklist: TableModel[] = [];
  originalMarklist: TableModel[] = [];
  tableHeaders: string[] = [];
  clickCount: number = 1;

  constructor(private _tableService: TableService) { }

  ngOnInit(): void {
    this._tableService.getMarkList().subscribe(response => {
      this.marklist = response;
      this.tableHeaders = Object.keys(response[0]);
      localStorage.setItem('markList', JSON.stringify(response));
    });

  }

  sortBy(header: string) {
    this.sortData(this.clickCount, header)
  }


  sortData(count: number, header: string): void {
    let marks = localStorage.getItem('markList');
    this.originalMarklist = marks !== null ? JSON.parse(marks): [];
    switch(header) {
      case 'name': {
        this.marklist = count === 1 ? 
          this.marklist.sort((a, b) => a.name.toLowerCase() !== b.name.toLowerCase() ? 
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 : 0): 
          count === 2 ? this.marklist.sort((a, b) => a.name.toLowerCase() !== b.name.toLowerCase() ? 
          a.name.toLowerCase() < b.name.toLowerCase() ? 1 : 0 : -1) : this.originalMarklist;
        this.clickCounter();
        break;
      }
      case 'class': {
        this.marklist = count === 1 ? 
          this.marklist.sort((a, b) => a.class - b.class): count === 2 ? 
          this.marklist.sort((a,b) => b.class - a.class) : 
          this.originalMarklist;
        this.clickCounter();
        break;
      }
      case 'section': {
        this.marklist = count === 1 ? 
          this.marklist.sort((a, b) => a.section.toLowerCase() !== b.section.toLowerCase() ? 
          a.section.toLowerCase() < b.section.toLowerCase() ? -1 : 1 : 0): count === 2 ?
          this.marklist.sort((a, b) => a.section.toLowerCase() !== b.section.toLowerCase() ? 
          a.section.toLowerCase() < b.section.toLowerCase() ? 1 : -1 : 0) : this.originalMarklist;
        this.clickCounter();
        break;
      }
      case 'sub1': {
        this.marklist = count === 1 ? 
        this.marklist.sort((a, b) => a.sub1 - b.sub1): count === 2 ? 
          this.marklist.sort((a,b) => b.sub1 - a.sub1) : this.originalMarklist;
        this.clickCounter();
        break;
      }
      case 'sub2': {
        this.marklist = count === 1 ? this.marklist.sort((a, b) => a.sub2 - b.sub2): count === 2 ? 
          this.marklist.sort((a,b) => b.sub2 - a.sub2) : this.originalMarklist;
        this.clickCounter();
        break;
      }
      case 'sub3': {
        this.marklist = count === 1 ? this.marklist.sort((a, b) => a.sub3 - b.sub3): count === 2 ? 
          this.marklist.sort((a,b) => b.sub3 - a.sub3) : this.originalMarklist;
        this.clickCounter();
        break;
      }
    }
  }


  clickCounter(): void {
    if(this.clickCount < 3) {
      this.clickCount +=1;
    } else {
      this.clickCount = 1;
    }
  }


}
