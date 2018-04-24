import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../shared/animations/slideUp.animation';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class MatchesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
