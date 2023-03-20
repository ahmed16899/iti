import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url=`http://localhost:3000/`
  constructor(private _HttpClient:HttpClient) { }
  getAllData():Observable<any>
  {
    return this._HttpClient.get(`${this.url}students`);
  }
  getOne(emp:any):Observable<any>
  {
    return this._HttpClient.get(`${this.url}students/${emp}`);
  }

  addData(emp:any ):Observable<any>
  {
    return this._HttpClient.post(`${this.url}students`,emp);
  }


  deleteData(emp:any ):Observable<any>
  {
    return this._HttpClient.delete(`${this.url}students/${emp}`);
  }

 updateData(empOld:any , emp:any ):Observable<any>
  {
    return this._HttpClient.put(`${this.url}students/${empOld}`, emp);
  }
}
