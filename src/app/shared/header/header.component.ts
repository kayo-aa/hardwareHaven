import { Observable } from 'rxjs';
import { CartCounterService } from './../../services/cart-counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  private cartCounter$: Observable<number>;
  cartCounter = 0;
    constructor(private cartCounterService: CartCounterService){
    this.cartCounter$ = this.cartCounterService.cartCounter;
  }

  ngOnInit(): void{
    this.cartCounter$.subscribe( data => {
      this.cartCounter = data
    });
  }
}
