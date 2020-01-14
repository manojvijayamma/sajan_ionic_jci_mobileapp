import { Component, OnInit , NgZone} from '@angular/core';
import { Events } from './events';

import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';

@Component({
  selector: 'app-book',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  events: Events[];
  private listData : any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    public loading: LoadingService,
    private zone: NgZone   ,
    private database: DatabaseProvider) {
      //this.GetEventList();
      this.database.GetEventList().subscribe((data: any) => {           
            this.zone.run(() => {    
              this.listData = data;
              this.loading.dismiss();
            }); 
            }, (error) => {
              console.log(error);
              this.loading.dismiss();
      });

     }

  ngOnInit() {
      
  }
     dashboard()
  {
    this.router.navigate(['dashboard']);
  }

  GetEventList(){
    
}




}
