import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {
    private userData;
    private CONSTANTS = {
        "API_DOMAIN": environment.api_domain
    };

    getConstant(name) {
        return this.CONSTANTS[name];
    }

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