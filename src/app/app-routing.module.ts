import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'entries', loadChildren: () => import('./pages/entries/entries.module').then(m => m.EntriesModule) },
  { path: 'categories', loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule) },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }
  // { path: '', redirectTo: '/reports', pathMatch: 'full' }
  // {path:'entries', loadChildren:'./pages/entries/entries.module#EntriesModule'},
  // {path:'categories',loadChildren:'./pages/categories/categories.module#CategoriesModule'},
  // {path:'reports',loadChildren:'./pages/reports/reports.module#ReportsModule'},
  // {path:'',redirectTo:'/reports', pathMatch: 'full'}
  // {path:'',loadChildren:'./pages/home/home.module#HomeModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
