import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import {FooterModule} from '../shared/components/footer/footer.module';
import {HeaderModule} from "../shared/components/header/header.module";


@NgModule({
  declarations: [LandingComponent],
    imports: [
        CommonModule,
        LandingRoutingModule,
        FooterModule,
        HeaderModule
    ]
})
export class LandingModule { }
