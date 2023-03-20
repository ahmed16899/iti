import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students:any[]=[
    {name:'ahmed' , email:"asdasd@gmail.com" , age:15},
    {name:'ayman' , email:"ayman@gmail.com" , age:20},
    {name:'ebrahem' , email:"ebrahem@gmail.com" , age:25},
  ];


}
