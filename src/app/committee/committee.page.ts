import { Component, OnInit , NgZone } from '@angular/core';
import { Committee } from './committee';

import { CommonService } from '../services/common.service';
import { Router ,NavigationExtras} from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './committee.page.html',
  styleUrls: ['./committee.page.scss'],
})
export class CommitteePage implements OnInit {

  committee: Committee[];
  private listData : any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    public loading: LoadingService,
    private zone: NgZone   ,
    public toastController: ToastController) {
      //this.GetCommitteeList();

      this.database.GetCommitteeCategory()
            .subscribe(data => {
              this.zone.run(() => {  
                this.listData = data;
                this.loading.dismiss();
              });  
            }); 
            
     }

     showDetails(id) {
      this.loading.present();  
      this.router.navigate(['/committee/details',id]);
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

  GetCommitteeList(){
    this.database.GetCommitteeCategory().subscribe((data: any) => {           
        this.listData = data;
        this.loading.dismiss();
      }, (error) => {
        console.log(error);
        this.loading.dismiss();
  });
  
}




}
