import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/authentication.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
