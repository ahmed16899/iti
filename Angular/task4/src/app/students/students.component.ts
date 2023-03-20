import { Component, OnInit , Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit , OnChanges {

  constructor() { }
 
  //@Input() studentsFromParent:any[]=[];
  @Input() studentFromParent:any
   students:any[]=[];

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['studentFromParent'].firstChange)
  
    if(!changes['studentFromParent'].firstChange)
    {
      this.students.push(this.studentFromParent)
      console.log(this.students)
    }
  }

}
