import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../../shared/animations/slideUp.animation';

@Component({
  selector: 'app-add-player',
  animations: [ slideUp ],
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
  host: { '[@slideUp]': '' }
})
export class AddPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
