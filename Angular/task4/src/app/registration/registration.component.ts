import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  name:string=''
  age!:number
  ngOnInit(): void {
  }
  @Output() eventStudents = new EventEmitter();




  registerForm:FormGroup=new FormGroup({
    name: new FormControl(null,[Validators.required ,Validators.minLength(4)]),
    age: new FormControl(null,[Validators.required , Validators.min(20) , Validators.max(40)]),
  })

  submitForm(registerForm:any)
  {
      console.log(registerForm.value)
      this.eventStudents.emit(registerForm.value);

  }


}
