import { Component, OnInit , NgZone} from '@angular/core';


import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseProvider } from '../../providers/database';
import { LoadingService } from '../../providers/loading.service';

@Component({
  selector: 'app-book',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  
  private detailsData : any;
  private id :any;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private database: DatabaseProvider,
    private zone: NgZone   ,
    public loading: LoadingService) {
        //this.GetCommitteeDetails(121);
        this.route.params.subscribe(params => {
            
              this.id = params['id']; 
             
              this.database.GetNhqDetails(this.id).subscribe((data: any) => {  
                this.zone.run(() => {          
                this.detailsData = data;
                console.log("2"+this.detailsData);
                this.loading.dismiss();
                });
              }, (error) => {
                    console.log(error);
              });
            
        });
      
    }

    


  ngOnInit() {
      
  }






}
