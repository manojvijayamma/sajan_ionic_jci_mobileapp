import { Component, OnInit , NgZone} from '@angular/core';


import { CommonService } from '../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseProvider } from '../../providers/database';
import { LoadingService } from '../../providers/loading.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-book',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  
  private listData : any;
  private id :any;

  constructor(

 //private socialSharing: SocialSharing,

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
             
              
              this.commonService.getTrainersMembers(this.id).subscribe((data: any) => {   
                this.zone.run(() => {         
                this.listData = data;
                console.log("2"+this.listData);
                this.loading.dismiss();
                });
              }, (error) => {
                    console.log(error);
              }); 


              
            
        });
      
    }

    


  ngOnInit() {
      
  }

savemail(msg)
{



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
