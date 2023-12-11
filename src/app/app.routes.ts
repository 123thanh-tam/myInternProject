import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './error/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
            },
            {
                path: 'about',
                loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule),
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
