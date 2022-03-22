import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent {

  @Input('index') index: number = 0;

  constructor() { }

  onClick(): void {
    alert(`Button ${this.index} clicked`)
  }

}
