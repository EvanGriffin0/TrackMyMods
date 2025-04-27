import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificationsListPage } from './modifications-list.page';

const routes: Routes = [
  {
    path: '',
    component: ModificationsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificationsListPageRoutingModule {}
