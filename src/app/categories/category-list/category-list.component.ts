import { Component } from "@angular/core";
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category.model';

@Component({
    selector: 'categories-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
    categories : Category[];

    constructor(private categoriesService : CategoryService) {
        this.categories = categoriesService.getCategories();
    }
}