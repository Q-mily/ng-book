import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';
  constructor() { 
    this.product = new Product('a','a','a',['a'], 0);
  }

  ngOnInit(): void {
  }

}
