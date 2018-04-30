import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { PreviousUrlService } from '../../../../shared/prevUrl.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class CreateMatchComponent implements OnInit {
  arrowDown: boolean = false;
  noOpponent: boolean = false;

  constructor(public prevUrlService: PreviousUrlService) { }

  ngOnInit() {
  }

  rotateArrow() {
    this.arrowDown = !this.arrowDown;
  }

  onCreateMatch() {}

  onScoreCardTypeSelected(e) {
    if (e.target.value === 'withoutOp') {
      this.noOpponent = true;
    } else {
      this.noOpponent = false;
    }
  }

}
