import { Component, OnInit , NgZone} from '@angular/core';
//import { Profile } from './profile';
import { NgForm } from '@angular/forms';

import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './suggest.page.html',
  styleUrls: ['./suggest.page.scss'],
})
export class SuggestPage implements OnInit {

  //trainers: Trainers[];
  private listData : any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    private zone: NgZone   ,
    public toastController: ToastController,
    public loading: LoadingService) { 
      

    }

  ngOnInit() {
       
  }
  dashboard()
  {
    this.router.navigate(['dashboard']);
  }

  doSuggest(form: NgForm) {
    if(form.value.name==''){
      this.presentToast("Please enter Name");
      return false;
    }
    if(form.value.email==''){
      this.presentToast("Please enter Email");
      return false;
    }
    if(form.value.mobile==''){
      this.presentToast("Please enter Mobile");
      return false;
    }


    this.commonService.suggest(form.value)
      .subscribe(res => {
        if (res.Result=='success') {
            this.presentToast("Successfully sent.");
            form.resetForm();
            this.router.navigate(['dashboard']);
        }
        else{
          this.loading.dismiss();
          this.presentToast("Sorry! try later.");
        }
      }, (err) => {
        console.log(err);
      });


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
    

}
