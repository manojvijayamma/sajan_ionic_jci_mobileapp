import { Component, OnInit , NgZone} from '@angular/core';
import { Trainers } from './trainers';

import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';

@Component({
  selector: 'app-book',
  templateUrl: './trainers.page.html',
  styleUrls: ['./trainers.page.scss'],
})
export class TrainersPage implements OnInit {

  trainers: Trainers[];
  private listData : any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    private zone: NgZone   ,
    public loading: LoadingService) { 
      this.GetNtmList();
      /*
      this.commonService.getTrainersZone()
            .subscribe(data => {
              this.listData = data;
              this.loading.dismiss();
            }); */


    }

  ngOnInit() {
       
  }
    dashboard()
  {
    this.router.navigate(['dashboard']);
  }


  showDetails(id) {
    this.loading.present();  
    this.router.navigate(['/trainers/details',id]);
  }

  GetNtmList(){
    this.database.GetNtzList().subscribe((data: any) => {    
      this.zone.run(() => {        
        this.listData = data;
        this.loading.dismiss();
      });
      }, (error) => {
        console.log(error);
  });
}




}
