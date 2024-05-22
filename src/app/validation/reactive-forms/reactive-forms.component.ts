import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {


  form= new FormGroup({
    email : new FormControl('',Validators.required),
    pass  :new FormControl(),
    age   : new FormControl('',CustomValidators.range([5,9]))
  })

  get email(){
    return this.form.get('email') ;
  }

  get age(){
    return this.form.get('age')
  }
}
