import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { DatabaseProvider } from './providers/database';
import { CommonService } from './services/common.service';
import { LoadingService } from './providers/loading.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private database: DatabaseProvider,
    private commonService: CommonService,
    private authService: AuthService,
    private router: Router,
    public loading: LoadingService
  ) {
    this.initializeApp();
  }

  public appPages = [
    {
      title: 'Home',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'My Profile',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'list-box'
    }
    ,
    {
      title: 'Contact Us',
      url: '/contactus',
      icon: 'mail'
    }
    ,
    {
      title: 'Suggest a friend',
      url: '/suggest',
      icon: 'people'
    }
  
    
];

  initializeApp() {
    this.platform.ready().then(() => {
      //this.loading.present();
      this.database.prepareDb();     

      
      if(localStorage.getItem('token')){
        this.router.navigate(['dashboard']);
        return true;
      }
      this.router.navigate(['login']);
      //this.statusBar.styleDefault();
      this.statusBar.hide();
      

      

    });
  }

  doSync(){
    this.loading.present();

            this.database.ClearDb()
                  .then(data => {   
                          this.commonService.getSyncData()
                                .subscribe(data => {   
                                  this.loading.dismiss();  
                      
                            });

              });


    
  }

  doLogout(){
      navigator['app'].exitApp();
    /*
    this.router.navigate(['login']);
    this.authService.logout()
      .subscribe(res => {
        if (res.Result=='success') {
            
        }
        else{
          
        }
      }, (err) => {
        console.log(err);
      });*/
  }

    getJciData(){      

      this.commonService.getSyncData()
                        .subscribe(data => {   
                                this.splashScreen.hide();  
                                      
                                this.router.navigate(['dashboard']);
              
                    });


        
        
    }
}
