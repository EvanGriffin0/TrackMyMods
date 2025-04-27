import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'modifications-list',
    loadChildren: () => import('./modifications-list/modifications-list.module').then( m => m.ModificationsListPageModule)
  },
  {
    path: 'add-modification',
    loadChildren: () => import('./add-modification/add-modification.module').then( m => m.AddModificationPageModule)
  },
  {
    path: 'track-map',
    loadChildren: () => import('./track-map/track-map.module').then( m => m.TrackMapPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
