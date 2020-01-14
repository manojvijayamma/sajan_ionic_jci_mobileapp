import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { CommitteePage } from './committee.page';
import { DetailsPage } from './details/details.page';


const routes: Routes = [
  {
    path: '',
    component: CommitteePage
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
  declarations: [CommitteePage,DetailsPage]
})
export class CommitteeModule {}
