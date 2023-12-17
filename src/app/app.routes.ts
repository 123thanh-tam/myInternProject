import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { HomeComponent } from './page/home/home.component';
import { AccessDeniedComponent } from './error/access-denied/access-denied.component';
import { ServerErrorComponent } from './error/server-error/server-error.component';
import { LayoutAboutComponent } from './layout-about/layout-about.component';

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
        loadChildren: () =>
          // import('./page/about/about.module').then((m) => m.AboutModule),
          import('../app/layout-about/layout-about.module').then(
            (m) => m.LayoutAboutModule
          ),
      },
    ],
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: 'server-error',
    component: ServerErrorComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
