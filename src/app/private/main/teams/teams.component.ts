import { Component, OnInit, OnDestroy } from '@angular/core';
import { slideUp } from '../../../shared/animations/slideUp.animation';
import { TeamBackendService } from '../../../services/backend/team-backend.service';
import { DataService } from '../../../services/data/data.service';
import { LoaderService } from '../../../services/data/loader.service';
import { Team } from '../../models/team.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-teams',
  animations: [ slideUp ],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  host: { '[@slideUp]': '' }
})
export class TeamsComponent implements OnInit, OnDestroy {
  teams: Team[];
  subcriptionList: Subscription[] = [];

  constructor(private teamBackendService: TeamBackendService,
              private dataService: DataService,
              private loaderService: LoaderService) { }

  ngOnInit() {
    this.teams = this.dataService.getTeamsData();
    this.subcriptionList[this.subcriptionList.length] = this.dataService.teamsDataSet.subscribe(() => {
      this.teams = this.dataService.getTeamsData();
    });
  }

  ngOnDestroy() {
    this.loaderService.setLoading(false);
    this.subcriptionList.forEach((subs) => {
      subs.unsubscribe();
    });
  }

}
