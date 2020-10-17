import { Component } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { ICategory } from '../../interface/icategory';

@Component({
  selector: 'categories-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  categories: ICategory[];

  constructor(categoriesService: CategoryService) {
    this.categories = categoriesService.getCategories();
  }
}
