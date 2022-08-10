import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html'
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product: Product;
  constructor() { 
    this.product = new Product('a','a','a',['a'], 0);
  }

  ngOnInit(): void {
  }

}
