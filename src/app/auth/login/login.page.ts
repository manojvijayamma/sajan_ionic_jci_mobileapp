import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


import { DatabaseProvider } from '../../providers/database';
import { LoadingService } from '../../providers/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  private allAppData : any; 

  constructor(
    private router: Router,
    private authService: AuthService,
    private commonService: CommonService,
    public toastController: ToastController,
    private database: DatabaseProvider,
    private splashScreen: SplashScreen,
    public loading: LoadingService) { }

  ngOnInit() {
    //comment if need login
    localStorage.setItem('token', "1");
    this.getJciData();    
    return true;
    
  }

  login(form: NgForm) {
    
     
      if(form.value.mobilenumber==''){
        this.presentToast("Please enter valid mobilenumber");
        return false;
      }
    
    this.loading.present();  
    this.authService.login({mobilenumber:form.value.mobilenumber})
      .subscribe(res => {
        if (res.Result=='success') {
          
          localStorage.setItem('token', res.Userdetails.id);
          localStorage.setItem('id', res.Userdetails.id);
          localStorage.setItem('name', res.Userdetails.name);
          localStorage.setItem('email', res.Userdetails.email);
          localStorage.setItem('mobile', res.Userdetails.mobile);
          localStorage.setItem('picture', res.Userdetails.profile_pic);         
          form.resetForm();  
          this.getJciData();          
        }
        else{
          this.loading.dismiss();
          this.presentToast("Sorry! mobilenumber is not found.");
        }
      }, (err) => {
        console.log(err);
      });
  }

  register() {
    this.router.navigate(['register']);
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
      cssClass: "yourtoastclass"
    });
    toast.present();
  }

  getJciData(){      

        this.commonService.getSyncData()
          .subscribe(data => {   
                  this.splashScreen.hide();  
                         
                  this.router.navigate(['dashboard']);

      });
        
  }


}


