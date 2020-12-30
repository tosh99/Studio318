import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
    },
     {
        path: 'work',
        loadChildren: () => import('./work/work.module').then(m => m.WorkModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
