import { Component, OnInit , NgZone} from '@angular/core';
import { Pnps } from './pnps';

import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { EmailService } from '../providers/email.service';

@Component({
  selector: 'app-book',
  templateUrl: './pnps.page.html',
  styleUrls: ['./pnps.page.scss'],
})
export class PnpsPage implements OnInit {

  pnps: Pnps[];
  private listData : any;

  constructor(
    //private socialSharing: SocialSharing,
    public emailService: EmailService,
    private callNumber:CallNumber,
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    private zone: NgZone   ,
    public loading: LoadingService) {
      this.GetPastNPList();
      
      /*
      this.commonService.getPnps()
            .subscribe(data => {
              this.listData = data;
              this.loading.dismiss();
            }); */
     }


  showDetail(id) {
      this.loading.present();  
      this.router.navigate(['/pnps/details',id]);
  }

  ngOnInit() {
      
  }
    dashboard()
  {
    this.router.navigate(['dashboard']);
  }

  GetPastNPList(){
    this.database.GetPastNPList().subscribe((data: any) => {   
      this.zone.run(() => {         
        this.listData = data;
        this.loading.dismiss();
      });
      }, (error) => {
        console.log(error);
  });
}

savemail(email)
{

  this.emailService.sendEmail(email);

// this.socialSharing.shareViaEmail(null,null, [msg]).then(() => {
//   // Success!
// }).catch(() => {
//   // Error!
// });

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



}
