import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../shared/animations/slideUp.animation';

@Component({
  selector: 'app-teams',
  animations: [ slideUp ],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  host: { '[@slideUp]': '' }
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
