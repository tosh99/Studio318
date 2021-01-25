import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {AnimateInModule} from 'ngx-animate-in';


@NgModule({
    declarations: [FooterComponent],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        AnimateInModule
    ]
})
export class FooterModule {
}
