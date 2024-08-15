import { Produit } from "./produit";

export interface Famille {
  id:number;
  nomFamille:string;
  produits: Produit[];
}
