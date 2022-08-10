import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.productList = [];
    this.onProductSelected = new EventEmitter();
    this.currentProduct = this.productList[0];
  }

  clicked(product: Product): void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    if(product.sku === this.currentProduct.sku){
      console.log("Test: ", product.name);
    }
   
    return product.sku === this.currentProduct.sku;
    
  }

  ngOnInit(): void {
  }

}
