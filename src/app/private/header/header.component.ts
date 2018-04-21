import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../shared/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.menuToggled.subscribe((menuOpen) => {
      this.menuOpen = menuOpen;
    });
  }

  onMenuToggle() {
    console.log("toggle");
    this.menuService.toggleMenu();
  }

}
