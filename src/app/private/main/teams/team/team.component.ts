import { Component, OnInit } from '@angular/core';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { PreviousUrlService } from '../../../../shared/prevUrl.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-team',
  animations: [ slideUp ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  host: { '[@slideUp]': '' }
})
export class TeamComponent implements OnInit {

  constructor(public prevUrlService: PreviousUrlService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const paramId: any = +params.id;
      if (typeof paramId === 'number' && !isNaN(paramId)) {
        // do somethin
      } else {
        this.router.navigate(['page-not-found']);
      }
    });
  }

}
