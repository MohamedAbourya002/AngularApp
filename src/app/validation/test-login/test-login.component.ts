import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-login',
  templateUrl: './test-login.component.html',
  styleUrl: './test-login.component.css'
})
export class TestLoginComponent {
submit(f: NgForm) {
  console.log("=>");
  console.log(f);

}


  logObj(email:any){

    console.log(email);
  }
}
