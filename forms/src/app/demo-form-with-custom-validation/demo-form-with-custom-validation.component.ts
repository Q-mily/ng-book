import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup,Validators,FormControl  } from '@angular/forms';

function skuValidator(control:FormControl): { [key: string]: boolean }  {
  if (!control.value.match('/^123/')){
    return {invalidSku: true};
  }
  return {};
}

@Component({
  selector: 'app-demo-form-with-custom-validation',
  templateUrl: './demo-form-with-custom-validation.component.html',
  styleUrls: ['./demo-form-with-custom-validation.component.css']
})
export class DemoFormWithCustomValidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, skuValidator])]
    });
    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void{
    console.log("you submitted: ", value);
  }

  ngOnInit(): void {
  }
}
