import { Injectable } from '@angular/core';
import { ICategory } from './icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: ICategory[] = [
    { id: 2, name: 'Home' },
    { id: 3, name: 'Beauty' },
    { id: 4, name: 'Health' },
    { id: 5, name: 'Food' },
    { id: 6, name: 'Clothes' },
    { id: 7, name: 'Holiday' },
  ];

  getCategories(): ICategory[] {
    return this.categories;
  }
}
