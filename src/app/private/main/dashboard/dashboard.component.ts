import { Component, OnInit } from '@angular/core';
import { slideLeft } from '../../../shared/animations/slideLeft.animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ slideLeft ],
  host: { '[@slideLeft]': '' }
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
