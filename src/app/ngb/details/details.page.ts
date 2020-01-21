import { Component, OnInit, NgZone } from '@angular/core';


import { CommonService } from '../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseProvider } from '../../providers/database';
import { LoadingService } from '../../providers/loading.service';
import { EmailService } from '../../providers/email.service';

@Component({
  selector: 'app-book',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  
  private listData : any;
  private id :any;

  constructor(
    private route: ActivatedRoute,
    public emailService: EmailService,
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    private zone: NgZone   ,
    public loading: LoadingService) {
        //this.GetCommitteeDetails(121);
        this.route.params.subscribe(params => {           
                           
          this.id = params['id']; 
          /*    
          this.database.GetPastNgbMembersList(this.id).then((data: any) => {           
                this.detailsData = data;
                console.log("2"+this.detailsData);
                this.loading.dismiss();
              }, (error) => {
                    console.log(error);
              });*/

              this.commonService.getPastNgbMembers(this.id)
              .subscribe(data => {
                this.zone.run(() => {  
                 this.listData = data;
                 this.loading.dismiss();
                });
              }); 

            
        });
      
    }

    


  ngOnInit() {
      
  }






}
