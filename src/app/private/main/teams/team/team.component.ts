import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';

@Component({
  selector: 'app-team',
  animations: [ slideUp ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  host: { '[@slideUp]': '' }
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
