import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MenuService {
    private menuOpen = false;
    menuToggled = new Subject<boolean>();

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
        this.menuToggled.next(this.menuOpen);
    }

    isMenuOpen() {
        return this.menuOpen;
    }

    closeMenu() {
        this.menuOpen = false;
        this.menuToggled.next(false);
    }
}