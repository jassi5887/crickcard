import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    storeAuthToken(token:string) {
        localStorage.setItem("x-auth", token);
    }

    getAuthToken() {
        return localStorage.getItem("x-auth");
    }

    removeAuthToken() {
        localStorage.removeItem("x-auth");
    }

    setLoggedInUser(user) {
        localStorage.setItem("crickUser", user);
    }

    getLoggedInUser() {
        return localStorage.getItem("crickUser");
    }
}