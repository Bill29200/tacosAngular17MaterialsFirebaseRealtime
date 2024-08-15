import { Component } from '@angular/core';

interface Produit {
  id: number;
  nomProduit: string;
  prix: number;
  urlImage: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'


})
export class HomeComponent {
  produits = [
    { id: 1, nomProduit: 'Produit1', prix: 100, urlImage: '' },
    { id: 2, nomProduit: 'Produit2', prix: 200, urlImage: '' }
    // Ajoutez d'autres produits ici
  ];

  onFileSelected(event: any, produit: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Ici nous utilisons une URL de données pour afficher un aperçu de l'image
        produit.urlImage = reader.result as string;
        this.saveFile(file, produit.nomProduit);

      };
      reader.readAsDataURL(file); produit.urlImage='downloads/'+`${produit.nomProduit}.jpg`;
      console.log("downloads/"+produit.nomProduit+"jpeg");
    }
  }

  saveFile(file: File, productName: string) {
    const fileName = `${productName}.jpg`;
    const a = document.createElement('a');
    const objectUrl =URL.createObjectURL(file);
    a.href = objectUrl;
    a.download = fileName;
    console.log(fileName);
    a.click();
    URL.revokeObjectURL(objectUrl);

    //------------------------------





  }



}
