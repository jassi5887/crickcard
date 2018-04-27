import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { PreviousUrlService } from '../../../../shared/prevUrl.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class CreateTeamComponent implements OnInit {

  constructor(private prevUrlService: PreviousUrlService) { }

  ngOnInit() {
  }

  onCreateSubmit() {}

}
