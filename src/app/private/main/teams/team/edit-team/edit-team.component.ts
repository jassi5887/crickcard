import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../../shared/animations/slideUp.animation';
import { PreviousUrlService } from '../../../../../shared/prevUrl.service';

@Component({
  selector: 'app-edit-team',
  animations: [ slideUp ],
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss'],
  host: { '[@slideUp]': '' }
})
export class EditTeamComponent implements OnInit {
  infoEditable: boolean = false;

  constructor(private prevUrlService: PreviousUrlService) { }

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

  onRoleEdit() {

  }

}
