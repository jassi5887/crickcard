import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    private userData;

    getUserData() {
        return this.userData;
    }

    setUserData(user) {
        this.userData = user;
    }

    removeUserData() {
        this.userData = undefined;
    }
}