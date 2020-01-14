import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'ngb', loadChildren: './ngb/ngb.module#NgbModule' },
  { path: 'pngb', loadChildren: './pngb/pngb.module#pNgbModule' },
  { path: 'trainers', loadChildren: './trainers/trainers.module#TrainersModule' },
  { path: 'nhq', loadChildren: './nhq/nhq.module#NhqModule' },
  { path: 'lom', loadChildren: './lom/zone.module#ZoneModule'},  
  { path: 'zone', loadChildren: './zone/zone.module#ZoneModule' },
  { path: 'pnps', loadChildren: './pnps/pnps.module#PnpsModule' },
  { path: 'events', loadChildren: './events/events.module#EventsModule' },
  { path: 'committee', loadChildren: './committee/committee.module#CommitteeModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'reset-password', loadChildren: './auth/reset-password/reset-password.module#ResetPasswordPageModule' },  
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule' },
  { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusModule' },
  { path: 'suggest', loadChildren: './suggest/suggest.module#SuggestModule' },
  { path: 'nom', loadChildren: './nom/nom.module#NomModule' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
