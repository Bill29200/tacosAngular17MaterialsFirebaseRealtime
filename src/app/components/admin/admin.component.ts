
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

//************************************************* */
export interface PeriodicElement {
  name: string;
  position: number;
}
//********************************** */

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{

  displayedColumns: string[] = ['id', 'nom'];

  ELEMENT_DATA!: any[] ;
  familyKeys!: never[];
  dataSource = this.ELEMENT_DATA;

  resultsLength = 0;
  //********************************* */
  constructor(private db: AngularFireDatabase) {
    this.fetchData();
   }

  fetchData() {
    this.db.database.ref('family').once('value', (snapshot) => { // Get data once
      this.ELEMENT_DATA = []; // Clear previous data
      this.familyKeys = [];

      for (const key in snapshot.val()) { // Iterate through each object in the table
        this.ELEMENT_DATA.push(snapshot.val()[key]); // Add object to data array
       // this.familyKeys.push(key); // Add key to keys array
      }
    });
  }
  //-------------------------------------------------
  ngOnInit() {
    this.fetchData();


  }

  }
  //-------------------------------------------------


