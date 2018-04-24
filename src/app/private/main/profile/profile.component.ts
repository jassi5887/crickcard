import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../shared/animations/slideUp.animation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
