import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../../interface/icategory';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() category: ICategory;

  constructor() {}

  ngOnInit(): void {}
}
