import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url='https://tacosit-0-default-rtdb.europe-west1.firebasedatabase.app/';
 url2 =this.url +'familles.json';

  public tableau: any[] = [];

  constructor(private http :HttpClient) {
  this.getAll()
  }

  getAll(){
   this.http.get<any>(this.url2).subscribe((response) => {
    console.log("Data servive");
    console.log(response);
        if (response != undefined) {
          this.tableau=response;
        }
        console.log(this.tableau.length);
      });
  }

}
