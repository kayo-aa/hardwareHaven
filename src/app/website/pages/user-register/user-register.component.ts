import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  stepsCounter = 1;
  value = 'Clear me';

  changeStep(newStep: number): void{
    this.stepsCounter += newStep;
  }
}
