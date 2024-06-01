
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
//------------------------------------------------------------------------
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent implements OnInit {
[x: string]: any;
addProduit() {
throw new Error('Method not implemented.');
}
//------------------------------------------------------------------------
  @ViewChild(MatSort) sort!: MatSort ;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  lesFamilles : string[]=[];

  tableau: any[] = [];

 url='https://tacosit-0-default-rtdb.europe-west1.firebasedatabase.app/';
 url2 =this.url +'familles.json';
  // url: string ='https://personne29200-default-rtdb.europe-west1.firebasedatabase.app/';
  // url2 = this.url + 'personne.json';
  public produitForm! : FormGroup;
//------------------------------------------------------------------------
  constructor(private httpClient: HttpClient, private fb : FormBuilder) {

  }
//------------------------------------------------------------------------
  ngOnInit(): void {


      this.httpClient.get<any>(this.url2).subscribe((response) => {
        console.log(response);
        console.log("Day that never come");
        if (response != undefined) {
          this.tableau=response;
          // for (let attribut in response) {
          //   let p: any = response[attribut];
          //   // p.prenom = p['prenom']
          //   p.id = attribut;
          //   this.tableau.push(p.id);
          //   console.log(p)
          // }
        }
        console.log(this.tableau.length);
      });

      this.produitForm = this.fb.group({
        nomProduit : this.fb.control(''),
        prix : this.fb.control('')
      });
  }

  ajoutProduit(){
    let nomProduit = this.produitForm.value.nomProduit;
    let prix = this.produitForm.value.prix;
    alert(nomProduit +" avec le prix "+prix +"  euros est ajouté");
  }


}
//------------------------------------------------------------------------$





