import { Component, OnInit } from '@angular/core';
import { SubCategoria } from 'src/app/models/sub-categoria.model';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  subCategories: SubCategoria[] | null = null;

  constructor(private subCategoriesService: SubCategoriesService) {}
  ngOnInit(): void {
    this.subCategoriesService.getAll().subscribe((data) => {
      this.subCategories = data;
    });
  }
}
