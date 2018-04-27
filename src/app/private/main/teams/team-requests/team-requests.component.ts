import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { PreviousUrlService } from '../../../../shared/prevUrl.service';

@Component({
  selector: 'app-team-requests',
  templateUrl: './team-requests.component.html',
  styleUrls: ['./team-requests.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class TeamRequestsComponent implements OnInit {

  constructor(public prevUrlService: PreviousUrlService) { }

  ngOnInit() {
  }

}
