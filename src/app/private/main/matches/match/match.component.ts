import { Component, OnInit } from '@angular/core';
import { PreviousUrlService } from '../../../../shared/prevUrl.service';
import { slideUp } from '../../../../shared/animations/slideUp.animation';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class MatchComponent implements OnInit {

  constructor(public prevUrlService: PreviousUrlService) { }

  ngOnInit() {
  }

}
