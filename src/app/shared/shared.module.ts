import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { InputFieldComponent } from './input-field/input-field.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormattedPricePipe } from './pipes/formatted-price.pipe';
import { FormattedNamePipe } from './pipes/formatted-name.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    InputFieldComponent,
    FormattedPricePipe,
    FormattedNamePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
  ],
  exports: [
    ProductsComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    InputFieldComponent,
  ],
})
export class SharedModule {}
