import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../shared/animations/slideUp.animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
