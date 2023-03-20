import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private _main:MainService , private router:Router ) { }

  ngOnInit(): void {
  }

  registerForm:FormGroup=new FormGroup({
    name: new FormControl(null,[Validators.required ,Validators.minLength(4)]),
    age: new FormControl(null,[Validators.required , Validators.min(20) , Validators.max(40)]),
    email: new FormControl(null,[Validators.required , Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]),
    address: new FormControl(null,[Validators.required ]),
    phone: new FormControl(null,[Validators.required ]),
    salary: new FormControl(null,[Validators.required ]),
  })

  submitForm(registerForm:any)
  {
      //console.log(registerForm.value)
      this._main.addData(registerForm.value).subscribe((data)=>{
        console.log(data)
        this.router.navigateByUrl('')

      }
      )
  }

}
