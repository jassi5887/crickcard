import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { AuthService } from '../../../../services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class MyProfileComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['home']);
    });
  }
}
