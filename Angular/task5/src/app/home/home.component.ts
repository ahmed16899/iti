import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _main:MainService) { }
  allData:any=[]
  ngOnInit(): void {
    this.getData();
  }

  getData()
  {
    this._main.getAllData().subscribe((data)=>
    {
      console.log(data);
      this.allData=data
    })
  }
  deleteDataa(emp:any)
  {
    
    this._main.deleteData(emp).subscribe((data)=>
    {
      console.log(data);
      //this.allData.splice()
      let elementPos = this.allData.map(function(x:any) {return x.id; }).indexOf(emp);
      console.log(elementPos)
      this.allData.splice(elementPos,1)
    })
  }

}
