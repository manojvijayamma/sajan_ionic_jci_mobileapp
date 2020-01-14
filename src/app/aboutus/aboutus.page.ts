import { Component, OnInit , NgZone} from '@angular/core';
//import { Profile } from './profile';

import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';

@Component({
  selector: 'app-book',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  //trainers: Trainers[];
  private listData : any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    private zone: NgZone   ,
    public loading: LoadingService) { 
      

    }

  ngOnInit() {
       
  }
  dashboard()
  {
    this.router.navigate(['dashboard']);
  }
    

}
