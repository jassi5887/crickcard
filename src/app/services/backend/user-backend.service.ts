import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DataService } from '../data/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserBackend {
    private authToken = localStorage.getItem("x-auth");
    
    API_DOMAIN;

    constructor(private http: HttpClient,
                private dataService: DataService) {
        this.API_DOMAIN = this.dataService.getConstant("API_DOMAIN");
    }

    // getHeaders() {
    //     const headers = new HttpHeaders();
    //     headers.append('Content-Type', "application/json");
    //     headers.append('x-auth', this.authToken);
    //     return headers;
    // }

    getMyProfile() {        
        
        return this.http.get(`${this.API_DOMAIN}/api/profile/me`, 
                        { headers: new HttpHeaders({"Content-Type": "application/json", "x-auth": this.authToken}) });
    }
    
}