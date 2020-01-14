import { Component, OnInit , NgZone } from '@angular/core';


import { CommonService } from '../services/common.service';
import { Router ,NavigationExtras} from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './nom.page.html',
  styleUrls: ['./nom.page.scss'],
})
export class NomPage implements OnInit {

 
  private listData : any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    public loading: LoadingService,
    private zone: NgZone   ,
    public toastController: ToastController) {
      //this.GetCommitteeList();

      this.commonService.getNom()
            .subscribe(data => {
              this.zone.run(() => {  
                this.listData = data;
                this.loading.dismiss();
              });  
            }); 
            
     }

   

    comingSoon(){
      this.presentToast("Coming soon");
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

  ngOnInit() {
      
  }


  dashboard()
  {
    this.router.navigate(['dashboard']);
  }


  makecall(){}
  savemail(){}





}
