import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TableModel } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  marklist$:BehaviorSubject<TableModel[]> = new BehaviorSubject<TableModel[]>([]);

  constructor(private _http: HttpClient) { }

  getMarkList(): Observable<TableModel[]> {
    return this._http.get<TableModel[]>(`${environment.backendUrl}/markslist`);
  }

  setInitialMarklist(list: TableModel[]): void {
    this.marklist$.next(list);
  }
}
