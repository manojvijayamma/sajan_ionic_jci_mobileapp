import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { PnpsPage } from './pnps.page';
import { DetailsPage } from './details/details.page';

const routes: Routes = [
  {
    path: '',
    component: PnpsPage
  }  ,
  { path: 'details/:id', component:DetailsPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PnpsPage, DetailsPage]
})
export class PnpsModule {}
