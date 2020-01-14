import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ZonePage } from './zone.page';
import { DetailsPage } from './details/details.page';

const routes: Routes = [
  {
    path: '',
    component: ZonePage
  },
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
  declarations: [ZonePage,DetailsPage]
})
export class ZoneModule {}
