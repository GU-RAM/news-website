import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // redirectTo: '',
    loadComponent: () =>
      import('./pages/layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
        title: 'about',
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
        title: 'contact',
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./pages/category/category.component').then(
            (m) => m.CategoryComponent
          ),
        title: 'category',
      },
      {
        path: 'latest-news',
        loadChildren: () =>
          import('./pages/latest-news/latest-news.component').then(
            (m) => m.LatestNewsComponent
          ),
        title: 'latest news',
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages/pages.component').then((m) => m.PagesComponent),
        title: 'pages',
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404',
  },
];
