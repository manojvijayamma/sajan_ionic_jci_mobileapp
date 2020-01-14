import { Component, OnInit , NgZone} from '@angular/core';
//import { Profile } from './profile';
import { NgForm } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DatabaseProvider } from '../providers/database';
import { LoadingService } from '../providers/loading.service';

@Component({
  selector: 'app-book',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  //trainers: Trainers[];
  private listData : any;
  private name:any;
  private mobile:any;
  private email:any;
  private picture:any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private database: DatabaseProvider,
    private zone: NgZone   ,
    public loading: LoadingService) { 
      

    }

  ngOnInit() {
    this.name=localStorage.getItem('name');
    this.email=localStorage.getItem('email');
    this.mobile=localStorage.getItem('mobile');
    
  }
  dashboard()
  {
    this.router.navigate(['dashboard']);
  }
    

}
