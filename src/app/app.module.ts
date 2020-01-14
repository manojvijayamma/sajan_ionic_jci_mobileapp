import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './inteceptors/token.interceptor';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabaseProvider } from './providers/database';
import { LoadingService } from './providers/loading.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot({
        name: 'ionic4tutorial',
        storeName: 'ionic4tutorialData',
    })
  ],
  providers: [
    DatabaseProvider,
    LoadingService,
    SQLite,CallNumber,
    StatusBar,
    Contacts,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
