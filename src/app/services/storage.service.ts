import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  setCartValue(data: number): void {
    localStorage.setItem('cartValue', JSON.stringify(data));
  }
  getCartValue(): number {
    const tasksString: string | null = localStorage.getItem('cartValue');
    return tasksString ? JSON.parse(tasksString) : 0;
  }

  setUserInfo(data: User): void {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  getUserInfo(): User {
    const tasksString: string | null = localStorage.getItem('userInfo');
    return tasksString ? JSON.parse(tasksString) : {};
  }
}
