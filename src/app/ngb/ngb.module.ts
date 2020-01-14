import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NgbPage } from './ngb.page';
import { DetailsPage } from './details/details.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const routes: Routes = [
  {
    path: '',
    component: NgbPage
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
  declarations: [NgbPage, DetailsPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NgbModule {}
