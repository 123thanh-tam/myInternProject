import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { HomeComponent } from './module/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'about',
                loadChildren: () => import('./module/about/about.module').then(m => m.AboutModule),
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
