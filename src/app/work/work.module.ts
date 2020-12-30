import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import {FooterModule} from "../shared/components/footer/footer.module";
import {HeaderModule} from "../shared/components/header/header.module";


@NgModule({
  declarations: [WorkComponent],
    imports: [
        CommonModule,
        WorkRoutingModule,
        FooterModule,
        HeaderModule
    ]
})
export class WorkModule { }
