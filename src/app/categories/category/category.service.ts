import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories = [
    new Category('Home'),
    new Category('Beauty'),
    new Category('Health'),
    new Category('Food'),
    new Category('Clothes'),
    new Category('Holiday'),
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
