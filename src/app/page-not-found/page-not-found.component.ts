import { Component, OnInit } from '@angular/core';
import { PreviousUrlService } from '../shared/prevUrl.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public prevUrlService: PreviousUrlService) { }

  ngOnInit() {
    
  }

}
