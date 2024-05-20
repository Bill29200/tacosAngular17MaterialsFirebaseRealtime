import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Family } from '../models/family.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dbPath='/';
  tableau : AngularFireList<Family>;

  constructor(private db : AngularFireDatabase) {
    this.tableau = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Family> {
    return this.tableau;
  }

}
