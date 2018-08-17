import { Component, OnInit, OnDestroy } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { AuthService } from '../../../../services/auth/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { DataService } from '../../../../services/data/data.service';
import { User } from '../../../models/user.model';
import { Profile } from '../../../models/profile.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class MyProfileComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  profile: Profile;

  constructor(private authService: AuthService,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    console.log("MYPROFILE");
    this.profile = this.dataService.getUserData();
    this.dataService.userDataSet.subscribe(() => {
      this.profile = this.dataService.getUserData();  
      console.log("GOTUserData:   ", this.profile);
    });
  }

  onLogout() {
    this.subscriptions[this.subscriptions.length] = this.authService.logout().subscribe(() => {
      this.router.navigate(['home']);
    });
  }

  ngOnDestroy() {
    if(this.subscriptions.length > 0){
      this.subscriptions.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
      });
    }
  }
}
