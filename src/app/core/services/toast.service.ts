import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService {

  private toastrConfig = {
    closeButton: true,
    timeOut: 5000,
    extendedTimeOut: 1000,
    enableHtml: true,
    progressBar: true,
    positionClass: 'toast-top-right',
  };

  constructor(
    private toastr: ToastrService
  ) {  }

  showError(message: string): void {
    this.toastr.error(message, null, this.toastrConfig);
  }

  showInfo(message: string): void {
    this.toastr.info(message, null, this.toastrConfig);
  }

  showSuccess(message: string): void {
    this.toastr.success(message, null, this.toastrConfig);
  }

  showWarning(message: string): void {
    this.toastr.warning(message, null, this.toastrConfig);
  }

}
