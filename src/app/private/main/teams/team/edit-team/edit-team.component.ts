import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {
  infoEditable: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onInfoSubmit() {
    
  }

  onInfoEdit(value) {
    if ( value ) {
      this.infoEditable = false;
    } else {
      this.infoEditable = !this.infoEditable;
    }
  }

}
