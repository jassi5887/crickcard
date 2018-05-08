import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../shared/animations/slideUp.animation';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const paramId: any = +params.id;
      console.log(params['id']);
      if (params.id !== undefined) {
        if ( typeof paramId === 'number' && !isNaN(paramId) ) {
          //get profile with profile id
        } else {
          this.router.navigate(['page-not-found']);
        }
      } else {
        //get own profile
      }

      if ( typeof paramId === 'number' && !isNaN(paramId) ) {
        // do somethin
      } else if(params.id !== undefined) {
        this.router.navigate(['page-not-found']);
      }
    });
  }

}
