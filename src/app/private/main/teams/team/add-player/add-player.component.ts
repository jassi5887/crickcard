import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../../shared/animations/slideUp.animation';
import { PreviousUrlService } from '../../../../../shared/prevUrl.service';

@Component({
  selector: 'app-add-player',
  animations: [ slideUp ],
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
  host: { '[@slideUp]': '' }
})
export class AddPlayerComponent implements OnInit {

  constructor(private prevUrlService: PreviousUrlService) { }

  ngOnInit() {
  }

}
