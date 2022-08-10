import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

  constructor() { }

  onSubmit(values: any): void{
    console.log("you submitted form: ", values)
  }

  ngOnInit(): void {
  }

}
