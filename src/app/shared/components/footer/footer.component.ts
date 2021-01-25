import {Component, OnInit} from '@angular/core';
import { animate, style } from '@angular/animations';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    customAnimation = [
        style({transform: 'translateX(200px)'}),
        animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translateX(0)'}))
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
