import { Component, OnInit , NgZone} from '@angular/core';
import { Ngb } from './ngb';

import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';
import { ToastController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { CallNumber } from '@ionic-native/call-number/ngx';
//import { ModalController } from '@ionic/angular';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { EmailService } from '../providers/email.service';

@Component({
  selector: 'app-book',
  templateUrl: './ngb.page.html',
  styleUrls: ['./ngb.page.scss'],
})
export class NgbPage implements OnInit {

  ngb: Ngb[];
  private listData : any;
  image_url = `${environment.image_url}`+'ngb/';

  constructor(
    private contacts: Contacts,
    public emailService: EmailService,
    //private socialSharing: SocialSharing,
    private commonService: CommonService,
    private callNumber:CallNumber,
    private router: Router,
    private database: DatabaseProvider,
    public toastController: ToastController,
    private zone: NgZone   ,
    public loading: LoadingService) { 
      
      this.database.GetNgbList().subscribe((data: any) => {   
        
        this.zone.run(() => {        
            this.listData = data;
            this.loading.dismiss();
        }); 
         
      }, (error) => {
        console.log(error);
        this.loading.dismiss();
  });
  
      /*
      this.loading.present();
      this.commonService.getCurrentNgb()
        .subscribe(data => {
          this.listData = data;
        
          this.loading.dismiss();
        });  */
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
    makecall(nmbr)
    {
    /*console.log(nmbr);
    this.callNumber.callNumber(nmbr, true)
      .then(() => console.log('success'), err => console.log(err))88*/


      this.callNumber.callNumber(nmbr, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
    }

   /* makecall(cnumber,cname)
    {

let contact: Contact = this.contacts.create();

contact.name = new ContactName(null,cname);
contact.phoneNumbers = [new ContactField('mobile',cnumber)];
contact.save().then(
  () => console.log('Contact saved!', contact),
  (error: any) => console.error('Error saving contact.', error)
);



    }*/




    showDetail(id) {
      this.loading.present();  
      this.router.navigate(['/ngb/details',id]);
    }
     dashboard()
  {
    this.router.navigate(['dashboard']);
  }


  ngOnInit() {
    
  }

  GetNgbList(){
      this.database.GetNgbList().subscribe((data: any) => {           
          this.listData = data;
          this.loading.dismiss();
        }, (error) => {
          console.log(error);
          this.loading.dismiss();
    });
}

//popup
savemail(email)
{

  this.emailService.sendEmail(email);

// this.socialSharing.shareViaEmail(null,null, [msg]).then(() => {
//   // Success!
// }).catch(() => {
//   // Error!
// });

}

//ends




}
