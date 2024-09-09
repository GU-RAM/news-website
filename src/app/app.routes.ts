import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
        title: 'About',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
        title: 'Contact',
      },
      {
        path: 'category',
        loadComponent: () =>
          import('./pages/category/category.component').then(
            (m) => m.CategoryComponent
          ),
        title: 'Category',
      },
      {
        path: 'latest-news',
        loadComponent: () =>
          import('./pages/latest-news/latest-news.component').then(
            (m) => m.LatestNewsComponent
          ),
        title: 'Latest News',
      },
      {
        path: 'pages',
        loadComponent: () =>
          import('./pages/pages/pages.component').then((m) => m.PagesComponent),
        title: 'Pages',
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404',
  },
];
