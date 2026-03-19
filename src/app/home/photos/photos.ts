import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.html',
  styleUrl: './photos.scss',
})
export class Photos {

  photos = [
    'assets/img_1.JPG',
    'assets/img_2.JPG',
    'assets/img_3.jpg',
    'assets/img_4.jpg',
    'assets/img_5.jpg',
    'assets/img_6.jpg',
    'assets/img_7.jpg',
    'assets/img_8.jpg',
    'assets/img_10.jpg',
    'assets/img_11.jpg',
    'assets/img_12.jpg',
    'assets/img_13.jpg',
    'assets/img_14.jpg',
    'assets/img_15.jpg',
    'assets/img_16.jpg',
    'assets/img_17.jpg',
    'assets/img_18.jpg',
    'assets/img_19.jpg',
    'assets/img_20.jpg',
    'assets/img_21.jpg',
    'assets/img_22.jpg',
    'assets/img_23.jpg',
    'assets/img_24.jpg',
    'assets/img_25.jpg',
    'assets/img_26.jpg',
    'assets/img_27.jpg',
    'assets/img_28.jpg',
    'assets/img_29.jpg',
    'assets/img_30.jpg',
    'assets/img_31.jpg',
    'assets/img_32.jpg',
    'assets/img_33.jpg',
    'assets/img_34.jpg',
    'assets/img_35.jpg',
    'assets/img_36.jpg',
    'assets/img_37.jpg',
    'assets/img_38.jpg',
  ];

  selectedIndex: number | null = null;

  openModal(index: number) {
    this.selectedIndex = index;
  }

 closeModal(event?: Event) {
  console.log("close model called", event)
  event?.stopPropagation();
  this.selectedIndex = null;
}


  nextImage(event: Event) {
    console.log("this is nextimg", this.selectedIndex)
  event.stopPropagation(); // 💥 IMPORTANT
  if (this.selectedIndex !== null) {
    this.selectedIndex =
      (this.selectedIndex + 1) % this.photos.length;
  }
}

prevImage(event: Event) {
  console.log("this is previmg", this.selectedIndex)
  event.stopPropagation(); // 💥 IMPORTANT
  if (this.selectedIndex !== null) {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.photos.length) % this.photos.length;
  }
}

}