import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { PreviousUrlService } from '../../../../shared/prevUrl.service';
import { TeamBackendService } from '../../../../services/backend/team-backend.service';
import { LoaderService } from '../../../../services/data/loader.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class CreateTeamComponent implements OnInit {

  @ViewChild('createTeamForm') createTeamForm: NgForm;

  constructor(public prevUrlService: PreviousUrlService,
              private teamBackendService: TeamBackendService,
              private loaderService: LoaderService) { }

  ngOnInit() {
  }

  onCreateSubmit() {
    this.loaderService.setLoading(true);
    if (this.createTeamForm.valid) {
      this.teamBackendService.createTeam(this.createTeamForm.value.teamName).subscribe((team) => {
        console.log(team);
        this.loaderService.setLoading(false);
      });
    }
  }

}
