import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task3';
  students:any = [];

  addStudent(newItem: any) {
    this.students.push(newItem);
    console.log(this.students)
  }
}
