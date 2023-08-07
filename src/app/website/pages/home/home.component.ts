import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  imageSrc = '';

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setImageSrc();
  }

  ngOnInit() {
    this.setImageSrc();
  }

  setImageSrc(): void {
    const width = window.innerWidth;

    if (width <= 1100 && width >= 750) {
      this.imageSrc = 'assets/img/componentes.jpg';
    } else if (width < 750) {
      this.imageSrc = 'assets/img/mouse.jpg';
    } else {
      this.imageSrc = 'assets/img/teclado2.jpg';
    }
  }
}
