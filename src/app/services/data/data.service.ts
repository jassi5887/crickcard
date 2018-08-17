import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { Profile } from '../../private/models/profile.model';
import { Team } from '../../private/models/team.model';

@Injectable()
export class DataService {
    private userData: Profile;
    private teamsData: Team[];
    
    userDataSet = new Subject<boolean>();
    teamsDataSet = new Subject<boolean>();
    newTeamAdded = new Subject<Team>();
    
    private CONSTANTS = {
        "API_DOMAIN": environment.api_domain
    };

    getConstant(name) {
        return this.CONSTANTS[name];
    }

    getUserData() {
        return this.userData;
    }

    setUserData(profile: Profile) {
        this.userData = profile;
        this.userDataSet.next(true);
    }

    getTeamsData() {
        return this.teamsData;
    }

    setTeamsData(teams: Team[]) {
        this.teamsData = teams;
        this.teamsDataSet.next(true);
    }

    addTeam(team: Team) {
        this.teamsData.push(team);
        this.newTeamAdded.next(team);
    }

    removeUserData() {
        this.userData = undefined;
    }
}