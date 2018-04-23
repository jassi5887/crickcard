import { Component, OnInit } from '@angular/core';
import { slideLeft } from '../../../shared/animations/slideLeft.animation';

@Component({
  selector: 'app-teams',
  animations: [ slideLeft ],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  host: { '[@slideLeft]': '' }
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
