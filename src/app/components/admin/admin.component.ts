
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
//------------------------------------------------------------------------
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent implements OnInit {

addProduit() {

}
//------------------------------------------------------------------------





  public produitForm! : FormGroup;
//------------------------------------------------------------------------
  constructor(public data: DataService) {

  }
//------------------------------------------------------------------------
  ngOnInit(): void {

    this.data.getAll();

        }





  ajoutProduit(){

  }


}
//------------------------------------------------------------------------$





