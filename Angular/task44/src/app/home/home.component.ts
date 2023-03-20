import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  registerForm:FormGroup=new FormGroup({
    name: new FormControl(null,[Validators.required ,Validators.minLength(4)]),
    age: new FormControl(null,[Validators.required , Validators.min(20) , Validators.max(40)]),
    email: new FormControl(null,[Validators.required , Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]),

  })

  submitForm(registerForm:any)
  {
      console.log(registerForm.value)

  }
}
