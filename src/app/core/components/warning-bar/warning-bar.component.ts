import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warning-bar',
  templateUrl: './warning-bar.component.html',
  styleUrls: ['./warning-bar.component.scss']
})
export class WarningBarComponent implements OnInit {

  @Input() warningMessage: string = 'Something went wrong!';

  constructor() { }

  ngOnInit() {
  }

}
