//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface Famille {
  nomFamille: string;
  produits: Produit[];
}

interface Produit {
  nomProduit: string;
  prix: number;
}

@Injectable({
  providedIn: 'root'
})
//------------------------------------------------------------------------------------------------------------------
export class DataService {


  url = 'https://tacosit-0-default-rtdb.europe-west1.firebasedatabase.app/';
  url2 = this.url + 'familles.json';

  public famillesBdd: Famille[] = [
    {
      "nomFamille": "Viandes", "produits": [
        { "nomProduit": "Kebab", "prix": 5 }, { "nomProduit": "Escalop", "prix": 5 }, { "nomProduit": "Paprica", "prix": 5 }, { "nomProduit": "Cordon bleu", "prix": 5 }
      ]
    },
    {
      "nomFamille": "Sauces", "produits": [
        { "nomProduit": "Algerienne", "prix": 0 }, { "nomProduit": "Marocaine", "prix": 0 }, { "nomProduit": "Mayounaise", "prix": 0 }, { "nomProduit": "Harissa", "prix": 0 }
      ]
    },
  ];
  familles: Famille[] = [];

  idActuel = 0;

  constructor() {
    this.getAll()
  }
  //.....................................................................
  getAll() {
    this.familles = this.famillesBdd;
  }
  //.....................................................................
  addFamille(nomFamille: string) {
    let produits: Produit[] = [];
    let famille: Famille = { "nomFamille": nomFamille, "produits": produits };
    this.familles.push(famille);
  }
  //...................................................................
  deleteFamille(i: number) {
    this.familles.splice(i, 1);
  }
  //...................................................................
  updateFamille(i: number, famille: Famille) {
    this.familles[i] = famille;
  }
  //...................................................................
  getNb() {
    return this.familles.length;
  }
  //....................................................................
  onSupprimerTout() {
    this.familles.splice(0, this.familles.length);
  }
  //....................................................................
  //....................................................................
  getAllProduitOfFamille(nomFamilleRecherche: string): Produit[] | undefined {
    const familleTrouvee = this.familles.find(famille => famille.nomFamille === nomFamilleRecherche);
    return familleTrouvee ? familleTrouvee.produits : undefined;
  }
  //....................................................................
  getIndexOfFamille(nomFamille: string): number {
    const index = this.familles.findIndex(famille => famille.nomFamille === nomFamille);
    return index;
  }
  //....................................................................
  addProduitToFamille(produitAjouter: Produit, indexFamille: number) {
    if (indexFamille >= 0 && indexFamille < this.familles.length) {
      // Ajouter le produit à la famille spécifiée par indexFamille
      this.familles[indexFamille].produits.push(produitAjouter);
    } else {
      console.error('Index de famille invalide');
    }
  }
  //....................................................................
  deleteProduitOfFamille(indexProduit: number, indexFamille: number) {
    if (indexFamille >= 0 && indexFamille < this.familles.length) {
      const famille = this.familles[indexFamille];
      if (indexProduit >= 0 && indexProduit < famille.produits.length) {
        // Supprimer le produit à l'index spécifié
        this.familles[indexFamille].produits.splice(indexProduit, 1);
      } else {
        console.error('Index de produit invalide');
      }
    } else {
      console.error('Index de famille invalide');
    }
  }

  //..........................................................................................
  updateProduitOfFamille(produitUpdated:Produit,indexProduit: number, indexFamille: number ){
    if (indexFamille >= 0 && indexFamille < this.familles.length) {
      const famille = this.familles[indexFamille];
      if (indexProduit >= 0 && indexProduit < famille.produits.length) {
        // Supprimer le produit à l'index spécifié
        this.familles[indexFamille].produits[indexProduit]=produitUpdated;
        console.log(produitUpdated.nomProduit+" updated");
      } else {
        console.error('Index de produit invalide');
      }
    } else {
      console.error('Index de famille invalide');
    }

  }
 //..........................................................................................
  getNumberOfProduitsOfFamille(indexFamille:number):number | undefined{
    if (indexFamille >= 0 && indexFamille < this.familles.length) {
       return this.familles[indexFamille].produits.length;
    } else {
      console.error('Index de famille invalide');
      return undefined;
    }
  }
  //............................................................................
  getIndexOfProduit(indexFamille: number, nomProduit: string): number  {

    const index = this.familles[indexFamille].produits.findIndex(produit => produit.nomProduit === nomProduit);
    return index;

  }
}
