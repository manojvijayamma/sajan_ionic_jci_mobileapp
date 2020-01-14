import { Component, OnInit, NgZone } from '@angular/core';
import { Ngb } from './pngb';

import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';
import { ToastController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-book',
  templateUrl: './pngb.page.html',
  styleUrls: ['./pngb.page.scss'],
})
export class NgbPage implements OnInit {

  ngb: Ngb[];
  private listData : any;
  image_url = `${environment.image_url}`+'ngb/';

  constructor(
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    public toastController: ToastController,
    private zone: NgZone   ,
    public loading: LoadingService) { 
      this.GetPastNgbList();

      /*
      this.loading.present();

      this.commonService.getPastNgbYears()
        .subscribe(data => {
          this.listData = data;
          this.loading.dismiss();
        }); */


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



    showDetails(id, title) {
      this.loading.present();  
      this.router.navigate(['/pngb/details',id],{ queryParams: { title: title } });
    }
        dashboard()
  {
    this.router.navigate(['dashboard']);
  }


  ngOnInit() {
    
  }


  GetPastNgbList(){
      this.database.GetPastNgbList().subscribe((data: any) => {   
        this.zone.run(() => {         
          this.listData = data;
          this.loading.dismiss();
        });
        }, (error) => {
          console.log(error);
          this.loading.dismiss();
    });
    
  }





}
