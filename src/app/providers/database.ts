import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx'
import { Observable, of } from 'rxjs';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';


@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;
  
  constructor(    
    public storage: SQLite,
    private platform: Platform
  ) 
  {  }

  prepareDb(){
        //this.platform.ready().then(() => {
           
                console.log("constructor");
                this.storage = new SQLite(); // create sqlite object
                this.storage.create({
                    name: 'jci.db',
                    location: 'default'
                })
                .then((db: SQLiteObject) => {            
                    this.db = db; // get db object
                    
                            //committee
                            db.executeSql('CREATE TABLE IF NOT EXISTS committee ('+
                                        'committee_id INTEGER PRIMARY KEY,'+
                                        'committee_name TEXT,'+
                                        'committee_committee_name TEXT,'+
                                        'committee_lom TEXT,'+
                                        'committee_designation TEXT,'+
                                        'committee_address TEXT,'+
                                        'committee_mobile TEXT,'+
                                        'committee_email TEXT,'+
                                        'committe_pic TEXT,'+
                                        'committe_fampic TEXT'+
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - committee');                    
                                                db.executeSql("CREATE UNIQUE INDEX index_committee on committee (committee_id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));




                            //events
                            db.executeSql('CREATE TABLE IF NOT EXISTS events ('+
                               'events_id INTEGER PRIMARY KEY,'+                              
                               'events_name VARCHAR(255),'+
                               'events_date VARCHAR(255) ,'+ 
                               'priority INTEGER'+ 
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - events');                    
                                                db.executeSql("CREATE UNIQUE INDEX index_events on events (events_id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));





                            //lom
                            db.executeSql('CREATE TABLE IF NOT EXISTS lom ('+
                               'lom_id INTEGER PRIMARY KEY,'+                            
                               'lom_name VARCHAR(255),'+
                               'lom_zone VARCHAR(255)'+                               
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - lom');                   
                                                db.executeSql("CREATE UNIQUE INDEX index_lom on lom (lom_id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));




                            //national_trainers_members
                            db.executeSql('CREATE TABLE IF NOT EXISTS national_trainers_members ('+
                               'national_trainers_members_id INTEGER PRIMARY KEY,'+                            
                               'national_trainers_members_zone INT,'+
                               'national_trainers_members_name VARCHAR(255),'+
                               'national_trainers_members_address VARCHAR(255),'+
                               'national_trainers_members_mobile VARCHAR(255),'+  
                               'national_trainers_members_email VARCHAR(255),'+ 
                               'national_trainers_members_profile_pic TEXT'+                               
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - national_trainers_members');                   
                                                db.executeSql("CREATE UNIQUE INDEX index_national_trainers_members on national_trainers_members (national_trainers_members_id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));




                            //national_trainers_zone
                            db.executeSql('CREATE TABLE IF NOT EXISTS national_trainers_zone ('+
                                'national_trainers_zone_id INTEGER PRIMARY KEY,'+
                                'national_trainers_zone_name VARCHAR(255)'+
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - national_trainers_zone');                      
                                                db.executeSql("CREATE UNIQUE INDEX index_national_trainers_zone on national_trainers_zone (national_trainers_zone_id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));






                            //ngb
                            db.executeSql('CREATE TABLE IF NOT EXISTS ngb ('+
                                    'ngb_id INTEGER PRIMARY KEY,'+
                                    'ngb_name VARCHAR(255),'+
                                    'ngb_mobile VARCHAR(255),'+
                                    'ngb_email VARCHAR(255),'+
                                    'ngb_address VARCHAR(255),'+  
                                    'ngb_company VARCHAR(255),'+
                                    'ngb_designation VARCHAR(255),'+  
                                    'ngb_spouse VARCHAR(255),'+ 
                                    'ngb_dob VARCHAR(255),'+
                                    'ngb_children VARCHAR(255),'+ 
                                    'ngb_profession VARCHAR(255),'+
                                    'ngb_lom VARCHAR(255),'+ 
                                    'ngb_profile_picture TEXT,'+
                                    'ngb_family_picture TEXT'+    
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - ngb');                      
                                                db.executeSql("CREATE UNIQUE INDEX index_ngb on ngb (ngb_id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));




                            //NHQ
                            db.executeSql('CREATE TABLE IF NOT EXISTS NHQ ('+
                                    'id INTEGER PRIMARY KEY,'+
                                    'name VARCHAR(255),'+
                                    'designation VARCHAR(255),'+
                                    'mobile VARCHAR(255),'+
                                    'email VARCHAR(255),'+  
                                    'profile_pic TEXT'+   
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - NHQ');                    
                                                db.executeSql("CREATE UNIQUE INDEX index_nhq on NHQ (id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));





                            //pastNP
                            db.executeSql('CREATE TABLE IF NOT EXISTS pastNP ('+
                                    'pastNpID INTEGER PRIMARY KEY,'+
                                    'Name VARCHAR(255),'+
                                    'Year VARCHAR(255),'+
                                    'Deceased VARCHAR(255),'+
                                    'Address VARCHAR(255),'+  
                                    'Tel VARCHAR(255),'+
                                    'Mobile VARCHAR(255),'+ 
                                    'Email VARCHAR(255),'+
                                    'Fax VARCHAR(255),'+  
                                    'profileImage TEXT'+   
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - pastNP');                   
                                                db.executeSql("CREATE UNIQUE INDEX index_pastnp on pastNP (pastNpID)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));





                            //past_ngb
                            db.executeSql('CREATE TABLE IF NOT EXISTS past_ngb ('+
                                    'past_ngb_id INTEGER PRIMARY KEY,'+
                                    'past_ngb_name VARCHAR(255)'+                         
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - past_ngb');                    
                                                db.executeSql("CREATE UNIQUE INDEX index_past_ngb on past_ngb (past_ngb_id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));





                            //past_ngb_members
                            db.executeSql('CREATE TABLE IF NOT EXISTS past_ngb_members ('+
                                    'past_ngb_members_id INTEGER PRIMARY KEY,'+
                                    'past_ngb_members_ngb INT,'+
                                    'past_ngb_members_name VARCHAR(255),'+
                                    'past_ngb_members_mobile VARCHAR(255),'+
                                    'past_ngb_members_email VARCHAR(255),'+  
                                    'past_ngb_members_address VARCHAR(255),'+
                                    'past_ngb_designation VARCHAR(255),'+ 
                                    'past_ngb_members_working_period VARCHAR(255),'+                         
                                    'past_ngb_members_profile_pic TEXT'+   
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - past_ngb_members');                    
                                                db.executeSql("CREATE UNIQUE INDEX index_past_ngb_members on past_ngb_members (past_ngb_members_id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));





                            //zone
                            db.executeSql('CREATE TABLE IF NOT EXISTS zone ('+
                                'zone_id INTEGER PRIMARY KEY,'+
                                'zone_name VARCHAR(255)'+                         
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - zone');                    
                                                db.executeSql("CREATE UNIQUE INDEX index_zone on zone (zone_id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));




                            //zone_members
                            db.executeSql('CREATE TABLE IF NOT EXISTS zone_members ('+
                                'zone_members_id INTEGER PRIMARY KEY,'+
                                'zone_members_zone VARCHAR(255),'+   
                                'zone_members_name VARCHAR(255),'+  
                                'zone_members_designation VARCHAR(255),'+ 
                                'zone_members_address TEXT,'+ 
                                'zone_members_mobile VARCHAR(255),'+
                                'zone_members_email VARCHAR(255),'+  
                                'zone_picture VARCHAR(255),'+ 
                                'zone_members_lom VARCHAR(255),'+
                                'zone_members_proiority VARCHAR(255)'+                     
                            ')', [])
                            .then(() => 
                                        {
                                                console.log('created table - zone_members');                    
                                                db.executeSql("CREATE UNIQUE INDEX index_zone_members on zone_members (zone_members_id)")
                                                .then((res)=>console.log(res))
                                                .catch(e => console.log(e));
                                                
                                        }        
    
                            )
                            .catch(e => console.log(e));
    
    
    
                            
    
    
    
    
    
    
                
                })
                .catch(e => console.log(e));
    
                
            
        //});
  }





  

  ClearDb(){
        return new Promise ((resolve, reject) => {
            
            this.db.executeSql('DELETE FROM committee ')
                .then(res => { })
                .catch(e => console.log(e));

            this.db.executeSql('DELETE FROM events ')
                .then(res => {console.log('DELETE FROM events ') })
                .catch(e => console.log(e));
                
            this.db.executeSql('DELETE FROM lom ')
                .then(res => { })
                .catch(e => console.log(e)); 
                
            this.db.executeSql('DELETE FROM NHQ ')
                .then(res => { })
                .catch(e => console.log(e)); 

            this.db.executeSql('DELETE FROM ngb ')
                .then(res => { })
                .catch(e => console.log(e)); 
                
            this.db.executeSql('DELETE FROM national_trainers_members ')
                .then(res => { })
                .catch(e => console.log(e)); 
                
            this.db.executeSql('DELETE FROM national_trainers_zone ')
                .then(res => { })
                .catch(e => console.log(e)); 
                
            this.db.executeSql('DELETE FROM past_ngb ')
                .then(res => { })
                .catch(e => console.log(e));

            this.db.executeSql('DELETE FROM past_ngb_members ')
                .then(res => { })
                .catch(e => console.log(e)); 
            
            this.db.executeSql('DELETE FROM pastNP ')
                .then(res => { })
                .catch(e => console.log(e));  
                
            this.db.executeSql('DELETE FROM zone ')
                .then(res => { })
                .catch(e => console.log(e)); 
                
            this.db.executeSql('DELETE FROM zone_members ')
                .then(res => { })
                .catch(e => console.log(e)); 

            resolve(true);    

        });    
  }

//insert function
  createCommittees(products:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of products) {
                let sql = "REPLACE INTO committee (committee_id, committee_name, committee_committee_name, committee_lom, committee_designation, committee_address, committee_mobile, committee_email, committe_pic, committe_fampic) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                this.db.executeSql(sql, [product.committee_id, product.committee_name, product.committee_committee_name, product.committee_lom, product.committee_designation, product.committee_address, product.committee_mobile, product.committee_email, product.committe_pic, product.committe_fampic]).then((data) =>{
                    i++;                    
                    if (i == products.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }


 createEvents(events:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of events) {
                let sql = "REPLACE INTO events (events_id, events_name, events_date, priority) VALUES (?, ?, ?,?)";
                this.db.executeSql(sql, [product.events_id, product.events_name, product.events_date,product.priority]).then((data) =>{
                    i++;                    
                    if (i == events.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }


 createLoms(loms:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of loms) {
                let sql = "REPLACE INTO lom (lom_id, lom_name, lom_zone) VALUES (?, ?, ?)";
                this.db.executeSql(sql, [product.lom_id, product.lom_name, product.lom_zone]).then((data) =>{
                    i++;                    
                    if (i == loms.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }

 createNgbs(ngbs:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of ngbs) {
                let sql = "REPLACE INTO ngb (ngb_id, ngb_name, ngb_mobile, ngb_email, ngb_address, ngb_company, ngb_designation, ngb_spouse, ngb_dob, ngb_children, ngb_profession, ngb_lom, ngb_profile_picture, ngb_family_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                this.db.executeSql(sql, [product.ngb_id, product.ngb_name, product.ngb_mobile, product.ngb_email, product.ngb_address, product.ngb_company, product.ngb_designation, product.ngb_spouse, product.ngb_dob, product.ngb_children, product.ngb_profession, product.ngb_lom, product.ngb_profile_picture, product.ngb_family_picture]).then((data) =>{
                    i++;                    
                    if (i == ngbs.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }



 createNtms(ntms:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of ntms) {
                let sql = "REPLACE INTO national_trainers_members (national_trainers_members_id, national_trainers_members_zone, national_trainers_members_name, national_trainers_members_address, national_trainers_members_mobile, national_trainers_members_email, national_trainers_members_profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?)";
                this.db.executeSql(sql, [product.national_trainers_members_id, product.national_trainers_members_zone, product.national_trainers_members_name, product.national_trainers_members_address, product.national_trainers_members_mobile, product.national_trainers_members_email, product.national_trainers_members_profile_pic]).then((data) =>{
                    i++;                    
                    if (i == ntms.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }


 createNtzs(ntzs:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of ntzs) {
                let sql = "REPLACE INTO national_trainers_zone (national_trainers_zone_id, national_trainers_zone_name) VALUES (?, ?)";
                this.db.executeSql(sql, [product.national_trainers_zone_id, product.national_trainers_zone_name]).then((data) =>{
                    i++;                    
                    if (i == ntzs.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }

 createPastNgbs(ngbs:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of ngbs) {
                let sql = "REPLACE INTO past_ngb (past_ngb_id, past_ngb_name) VALUES (?, ?)";
                this.db.executeSql(sql, [product.past_ngb_id, product.past_ngb_name]).then((data) =>{
                    i++;                    
                    if (i == ngbs.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }




 createPastNgbMembers(ngbs:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of ngbs) {
                let sql = "REPLACE INTO past_ngb_members (past_ngb_members_id, past_ngb_members_ngb, past_ngb_members_name, past_ngb_members_mobile, past_ngb_members_email, past_ngb_members_address, past_ngb_designation, past_ngb_members_working_period, past_ngb_members_profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                this.db.executeSql(sql, [product.past_ngb_members_id, product.past_ngb_members_ngb, product.past_ngb_members_name, product.past_ngb_members_mobile, product.past_ngb_members_email, product.past_ngb_members_address, product.past_ngb_designation, product.past_ngb_members_working_period, product.past_ngb_members_profile_pic ]).then((data) =>{
                    i++;                    
                    if (i == ngbs.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }


 createPastNps(nps:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of nps) {
                let sql = "REPLACE INTO pastNP (pastNpID, Name, Year, Deceased, Address, Tel, Mobile, Email, Fax, profileImage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                this.db.executeSql(sql, [product.pastNpID, product.Name, product.Year, product.Deceased, product.Address, product.Tel, product.Mobile, product.Email, product.Fax, product.profileImage ]).then((data) =>{
                    i++;                    
                    if (i == nps.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }


 createNhq(nhq:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of nhq) {
                let sql = "REPLACE INTO NHQ (id, name, designation, mobile, email, profile_pic) VALUES (?, ?, ?, ?, ?, ?)";
                this.db.executeSql(sql, [product.id, product.name, product.designation, product.mobile, product.email, product.profile_pic]).then((data) =>{
                    i++;                    
                    if (i == nhq.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }

 createZoneMemberList(recs:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of recs) {
                let sql = "REPLACE INTO zone_members (zone_members_id, zone_members_zone, zone_members_name, zone_members_designation, zone_members_address, zone_members_mobile, zone_members_email, zone_picture, zone_members_lom, zone_members_proiority) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                this.db.executeSql(sql, [product.zone_members_id, product.zone_members_zone, product.zone_members_name, product.zone_members_designation, product.zone_members_address, product.zone_members_mobile, product.zone_members_email, product.zone_picture, product.zone_members_lom, product.zone_members_proiority]).then((data) =>{
                    i++;                    
                    if (i == recs.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }






 createZone(zone:any){    
    return new Promise ((resolve, reject) => {
            let i: number = 0;
            for (let product of zone) {
                let sql = "REPLACE INTO zone (zone_id, zone_name) VALUES (?, ?)";
                this.db.executeSql(sql, [product.zone_id, product.zone_name]).then((data) =>{
                    i++;                    
                    if (i == zone.length) {
                        resolve(data);
                    }                    
                }, (error) => {
                    console.log("3"+error);
                    reject(error);
                });
            }    
    });
 }

 
 GetCommitteeCategory(){
                     
    return Observable.create(observer => {
        let arrayUsers = [];
        this.db.executeSql("SELECT committee_id,committee_committee_name FROM committee order by committee_committee_name", []).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({                       
                        
                        committee_committee_name: data.rows.item(i).committee_committee_name,
                        committee_id: data.rows.item(i).committee_id,
                        
                    });            
                }          
            }                
        });  
    
        observer.next(arrayUsers);
        observer.complete();
    });     

}
  
  
  
   GetEventList(){
                     
                return Observable.create(observer => {
                    let arrayUsers = [];
                    this.db.executeSql("SELECT * FROM events order by priority", []).then((data) => {
                        console.log("lenght-"+data.rows.length);
                        if (data.rows.length > 0) {
                            for (var i = 0; i < data.rows.length; i++) {
                                arrayUsers.push({
                                    events_id: data.rows.item(i).events_id,
                                    events_name: data.rows.item(i).events_name,
                                    events_date: data.rows.item(i).events_date,
                                    priority: data.rows.item(i).priority
                                });            
                            }          
                        }   
                        
                        
                    });  
                    observer.next(arrayUsers);
                        observer.complete();
                   
                });     

}




//lomnames
Getlomnamelist(id){
                     
    return Observable.create(observer => {
        let arrayUsers = [];
        this.db.executeSql("SELECT * FROM lom  where lom_zone=? ORDER BY lom_name ASC", [id]).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        lom_id: data.rows.item(i).lom_id,
                        lom_name:data.rows.item(i).lom_name,
                        lom_zone: data.rows.item(i).lom_zone
                    });            
                }          
            }                
        });  
    
        observer.next(arrayUsers);
        observer.complete();
    });     

}



//ends

   GetLomList(){
                     
    return Observable.create(observer => {
        let arrayUsers = [];
        this.db.executeSql("SELECT * FROM lom ORDER BY lom_name ASC ", []).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        lom_id: data.rows.item(i).lom_id,
                        lom_name:data.rows.item(i).lom_name,
                        lom_zone: data.rows.item(i).lom_zone
                    });            
                }          
            }                
        });  
    
        observer.next(arrayUsers);
        observer.complete();
    });     

}


GetNgbList(){
                     
    return Observable.create(observer => {
        let arrayUsers = [];
        this.db.executeSql("SELECT * FROM ngb", []).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        ngb_id: data.rows.item(i).ngb_id,
                        ngb_name: data.rows.item(i).ngb_name,
                        ngb_mobile: data.rows.item(i).ngb_mobile,
                        ngb_email: data.rows.item(i).ngb_email,
                        ngb_address: data.rows.item(i).ngb_address,
                        ngb_company: data.rows.item(i).ngb_company,
                        ngb_designation: data.rows.item(i).ngb_designation,
                        ngb_spouse: data.rows.item(i).ngb_spouse,
                        ngb_dob: data.rows.item(i).ngb_dob,
                        ngb_children: data.rows.item(i).ngb_children,
                        ngb_profession: data.rows.item(i).ngb_profession,
                        ngb_lom: data.rows.item(i).ngb_lom,
                        ngb_profile_picture: data.rows.item(i).ngb_profile_picture,
                        ngb_family_picture: data.rows.item(i).ngb_family_picture,
                    });            
                }          
            }                
        });  
        
        observer.next(arrayUsers);
        observer.complete();
    });     

}



GetNtmList(id){
                     
    return Observable.create(observer => {
        let arrayUsers = [];
         this.db.executeSql("SELECT * FROM national_trainers_members", []).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        national_trainers_members_id: data.rows.item(i).national_trainers_members_id,
                        national_trainers_members_zone: data.rows.item(i).national_trainers_members_zone,
                        national_trainers_members_name: data.rows.item(i).national_trainers_members_name,
                        national_trainers_members_address: data.rows.item(i).national_trainers_members_address,
                        national_trainers_members_mobile: data.rows.item(i).national_trainers_members_mobile,
                        national_trainers_members_email: data.rows.item(i).national_trainers_members_email,
                        national_trainers_members_profile_pic: data.rows.item(i).national_trainers_members_profile_pic
                    });            
                }          
            }   
            
            
        }); 
        
        observer.next(arrayUsers);
        observer.complete();
    
    });     

}



GetNtzList(){
                     
    return Observable.create(observer => {
        let arrayUsers = [];
        this.db.executeSql("SELECT * FROM national_trainers_zone", []).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        national_trainers_zone_id: data.rows.item(i).national_trainers_zone_id,
                        national_trainers_zone_name: data.rows.item(i).national_trainers_zone_name
                    });            
                }          
            }                
        });  
    
        observer.next(arrayUsers);
        observer.complete();
    });     

}



GetPastNgbList(){
                     
    return Observable.create(observer => {
        let arrayUsers = [];
        this.db.executeSql("SELECT * FROM past_ngb", []).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        past_ngb_id: data.rows.item(i).past_ngb_id,
                        past_ngb_name: data.rows.item(i).past_ngb_name
                    });            
                }          
            }                
        });  
    
        observer.next(arrayUsers);
        observer.complete();
    });     

}




GetPastNgbMembersList(id) : any{
                     
    return Observable.create(observer => {
        let arrayUsers = [];
         this.db.executeSql("SELECT * FROM past_ngb_members where past_ngb_members_ngb=?", [id]).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        past_ngb_members_id: data.rows.item(i).past_ngb_members_id,
                        past_ngb_members_ngb: data.rows.item(i).past_ngb_members_ngb,
                        past_ngb_members_name: data.rows.item(i).past_ngb_members_name,
                        past_ngb_members_mobile: data.rows.item(i).past_ngb_members_mobile,
                        past_ngb_members_email: data.rows.item(i).past_ngb_members_email,
                        past_ngb_members_address: data.rows.item(i).past_ngb_members_address,
                        past_ngb_designation: data.rows.item(i).past_ngb_designation,
                        past_ngb_members_working_period: data.rows.item(i).past_ngb_members_working_period,
                        past_ngb_members_profile_pic: data.rows.item(i).past_ngb_members_profile_pic,
                    });            
                }          
            }  
            
            
        }); 
        
        observer.next(arrayUsers);
        observer.complete();
    
    });

}


GetZoneMenbersList(id): any{                     
    return Observable.create(observer => {
        let arrayUsers = [];
         this.db.executeSql("SELECT * FROM zone_members where zone_members_zone=?", [id]).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        zone_members_id: data.rows.item(i).zone_members_id,
                        zone_members_zone: data.rows.item(i).zone_members_zone,
                        zone_members_name: data.rows.item(i).zone_members_name,
                        zone_members_designation: data.rows.item(i).zone_members_designation,
                        zone_members_address: data.rows.item(i).zone_members_address,
                        zone_members_mobile: data.rows.item(i).zone_members_mobile,
                        zone_members_email: data.rows.item(i).zone_members_email,
                        zone_picture: data.rows.item(i).zone_picture,
                        zone_members_lom: data.rows.item(i).zone_members_lom,
                        zone_members_proiority: data.rows.item(i).zone_members_proiority,
                    });            
                }          
            }  
            
            
        });
        
        observer.next(arrayUsers);
        observer.complete();
    });    

}



 //getting function
 GetCommitteeList(id){
                     
    return Observable.create(observer => {
       
        this.db.executeSql("SELECT * FROM committee ", []).then((data) => {
            console.log("committee length :"+data.rows.length);
            let arrayUsers = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    console.log("committee:"+data.rows.item(i).committee_id);
                    arrayUsers.push({
                        committee_id: data.rows.item(i).committee_id,
                        committee_name: data.rows.item(i).committee_name,
                        committee_committee_name: data.rows.item(i).committee_committee_name,
                        committee_lom: data.rows.item(i).committee_lom,
                        committee_designation: data.rows.item(i).committee_designation,
                        committee_address: data.rows.item(i).committee_address,
                        committee_mobile: data.rows.item(i).committee_mobile,
                        committee_email: data.rows.item(i).committee_email,
                        committe_pic: data.rows.item(i).committe_pic,
                        committe_fampic: data.rows.item(i).committe_fampic
                    });            
                }          
            }  
            
            observer.next(arrayUsers);
            observer.complete();
            
        });      
        
    
    });    

} 


GetPastNPList(){
                     
    return Observable.create(observer => {
        let arrayUsers = [];
        this.db.executeSql("SELECT * FROM pastNP", []).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        pastNpID: data.rows.item(i).pastNpID,
                        Name: data.rows.item(i).Name,
                        Year: data.rows.item(i).Year,
                        Deceased: data.rows.item(i).Deceased,
                        Address: data.rows.item(i).Address,
                        Tel: data.rows.item(i).Tel,
                        Mobile: data.rows.item(i).Mobile,
                        Email: data.rows.item(i).Email,
                        Fax: data.rows.item(i).Fax,
                        profileImage: data.rows.item(i).profileImage,
                    });            
                }          
            }                
        });  
    
        observer.next(arrayUsers);
        observer.complete();
    });     

}
//zonesnames
//GetNtmDetails(id): any{                     
   
       // return this.db.executeSql("SELECT * FROM national_trainers_members WHERE national_trainers_members_id=?", [id]).then((data) => {
        //    return data.rows.item(0);          
       // });

//
//

GetZoneList(){
    return Observable.create(observer => {
        let arrayUsers = [];
        this.db.executeSql("SELECT * FROM zone", []).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        zone_id: data.rows.item(i).zone_id,
                        zone_name: data.rows.item(i).zone_name
                    });            
                }          
            }                
        });  
    
        observer.next(arrayUsers);
        observer.complete();
    });       
}

GetNhqList(){
    return Observable.create(observer => {
        let arrayUsers = [];
        this.db.executeSql("SELECT * FROM NHQ", []).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    arrayUsers.push({
                        id: data.rows.item(i).id,
                        name: data.rows.item(i).name,
                        designation: data.rows.item(i).designation,
                        mobile: data.rows.item(i).mobile,
                        email: data.rows.item(i).email,
                        profile_pic: data.rows.item(i).profile_pic
                    });            
                }          
            }                
        });  
    
        observer.next(arrayUsers);
        observer.complete();
    });      
}








GetCommitteeDetails(id) : any{
     
    return this.db.executeSql("SELECT * FROM committee WHERE committee_id=?", [id]).then((data) =>{
       // console.log("1"+data);
            return data.rows.item(0);                                    
    }, (error) => {
        //console.log("3"+error);
        //reject(error);
    }); 

}

GetNtmDetails(id): any{                     
   
        return this.db.executeSql("SELECT * FROM national_trainers_members WHERE national_trainers_members_id=?", [id]).then((data) => {
            return data.rows.item(0);          
        });

}


GetNgbDetails(id): any{                     
   
        return this.db.executeSql("SELECT * FROM ngb WHERE ngb_id=?", [id]).then((data) => {
            return data.rows.item(0);    
        });

}

GetNhqDetails(id): any{  

    return Observable.create(observer => {         
        let detailsData : any;

         this.db.executeSql("SELECT * FROM NHQ WHERE id=?", [id]).then((data) => {
            detailsData=data.rows.item(0);    
        }); 
        observer.next(detailsData);
        observer.complete();
    });      

}




GetPastNPDetails(id): any{
    return Observable.create(observer => {
        let detailsData : any;
        this.db.executeSql("SELECT * FROM pastNP WHERE pastNpID=?", [id]).then((data) => {
            detailsData=data.rows.item(0);             
        });  
        observer.next(detailsData);
        observer.complete();
    });      
}





GetEventDetails(id){

    return Observable.create(observer => {
        let detailsData : any;
        this.db.executeSql("SELECT * FROM events WHERE events_id=?", [id]).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {               
                    
                detailsData.events_id = data.rows.item(0).events_id;
                detailsData.events_name = data.rows.item(0).events_name;
                detailsData.events_date = data.rows.item(0).events_date;                                            
                         
            }                
        });  
    
        observer.next(detailsData);
        observer.complete();
    });     

}
//zonename











//ends


GetLomDetails(id){
                         
    return Observable.create(observer => {
        let detailsData : any;
        this.db.executeSql("SELECT * FROM lom_member WHERE lom_name_id=?", [id]).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {               
                    
                detailsData.lom_member_id = data.rows.item(0).lom_member_id;
                detailsData.lom_member_name = data.rows.item(0).lom_member_name;
                detailsData.lom_member_designation = data.rows.item(0).lom_member_designation;
                detailsData.lom_member_mobile = data.rows.item(0).lom_member_mobile;  
                 detailsData.lom_member_email = data.rows.item(0).lom_member_email;   
                  detailsData.lom_member_address = data.rows.item(0).lom_member_address;                                             
                         
            }                
        });  
    
        observer.next(detailsData);
        observer.complete();
    });     

}













GetNtzDetails(id){
                     
    return Observable.create(observer => {
        let detailsData : any;
        this.db.executeSql("SELECT * FROM national_trainers_zone WHERE national_trainers_zone_id=?", [id]).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                
                detailsData.national_trainers_zone_id= data.rows.item(0).national_trainers_zone_id;
                detailsData.national_trainers_zone_name= data.rows.item(0).national_trainers_zone_name;
                         
            }                
        });  
    
        observer.next(detailsData);
        observer.complete();
    });     

}



GetPastNgbDetails(id){
                     
    return Observable.create(observer => {
        let detailsData : any;
        this.db.executeSql("SELECT * FROM past_ngb WHERE past_ngb_id=?", [id]).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
               
                detailsData.past_ngb_id= data.rows.item(0).past_ngb_id;
                detailsData.past_ngb_name= data.rows.item(0).past_ngb_name;
                       
            }                
        });  
    
        observer.next(detailsData);
        observer.complete();
    });     

}




GetPastNgbMembersDetails(id){
                     
    return Observable.create(observer => {
        let detailsData : any;
        this.db.executeSql("SELECT * FROM past_ngb_members WHERE past_ngb_members_id=? ", [id]).then((data) => {
            console.log("lenght-"+data.rows.length);
            if (data.rows.length > 0) {
                
                detailsData.past_ngb_members_id= data.rows.item(0).past_ngb_members_id;
                detailsData.past_ngb_members_ngb= data.rows.item(0).past_ngb_members_ngb;
                detailsData.past_ngb_members_name= data.rows.item(0).past_ngb_members_name;
                detailsData.past_ngb_members_mobile= data.rows.item(0).past_ngb_members_mobile;
                detailsData.past_ngb_members_email= data.rows.item(0).past_ngb_members_email;
                detailsData.past_ngb_members_address= data.rows.item(0).past_ngb_members_address;
                detailsData.past_ngb_designation= data.rows.item(0).past_ngb_designation;
                detailsData.past_ngb_members_working_period= data.rows.item(0).past_ngb_members_working_period;
                detailsData.past_ngb_members_profile_pic= data.rows.item(0).past_ngb_members_profile_pic;
                        
            }                
        });  
    
        observer.next(detailsData);
        observer.complete();
    });     

}










}
