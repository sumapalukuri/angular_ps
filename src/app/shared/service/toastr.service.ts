import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(
    private _toastr: ToastrService
  ) { }

  showSuccess(message: string): void {
    this._toastr.success(message, 'Success!!');
  }

  showError(error: string): void {
    this._toastr.error(error, "OOPS!!", {
      timeOut: 4000, positionClass: 'toast-top-center'
    })
  }
}
