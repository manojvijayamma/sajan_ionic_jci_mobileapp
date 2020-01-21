import { Component, OnInit , NgZone } from '@angular/core';


import { CommonService } from '../services/common.service';
import { Router ,NavigationExtras} from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';
import { ToastController } from '@ionic/angular';
import { EmailService } from '../providers/email.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-book',
  templateUrl: './nom.page.html',
  styleUrls: ['./nom.page.scss'],
})
export class NomPage implements OnInit {

 
  private listData : any;

  constructor(
    private commonService: CommonService,
    public emailService: EmailService,
    private router: Router,
    private database: DatabaseProvider,
    public loading: LoadingService,
    private zone: NgZone   ,
    private callNumber:CallNumber,
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


  makecall(nmbr)
    {
    /*console.log(nmbr);
    this.callNumber.callNumber(nmbr, true)
      .then(() => console.log('success'), err => console.log(err))88*/


      this.callNumber.callNumber(nmbr, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
    }
  savemail(email){
    this.emailService.sendEmail(email);
  }





}
