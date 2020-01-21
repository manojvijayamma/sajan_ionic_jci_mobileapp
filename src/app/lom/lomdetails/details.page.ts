import { Component, OnInit, NgZone } from '@angular/core';


import { CommonService } from '../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseProvider } from '../../providers/database';
import { LoadingService } from '../../providers/loading.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { EmailService } from '../../providers/email.service';

@Component({
  selector: 'app-book',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class LomDetailsPage implements OnInit {

  
  private listData : any;
  private id :any;
  private title:any;

  constructor(
    //private socialSharing: SocialSharing,
    public emailService: EmailService,
private callNumber:CallNumber,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    private zone: NgZone   ,
    public loading: LoadingService) {
        //this.GetCommitteeDetails(121);
        this.route.params.subscribe(params => {
            
              this.id = params['id']; 
             
              /*
              this.database.GetZoneMenbersList(this.id).then((data: any) => {           
                this.detailsData = data;
                console.log("2"+this.detailsData);
                this.loading.dismiss();
              }, (error) => {
                    console.log(error);
              });*/

              this.commonService.getLomDetails(this.id)
            .subscribe(data => {
              this.zone.run(() => {  
                this.listData = data;
                this.loading.dismiss();
              });
            }); 

            /*
this.database.GetLomDetails(this.id)
            .subscribe(data => {
              this.listData = data;
              this.loading.dismiss();
            });*/

            
        });

        this.route.queryParams.subscribe(params => {    
          console.log(params);        
          this.title = params.title;  
          
        });


      
    }

    


  ngOnInit() {
      
  }

  /*
showDetails(id) {
    this.loading.present();  
    this.router.navigate(['/lom/lomdetails',id]);
  }*/

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
