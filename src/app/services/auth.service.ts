import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiUrl = `${environment.api_url}`;
  
  constructor(private http: HttpClient) { }

  login (data): Observable<any> {

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    }); 

    return this.http.post<any>(this.apiUrl + 'mobileverification', data,{headers: httpHeaders})
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  logout (): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'logout')
      .pipe(
        tap(_ => this.log('logout')),
        catchError(this.handleError('logout', []))
      );
  }

  register (data): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'signup', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
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
