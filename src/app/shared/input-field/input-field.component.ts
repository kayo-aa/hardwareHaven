import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent {
  formPersonal: FormGroup;
  formUsuario: FormGroup;
  passwordsPattern: string = '^(?=w*d)(?=w*[A-Z])(?=w*[a-z])S{8,16}$';
  private userFormInfo: object = {};
  userInfo: User;
  @Input() stepsCounter = 0;
  @Output() stepsCounterEmitter = new EventEmitter<number>();
  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private route: Router
  ) {
    this.formPersonal = this.buildPersonalForm();
    this.formUsuario = this.buildUserForm();
    this.userInfo = { ...this.storageService.getUserInfo() };
  }

  changeStep(event: MouseEvent) {
    const target = event.target as HTMLElement;

    target.textContent === 'Log In'
      ? this.stepsCounterEmitter.emit(3)
      : this.stepsCounterEmitter.emit(1);

    if (this.stepsCounter == 2) {
      this.userFormInfo = { ...this.userFormInfo, ...this.formPersonal.value };
    }

    if (this.stepsCounter == 3) {
      this.userFormInfo = { ...this.userFormInfo, ...this.formUsuario.value };
      this.storageService.setUserInfo(this.userFormInfo as User);
      this.userInfo = this.storageService.getUserInfo();
    }
  }

  private buildPersonalForm() {
    return this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      dni: ['', [Validators.required, this.minlengthNumber(8)]],
    });
  }

  private buildUserForm() {
    return this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$'
          ),
        ],
      ],
      telefono: ['', [Validators.required, this.minlengthNumber(10)]],
    });
  }

  get nameField() {
    return this.formPersonal.get('nombre');
  }
  get lastNameField() {
    return this.formPersonal.get('apellido');
  }

  get dniField() {
    return this.formPersonal.get('dni');
  }

  get mailField() {
    return this.formUsuario.get('mail');
  }

  get passwordField() {
    return this.formUsuario.get('contrasena');
  }

  get phoneField() {
    return this.formUsuario.get('telefono');
  }

  private minlengthNumber(minLength: number) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;

      if (value !== null && value.toString().length < minLength) {
        return { minlengthNumber: true };
      }

      return null;
    };
  }

  changePage(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.textContent == 'Ver productos'
      ? this.route.navigateByUrl('/shop')
      : this.route.navigateByUrl('/home');
  }
}
