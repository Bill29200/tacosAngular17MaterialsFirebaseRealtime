import { Component } from '@angular/core';
interface Famille {
  nomFamille: string;
  produits: Produit[];
}

interface Produit{
  nomProduit: string;
  prix:number;
}
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {

  nb !: number;
  familles: Famille[] = [];
  produits: Produit[] = [];

  nomFamille1:string = '';
  produits1:Produit[] =[];

  idActuel=0;


  nomFamille: string = '';

  onAjouter() {
    // post

    let p: any = {};
    p.nomFamille = this.nomFamille;
    p.produits = this.produits;
    // vider input
    this.nomFamille = ''
    this.produits = [];
    this.familles.push(p);
   }

  onEnlever(i: number) {
      this.familles.splice(i, 1);
  }

  onCharger(i: number)
  {
    this.nomFamille1 = this.familles[i].nomFamille;
    this.produits1 = this.familles[i].produits;
    this.idActuel =i;
  }

  onModifier()
  {
    let p= {nomFamille:this.nomFamille1, produits:this.produits1};
    this.familles[this.idActuel] =p;
  }
  onSupprimerTout()
  {
      this.familles.splice(0, this.familles.length);
  }
  getNb()
  {
      return this.familles.length;
  }
    //.................
    public searchModels(key: string): void {
      //console.log(key);
      const results: Famille[] = [];
      for (const famille of this.familles) {
       // console.log(model);
        if (famille.nomFamille.toLowerCase().indexOf(key.toLowerCase()) !== -1
          // || model.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
          // || model.algoc1.toLowerCase().indexOf(key.toLowerCase()) !== -1
         ) {
          results.push(famille);
        }
      }
      let tmp = this.familles;
      this.familles = results;
      if (results.length === 0 || !key) {
        this.familles=tmp;
      }
    }
    //......................................................
}
