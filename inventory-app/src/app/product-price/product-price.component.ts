import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
export class ProductPriceComponent implements OnInit {
  @Input() price: number;
  constructor() {
    this.price = 0;
  }
  
  ngOnInit(): void {
  }

}
