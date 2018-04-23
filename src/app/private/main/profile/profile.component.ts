import { Component, OnInit } from '@angular/core';
import { slideLeft } from '../../../shared/animations/slideLeft.animation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [ slideLeft ],
  host: { '[@slideLeft]': '' }
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
