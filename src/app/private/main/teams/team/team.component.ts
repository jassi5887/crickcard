import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { PreviousUrlService } from '../../../../shared/prevUrl.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeamBackendService } from '../../../../services/backend/team-backend.service';
import { DataService } from '../../../../services/data/data.service';
import { Team } from '../../../models/team.model';

@Component({
  selector: 'app-team',
  animations: [ slideUp ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  host: { '[@slideUp]': '' }
})
export class TeamComponent implements OnInit {
  team: Team;

  constructor(public prevUrlService: PreviousUrlService,
              private route: ActivatedRoute,
              private router: Router,
              private teamBackendService: TeamBackendService,
              private dataService: DataService ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.teamBackendService.getTeam(params.id).subscribe((team: Team) => {
        this.team = team;
        console.log(this.team);
      });
    });
  }

}
