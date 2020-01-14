import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of,  forkJoin } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { DatabaseProvider } from '../providers/database';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiUrl = `${environment.api_url}`;
  public  syncData :any;

  constructor(private http: HttpClient,
    private database: DatabaseProvider) { }



    suggest (data): Observable<any> {
      return this.http.post<any>(this.apiUrl + 'suggest', data)
        .pipe(
          tap(_ => this.log('suggest')),
          catchError(this.handleError('suggest', []))
        );
    }


    
    getNom (): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl + 'nom')
        .pipe(
          tap(_ => this.log('fetched nom')),
          catchError(this.handleError('nom', []))
        );
    }


  getCurrentNgb (): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getCurrentNgb')
      .pipe(
        tap(_ => this.log('fetched getCurrentNgb')),
        catchError(this.handleError('getBooks', []))
      );
  }

  getPastNgbYears (): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getPastNgbYears')
      .pipe(
        tap(_ => this.log('fetched getPastNgbYears')),
        catchError(this.handleError('getBooks', []))
      );
  }

  getPastNgbMembers (id): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getPastNgbMembers/'+id)
      .pipe(
        tap(_ => this.log('fetched getPastNgbMembers')),
        catchError(this.handleError('getBooks', []))
      );
  }

  getZones (): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getZones')
      .pipe(
        tap(_ => this.log('fetched getZones')),
        catchError(this.handleError('getBooks', []))
      );
  }


  getZoneMembers (id): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getZoneMembers/'+id)
      .pipe(
        tap(_ => this.log('fetched getZoneMembers')),
        catchError(this.handleError('getBooks', []))
      );
  }

  getlomlist (id): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getlomlist/'+id)
      .pipe(
        tap(_ => this.log('fetched getlomlist')),
        catchError(this.handleError('getBooks', []))
      );
  }

  

  getLomDetails (id): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getLomDetails/'+id)
      .pipe(
        tap(_ => this.log('fetched getLomDetails')),
        catchError(this.handleError('getBooks', []))
      );
  }



  //zname






  
  //

  getEvents (): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getEvents')
      .pipe(
        tap(_ => this.log('fetched getEvents')),
        catchError(this.handleError('getBooks', []))
      );
  }

  getCommittee (): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getCommittee')
      .pipe(
        tap(_ => this.log('fetched getCommittee')),
        catchError(this.handleError('getBooks', []))
      );
  }

  getCommitteeMembers (id): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getCommitteeMembers/'+encodeURIComponent(id))
      .pipe(
        tap(_ => this.log('fetched getCommitteeMembers')),
        catchError(this.handleError('getBooks', []))
      );
  }

  getPnps (): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getPnps')
      .pipe(
        tap(_ => this.log('fetched getPnps')),
        catchError(this.handleError('getBooks', []))
      );
  }

  getTrainersZone (): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getTrainersZone')
      .pipe(
        tap(_ => this.log('fetched getTrainersZone')),
        catchError(this.handleError('getBooks', []))
      );
  }

  getTrainersMembers (id): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getTrainersMembers/'+id)
      .pipe(
        tap(_ => this.log('fetched getTrainersMembers')),
        catchError(this.handleError('getBooks', []))
      );
  }







  getAllData (id): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getjcilist/'+id)
      .pipe(
        tap(_ => this.log('fetched jci data')),
        catchError(this.handleError('getBooks', []))
      );
  }
  


  getSyncData(): Observable<any> {      
      
    const fetchDataObserver = new Observable(observer => {

            forkJoin(
                 this.getCurrentNgb(),
                 this.getPastNgbYears(),
                 this.getZones(),
                 this.getEvents(),
                 this.getCommittee(),
                 this.getPnps(),
                 this.getTrainersZone()

            )
            .subscribe(data => {
                console.log('-----------------forkJoin fetch data success');                 
                this.syncData=data;
                console.log(this.syncData[0]);
                //all result are empty

                if(( this.syncData[0] == null || this.syncData[0].length==0) &&
                  (this.syncData[1] == null || this.syncData[1].ength==0) &&
                   (this.syncData[2]== null || this.syncData[2].ength==0)
                   && (this.syncData[3] == null || this.syncData[3].length==0)
                   && (this.syncData[4] == null || this.syncData[4].length==0)
                   && (this.syncData[5] == null || this.syncData[5].length==0)
                   && (this.syncData[6] == null || this.syncData[6].length==0)
                  ){
                      console.log('empty response'); 
                      observer.next(data);
                }

                //save getCurrentNgb                
                if(this.syncData[0]!= null && this.syncData[0].length>0){
                      this.database.createNgbs(this.syncData[0])
                        .then(data => {
                            console.log('saved getCurrentNgb');                              
                            if((this.syncData[1] == null || this.syncData[1].length==0) 
                            &&  (this.syncData[2] == null || this.syncData[2].length==0)
                            &&  (this.syncData[3] == null || this.syncData[3].length==0)
                            &&  (this.syncData[4] == null || this.syncData[4].length==0)
                            &&  (this.syncData[5] == null || this.syncData[5].length==0)
                            &&  (this.syncData[6]== null || this.syncData[6].length==0)
                          ){
                                observer.next(data);
                            }
                        });
                }
                
                //save getPastNgbYears                
                if(this.syncData[1] != null && this.syncData[1].length>0){
                      this.database.createPastNgbs(this.syncData[1])
                        .then(data => {
                            console.log('saved getPastNgbYears');
                            if((this.syncData[2] == null || this.syncData[2].length==0)
                            &&  (this.syncData[3] == null || this.syncData[3].length==0)
                            &&  (this.syncData[4] == null || this.syncData[4].length==0)
                            &&  (this.syncData[5] == null || this.syncData[5].length==0)
                            &&  (this.syncData[6] == null || this.syncData[6].length==0)
                            ){
                                  observer.next(data);
                              }
                      });
                } 
                
                //save getZones
                if(this.syncData[2] != null && this.syncData[2].length>0){
                  this.database.createZone(this.syncData[2])
                    .then(data => {
                        console.log('saved getZones');
                        if(  (this.syncData[3] == null || this.syncData[3].length==0)
                            &&  (this.syncData[4] == null || this.syncData[4].length==0)
                            &&  (this.syncData[5]== null || this.syncData[5].length==0)
                            &&  (this.syncData[6] == null || this.syncData[6].length==0)
                            ){
                                  observer.next(data);
                            }
                  });
                } 



                 //save getEvents
                 if(this.syncData[3] != null && this.syncData[3].length>0){
                  this.database.createEvents(this.syncData[3])
                    .then(data => {
                        console.log('saved getEvents');
                        if(  (this.syncData[4] == null || this.syncData[4].length==0)
                            &&  (this.syncData[5] == null || this.syncData[5].length==0)
                            &&  (this.syncData[6] == null || this.syncData[6].length==0)
                            ){
                                  observer.next(data);
                            }
                  });
                } 



                //save getCommittee
                if(this.syncData[4] != null && this.syncData[4].length>0){
                  this.database.createCommittees(this.syncData[4])
                    .then(data => {
                        console.log('saved getCommittee');
                        if(   (this.syncData[5] == null || this.syncData[5].length==0)
                            &&  (this.syncData[6] == null || this.syncData[6].length==0)
                            ){
                                  observer.next(data);
                            }
                  });
                } 


                //save getPnps
                if(this.syncData[5] != null && this.syncData[5].length>0){
                  this.database.createPastNps(this.syncData[5])
                    .then(data => {
                        console.log('saved getPnps');
                        if(    (this.syncData[6] == null || this.syncData[6].length==0)
                            ){
                                  observer.next(data);
                            }
                  });
                } 


                //save getTrainersZone
                if(this.syncData[6] != null && this.syncData[6].length>0){
                  this.database.createNtzs(this.syncData[6])
                    .then(data => {
                        console.log('saved getTrainersZone');
                        
                                  observer.next(data);
                           
                  });
                } 




                console.log('after saved saveProductData');
                
            },
            err => {
                console.log('fetchData forkjoin err ', err);
                observer.next(err);

            })


    });
    
    return fetchDataObserver; 

}



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }







  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
