import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';

import { MatBadgeModule } from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'
import { LayoutComponent } from './layout/layout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    HomeComponent,
    UserRegisterComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    // MatBadgeModule,
    // MatButtonModule,
    // MatIconModule,
    // MatInputModule,
    // MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    // MatFormFieldModule,
    // MatDividerModule,
    // MatListModule,
    WebsiteRoutingModule,
  ],
})
export class WebsiteModule {}
