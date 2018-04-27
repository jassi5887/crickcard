import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable()
export class PreviousUrlService {

    constructor(private location: Location,
                private router: Router) {}

    redirectToPrevUrl() {
        this.location.back();
    }

    redirectToHome() {
        this.router.navigate(['/']);
    }
}