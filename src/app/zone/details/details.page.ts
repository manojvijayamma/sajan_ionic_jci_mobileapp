import { Component, OnInit , NgZone} from '@angular/core';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { CommonService } from '../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseProvider } from '../../providers/database';
import { LoadingService } from '../../providers/loading.service';

@Component({
  selector: 'app-book',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  
  private listData : any;
  private id :any;
  private title:any; 

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
            
              
              this.commonService.getZoneMembers(this.id).subscribe((data: any) => {   
                this.zone.run(() => {          
                this.listData = data;
                console.log("2"+this.listData);
                this.loading.dismiss();
                });
              }, (error) => {
                    console.log(error);
              });

        

          //zone name

 

          //

           
            
        });

        this.route.queryParams.subscribe(params => {    
                console.log(params);        
                this.title = params.title;  
                
        }); 




        //get zone detials

         


        //ends
      
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





