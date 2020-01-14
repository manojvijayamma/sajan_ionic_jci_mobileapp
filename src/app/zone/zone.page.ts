import { Component, OnInit , NgZone} from '@angular/core';
import { Zone } from './zone';

import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';

@Component({
  selector: 'app-book',
  templateUrl: './zone.page.html',
  styleUrls: ['./zone.page.scss'],
})
export class ZonePage implements OnInit {

  
  private listData : any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    private zone: NgZone   ,
    public loading: LoadingService) {
      this.GetZoneList();
      
          /*this.commonService.getZones()
            .subscribe(data => {
              this.listData = data;
              this.loading.dismiss();
            }); */

     }

  ngOnInit() {
      
  }

  showDetails(id,zname) {
    this.loading.present();  
    this.router.navigate(['/zone/details',id],{ queryParams: { title: zname } });
  }
      dashboard()
  {
    this.router.navigate(['dashboard']);
  }

  GetZoneList(){
    this.database.GetZoneList().subscribe((data: any) => {  
      this.zone.run(() => {          
        this.listData = data;
        this.loading.dismiss();
      });
      }, (error) => {
        console.log(error);
  });
}


//znames




//




}
