import { Component, OnInit } from '@angular/core';
import { slideLeft } from '../../../shared/animations/slideLeft.animation';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  animations: [ slideLeft ],
  host: { '[@slideLeft]': '' }
})
export class MatchesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
