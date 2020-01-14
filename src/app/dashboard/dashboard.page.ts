import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//import { DatabaseProvider } from '../providers/database';
import { CommonService } from '../services/common.service';
import { LoadingService } from '../providers/loading.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-book',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  
  private ListCommittee : any; 
  private allAppData : any;

  constructor(
    private authService: AuthService,
    private router: Router,
   
    private commonService: CommonService,
    public loading: LoadingService,
    public toastController: ToastController,) { 
      const token = localStorage.getItem('token');
      //this.getJciData(token);
      this.loading.dismiss();
    }

  ngOnInit() {
    console.log("1. init");  
    this.loading.dismiss();
  }

  ionViewWillEnter() {
    this.loading.dismiss();
  }


  showPage(page){
    this.loading.present();
    this.router.navigate([page]);
  }



  logout() {
    this.authService.logout()
      .subscribe(res => {
        console.log(res);
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      });
  }

  comingSoon(){
    this.presentToast("Coming soon");
  }


  ngb()
  {
    this.loading.present();  
    this.router.navigate(['ngb']);
  }

 pngb()
  {
    this.loading.present();  
    this.router.navigate(['pngb']);
  }

  zone()
  {
    this.loading.present();  
    this.router.navigate(['zone']);
  }
   committee()
  {
    this.loading.present();  
    this.router.navigate(['committee']);
  }
   nhq()
  {
    this.loading.present();  
    this.router.navigate(['nhq']);
  }

   events()
  {
    this.loading.present();  
    this.router.navigate(['events']);
  }

  pnps()
  {
    this.loading.present();  
    this.router.navigate(['pnps']);
  }
  trainers()
  {
    this.loading.present();  
    this.router.navigate(['trainers']);
  }
   dashboard()
  {
    if(this.router.url!=="dashboard"){
      this.loading.present();  
      this.router.navigate(['dashboard']);
    }  
  }
  lom()
{
  this.loading.present();  
   this.router.navigate(['lom']);
}


nom()
  {
    this.loading.present();  
    this.router.navigate(['nom']);
  }





  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
      cssClass: "yourtoastclass"
    });
    toast.present();
  }

  getJciData(id){      
    /*
    this.commonService.getAllData(id)
    .subscribe(data => {          
             this.allAppData = data;  

                          
                          if(this.allAppData.EventList.length>0){
                              this.database.createEvents(this.allAppData.EventList)
                                .then(data => {
                                  // this.router.navigate(['dashboard']);
                              });
                          } 
                         
                          if(this.allAppData.LOMList.length>0){
                              this.database.createLoms(this.allAppData.LOMList)
                                .then(data => {
                                  // this.router.navigate(['dashboard']);
                              });
                          }  

                          if(this.allAppData.NGBList.length>0){
                              this.database.createNgbs(this.allAppData.NGBList)
                                .then(data => {
                                  // this.router.navigate(['dashboard']);
                              });
                          }    
                         
                          if(this.allAppData.NTMList.length>0){
                              this.database.createNtms(this.allAppData.NTMList)
                                .then(data => {
                                  // this.router.navigate(['dashboard']);
                              });
                          }    

                          if(this.allAppData.NTZList.length>0){
                              this.database.createNtzs(this.allAppData.NTZList)
                                .then(data => {
                                  // this.router.navigate(['dashboard']);
                              });
                          }    

                          if(this.allAppData.PastNGBList.length>0){
                              this.database.createPastNgbs(this.allAppData.PastNGBList)
                                .then(data => {
                                  // this.router.navigate(['dashboard']);
                              });
                          }    

                          if(this.allAppData.PastNGBmemberList.length>0){
                              this.database.createPastNgbMembers(this.allAppData.PastNGBmemberList)
                                .then(data => {
                                  // this.router.navigate(['dashboard']);
                              });
                          }    
                          
                          if(this.allAppData.PastNpList.length>0){
                              this.database.createPastNps(this.allAppData.PastNpList)
                                .then(data => {
                                    //this.router.navigate(['dashboard']);
                              });
                          } 
                         

                          if(this.allAppData.ZonememberList.length>0){
                            this.database.createZoneMemberList(this.allAppData.ZonememberList)
                              .then(data => {
                                
                               
                            });
                          } 

                          if(this.allAppData.CommitteeList.length>0){
                            this.database.createCommittees(this.allAppData.CommitteeList)
                              .then(data => {
                                
                                this.loading.dismiss();
                            });
                          }


                          

                     

    });

    */
    
}



}
