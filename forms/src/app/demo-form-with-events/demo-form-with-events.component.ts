import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html',
  styleUrls: ['./demo-form-with-events.component.css']
})
export class DemoFormWithEventsComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.myForm.valueChanges.subscribe(
      (form: any) =>{
        console.log('Form changed to: ', form);
      }
    );

    this.myForm.controls['sku'].valueChanges.subscribe(
      (value: string) =>{
        console.log('SKU changed to: ', value);
      }
    );
  }

  

  ngOnInit(): void {
  }

}
