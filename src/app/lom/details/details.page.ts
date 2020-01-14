import { Component, OnInit , NgZone} from '@angular/core';


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

              this.commonService.getlomlist(this.id)
            .subscribe(data => {
              this.zone.run(() => {  
                this.listData = data;
                this.loading.dismiss();
              });
            });

            /*
this.database.Getlomnamelist(this.id)
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

showDetails(id,title) {
    this.loading.present();  
    var pagetitle =title; // +' - '+this.title;
    this.router.navigate(['/lom/lomdetails',id],{ queryParams: { title: pagetitle } });
  }




}
