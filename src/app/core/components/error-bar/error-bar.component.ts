import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-bar',
  templateUrl: './error-bar.component.html',
  styleUrls: ['./error-bar.component.scss']
})
export class ErrorBarComponent implements OnInit {

  @Input() message: string = 'Something went wrong!';
  @Input() title: string = 'Error';

  constructor() { }

  ngOnInit() {
  }

}
