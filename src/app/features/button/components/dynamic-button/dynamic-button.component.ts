import { Component } from '@angular/core';
import { BUTTON_COUNT } from '../../constants/button-constant';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.scss']
})
export class DynamicButtonComponent {

  buttonCount = BUTTON_COUNT;

  constructor() { }

}
