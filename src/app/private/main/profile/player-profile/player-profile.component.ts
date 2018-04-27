import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { PreviousUrlService } from '../../../../shared/prevUrl.service';

@Component({
  selector: 'app-player-profile',
  animations: [slideUp],
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss'],
  host: { '[@slideUp]': '' }
})
export class PlayerProfileComponent implements OnInit {

  constructor(public prevUrlService: PreviousUrlService) { }

  ngOnInit() {
  }

}
