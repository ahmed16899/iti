import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private _main:MainService , private route: ActivatedRoute ,  private router:Router,) { }
  id: any;
  studnet: any;
  //studnets: any []=[];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getOne(this.id);
  }

  getOne(id:any)
  {
      this._main.getOne(id).subscribe((data)=>{
          console.log(data)
          this.studnet= data
          this.registerForm.patchValue(this.studnet)
      })
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
      this._main.updateData(this.id , registerForm.value).subscribe((data)=>{
        console.log(data)
        this.router.navigateByUrl('')

      }
      )
  }

}
