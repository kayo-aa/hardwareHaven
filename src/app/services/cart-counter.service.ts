import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartCounterService {
  private currentCartValue: number = this.storageService.getCartValue();
  private cartCounterObservable: BehaviorSubject<number> =
    new BehaviorSubject<number>(this.currentCartValue);

  constructor(private storageService: StorageService) {}

  get cartCounter() {
    return this.cartCounterObservable.asObservable();
  }

  addProduct() {
    this.currentCartValue += 1;
    this.cartCounterObservable.next(this.currentCartValue);
    this.storageService.setCartValue(this.currentCartValue);
  }

}
