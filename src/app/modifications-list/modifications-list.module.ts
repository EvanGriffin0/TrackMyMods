import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificationsListPageRoutingModule } from './modifications-list-routing.module';

import { ModificationsListPage } from './modifications-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificationsListPageRoutingModule
  ],
  declarations: [ModificationsListPage]
})
export class ModificationsListPageModule {}
