import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DataService } from '../data/data.service';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class TeamBackendService {
    API_DOMAIN;

    constructor(private http: HttpClient,
                private dataService: DataService,
                private storageService: StorageService) {

            this.API_DOMAIN = this.dataService.getConstant("API_DOMAIN");
    }

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-auth': this.storageService.getAuthToken()
        })
    };
    
    createTeam(teamName: string) {
        return this.http.post(`${this.API_DOMAIN}/api/teams`, {"teamName": teamName}, this.httpOptions);
    }

    getTeams() {
        return this.http.get(`${this.API_DOMAIN}/api/teams`, this.httpOptions);
    }

    getTeam(teamId) {
        return this.http.get(`${this.API_DOMAIN}/api/teams/${teamId}`, this.httpOptions);
    }
}