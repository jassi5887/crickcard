import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class PreviousUrlService {

    constructor(private location: Location) {}

    redirectToPrevUrl() {
        this.location.back();
    }
}