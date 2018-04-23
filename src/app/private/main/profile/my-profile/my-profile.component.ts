import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
