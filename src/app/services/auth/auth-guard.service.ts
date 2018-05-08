import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './authentication.service';
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router,
                private route: ActivatedRoute) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) { 
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/home'], {relativeTo: this.route});
            return false;
        }
    }
}