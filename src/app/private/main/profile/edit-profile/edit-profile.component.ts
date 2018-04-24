import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';

@Component({
  selector: 'app-edit-profile',
  animations: [ slideUp ],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  host: { '[@slideUp]': '' }
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onProfileEditSubmit() {
    
  }

}
