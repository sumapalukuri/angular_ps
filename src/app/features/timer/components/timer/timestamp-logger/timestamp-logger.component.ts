import { Component, Input, OnInit } from '@angular/core';
import { UpdateCounter } from '../../../models/counter.model';

@Component({
  selector: 'app-timestamp-logger',
  templateUrl: './timestamp-logger.component.html',
  styleUrls: ['./timestamp-logger.component.scss']
})
export class TimestampLoggerComponent implements OnInit {

  @Input('counterTimeLogged')counterTimeLogged: UpdateCounter[] = [] as UpdateCounter[];

  constructor() { }

  ngOnInit(): void {
  }

}
