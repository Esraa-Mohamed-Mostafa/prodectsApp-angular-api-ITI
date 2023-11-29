import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {


  photos: any= [
    { url: 'assets/1.png', productName: 'MOBILES' },
    { url: 'assets/2.png',productName: "MEN'S FASHION"},
    { url: 'assets/3.png' ,productName: "TV" },
    { url: 'assets/4.png',productName: "SPORTS" },
    { url: 'assets/5.png' ,productName: "WOMEN'S FASHION"},
    { url: 'assets/7.png' ,productName: "WATCHES"},
    { url: 'assets/8.png' ,productName: "LAPTOPS"},
    { url: 'assets/9.png',productName: "TOYS" },
    { url: 'assets/11.png' ,productName: "FURNITURE"},
    { url: 'assets/6.png' ,productName: "HOME APPLIANCES"},
    { url: 'assets/4.png',productName: "SPORTS" },
    { url: 'assets/3.png' ,productName: "TV" },

  ];

  isClickable: boolean = true;
  handleImageClick(photo: any) {
    console.log('Clicked on photo:', photo);
  }
}

