import {Component, Input, OnInit} from '@angular/core';
import {WindowScrolling} from '../../services/scrolling';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() isLogoVisible = true;

    viewMenu = false;
    windowScrolling: WindowScrolling;

    constructor(windowScrolling: WindowScrolling, public router: Router) {
        this.windowScrolling = windowScrolling;
    }

    ngOnInit(): void {
    }

    toggleModal(isopen?): void {
        window.scrollTo(0, 0);

        if (isopen !== undefined) {
            this.viewMenu = isopen;
        } else {
            this.viewMenu = !this.viewMenu;
        }

        if (this.viewMenu) {
            this.windowScrolling.disable();
        } else {
            this.windowScrolling.enable();
        }
    }

    navigateTo(): void {
        if (this.viewMenu === true) {
            this.toggleModal(false);
        }
        // this.router.navigateByUrl(link);
    }

}
