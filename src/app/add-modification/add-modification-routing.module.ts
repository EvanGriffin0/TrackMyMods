import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddModificationPage } from './add-modification.page';

const routes: Routes = [
  {
    path: '',
    component: AddModificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddModificationPageRoutingModule {}
