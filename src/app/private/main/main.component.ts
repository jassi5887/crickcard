import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../../services/data/loader.service';
import { UserBackend } from '../../services/backend/user-backend.service';
import { DataService } from '../../services/data/data.service';
import { Profile } from '../models/profile.model';
import { Subscription } from 'rxjs/Subscription';
import { TeamBackendService } from '../../services/backend/team-backend.service';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  subcriptionList: Subscription[] = [];

  constructor(private userBackend: UserBackend,
              private dataService: DataService,
              private loaderService: LoaderService,
              private teamBackendService: TeamBackendService) { }

  ngOnInit() {
    console.log("MAIN");
    this.loaderService.setLoading(true);

    this.subcriptionList[this.subcriptionList.length] = this.userBackend.getMyProfile().subscribe((profile: Profile) => {
      this.dataService.setUserData(profile);
      this.subcriptionList[this.subcriptionList.length] = this.teamBackendService.getTeams().subscribe((teams: Team[]) => {
        this.dataService.setTeamsData(teams);
        console.log("TEAMS: ", teams);
        this.loaderService.setLoading(false);            
      });
    });

    this.subcriptionList[this.subcriptionList.length] = this.loaderService.loading.subscribe((loading) => {
      console.log("LOADING: ", loading);
      this.loading = loading;
    });
  }

  ngOnDestroy() {
    this.loaderService.setLoading(false);
    this.subcriptionList.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

}
