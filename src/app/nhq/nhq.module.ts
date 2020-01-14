import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NhqPage } from './nhq.page';
import { DetailsPage } from './details/details.page';

const routes: Routes = [
  {
    path: '',
    component: NhqPage
  },
  { path: 'details/:id', component:DetailsPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NhqPage, DetailsPage]
})
export class NhqModule {}
