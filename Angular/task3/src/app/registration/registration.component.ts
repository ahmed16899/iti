import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  add() {
    if(this.name.length > 3 && this.age > 20 && this.age <40)
    {
      this.eventStudents.emit({name:this.name , age:this.age});
    }
  }
}
