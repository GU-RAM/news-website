import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/layout/layout.component').then((c) => c.LayoutComponent),
    children: [
    ]},
  {
    path: '**',
    component: NotFoundComponent,
    title: '404',
  },
];
