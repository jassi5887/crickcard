import { Component, OnInit } from '@angular/core';
import { PreviousUrlService } from '../../../../shared/prevUrl.service';
import { slideUp } from '../../../../shared/animations/slideUp.animation';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class MatchComponent implements OnInit {

  constructor(public prevUrlService: PreviousUrlService,
              private route: ActivatedRoute,
              private router: Router) { }

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
