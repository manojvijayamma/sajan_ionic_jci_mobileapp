import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DataFactory { 
  
  private data :any;
  constructor( ) { }

  setData(item){     
      this.data=item;      
  }

  getData(){
      return this.data;
  }



}
