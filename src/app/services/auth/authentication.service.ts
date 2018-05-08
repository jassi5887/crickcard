import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class AuthService {
    token: string;
    authenticatedUser;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private router: Router,
                private http: HttpClient,
                private storageService: StorageService) {}
    

    isAuthenticated() {
        return this.storageService.getAuthToken() !== null;
    }
    
    authenticate(token) {
        this.storageService.storeAuthToken(token);
    }

    login(payload, loginStep) {
        switch(loginStep) {
            case "1":
                return this.http.post('http://localhost:3000/api/otp', payload, this.httpOptions);
            case "2":
                return this.http.post('http://localhost:3000/api/otp/confirm', payload, this.httpOptions);
            case "3":
                this.httpOptions["observe"] = "response";
                return this.http.post('http://localhost:3000/api/auth/login', payload, this.httpOptions)
        }
    }

    logout() {
        const token = this.storageService.getAuthToken();
        this.storageService.removeAuthToken();
        const payload = {"x-auth": token};
        return this.http.post('http://localhost:3000/api/auth/logout', payload, this.httpOptions);
    }

    register(payload, registrationStep) {
        switch(registrationStep) {
            case "1": 
                console.log("CASE 1");
                return this.http.post('http://localhost:3000/api/otp', payload, this.httpOptions);
            
            case "2":
                console.log("CASE 2: ", payload);
                return this.http.post('http://localhost:3000/api/otp/confirm', payload, this.httpOptions);
            
            case "3":
                console.log('USER DATA: ', payload);
                this.httpOptions["observe"] = "response";
                return this.http.post('http://localhost:3000/api/auth/register', payload, this.httpOptions);
        }
    }
}