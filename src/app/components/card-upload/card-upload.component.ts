import { Component } from '@angular/core';

@Component({
  selector: 'app-card-upload',
  templateUrl: './card-upload.component.html',
  styleUrl: './card-upload.component.scss'
})
export class CardUploadComponent {
  imageSrc!: string ;//| ArrayBuffer | null = null;

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result+"";

        e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
