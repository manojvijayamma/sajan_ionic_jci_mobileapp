import { Component, OnInit , NgZone} from '@angular/core';
import { Nhq } from './nhq';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';

@Component({
  selector: 'app-book',
  templateUrl: './nhq.page.html',
  styleUrls: ['./nhq.page.scss'],
})
export class NhqPage implements OnInit {

  nhq: Nhq[];
  private listData : any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private database: DatabaseProvider,
    private zone: NgZone   ,
    public loading: LoadingService) { 
      this.GetNhqList();
    }

    showDetail(id) {
      this.loading.present();  
      this.router.navigate(['/nhq/details',id]);
    }

  ngOnInit() {
      
  }





     dashboard()
  {
    this.router.navigate(['dashboard']);
  }

  GetNhqList(){
      this.database.GetNhqList().subscribe((data: any) => {       
        this.zone.run(() => {     
          this.listData = data;
          this.loading.dismiss();
        });
        }, (error) => {
          console.log(error);
    });

  }


}
