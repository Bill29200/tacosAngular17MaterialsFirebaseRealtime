import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../../models/produit';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
//...................................................................
export class ProductFormComponent {

  produitForm!: FormGroup;
nomProduit: any;
prix: any;
url!: any;

imageSrc!: string;
//...................................................................
  constructor(private fb: FormBuilder) {

    this.produitForm = this.fb.group({
      nomProduit: ['', Validators.required],
      prix: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.min(0)]],
      url: ['', [Validators.required]]
    });
  }
//...................................................................
  ngOnInit(): void {}
//...................................................................
  onSubmit(): void {
    if (this.produitForm.valid) {
      const nouveauProduit: Produit = this.produitForm.value;
      console.log('Produit soumis:', nouveauProduit);
      // Vous pouvez maintenant envoyer les données du produit au serveur ou effectuer une autre action
    } else {
      console.log('Le formulaire est invalide');
    }
  }
//...................................................................
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result+"";

        e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }
//...................................................................
ajouterProduit() {
  alert('Method not implemented.');
  }


}

