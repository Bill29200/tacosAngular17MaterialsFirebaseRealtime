
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { DataService } from '../../services/data.service';
//------------------------------------------------------------------------
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})


export class AdminComponent implements OnInit {

  nomFamille! : string;
  nomProduit! : string;
  prix! : number;
  nomProduit1!:string;



  constructor(public data: DataService) {  }
  //....................................................
  selectFamilly(famille:string):void{
    this.nomFamille = famille;
  }
  //....................................................
  deleteFamille() {

    this.data.deleteFamille(
      this.data.getIndexOfFamille(this.nomFamille)
    );
    this.nomFamille="";
    }
  //...................................................
  addProduit(nomFamille: string,nomProduit: string,prix: number) {

    let index = this.data.getIndexOfFamille(nomFamille);

    let produit={"nomProduit":nomProduit, "prix":prix};
    this.data.addProduitToFamille(produit,index);

    this.nomProduit=""; this.prix=0;

    }

  //...................................................
  selectProduit(nomFamille: string,nomProduit: string) {
    this.nomFamille = nomFamille;
    this.nomProduit = nomProduit;
    }

//------------------------------------------------------------------------
deleteProduit() {
  let indexFamille = this.data.getIndexOfFamille(this.nomFamille);
  let indexProduit = this.data.getIndexOfProduit(indexFamille, this.nomProduit);
   this.data.deleteProduitOfFamille(indexProduit,indexFamille);
   this.nomProduit = ""; this.nomFamille="";
  }
//------------------------------------------------------------------------

//------------------------------------------------------------------------
  ngOnInit(): void {

    this.nomFamille="";

    const id: string = uuidv4();
    console.log(id);
        }

//-----------------------------------------
addFamille(nomFamille:string) {
  this.data.addFamille(nomFamille);
  //this.data.getAll();
  this.nomFamille="";
  }
//------------------------------------------
  loadProduit(nomFamille: string,nomProduit: string,prix: number) {
    console.log("Nom produit : "+ nomProduit+" de la famille :"+nomFamille);
    this.nomFamille=nomFamille; this.nomProduit= nomProduit; this.prix = prix;
    this.nomProduit1=nomProduit;
  }
  //---------------------------------------------
  updateProduit() {
    console.log("Produit :" +this.nomProduit+" Prix:  "+this.prix+" Famille:"+this.nomFamille);
    let produit={"nomProduit":this.nomProduit, "prix":this.prix};
    let indexFamille = this.data.getIndexOfFamille(this.nomFamille);
    let indexProduit = this.data.getIndexOfProduit(indexFamille, this.nomProduit1);
    console.log("index produit caluculé = "+indexProduit);
    this.data.updateProduitOfFamille(produit,indexProduit,indexFamille);
    console.log(this.data.familles);
    }
//..............................................
loadFamille(nomFamille:string) {
  this.nomFamille= nomFamille;
  }

}
//------------------------------------------------------------------------






