import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { PreviousUrlService } from '../../../../shared/prevUrl.service';

@Component({
  selector: 'app-team',
  animations: [ slideUp ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  host: { '[@slideUp]': '' }
})
export class TeamComponent implements OnInit {

  constructor(public prevUrlService: PreviousUrlService) { }

  ngOnInit() {
  }

}
