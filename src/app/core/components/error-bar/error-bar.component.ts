import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-bar',
  templateUrl: './error-bar.component.html',
  styleUrls: ['./error-bar.component.scss']
})
export class ErrorBarComponent implements OnInit {

  @Input() errorMessage: string = 'Something went wrong!';

  constructor() { }

  ngOnInit() {
  }

}
