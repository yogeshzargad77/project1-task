import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {

  public id : any = new BehaviorSubject(5);
  public currentid = this.id.asObservable()

  public data: any =new BehaviorSubject('');
  public currentdata = this.data.asObservable()
 

  constructor(private http : HttpClient) { }


  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
}

postData(data:any){
  return this.http.post('https://reqres.in/api/users',data);
 }


getAllData(){
  return this.http.get('https://reqres.in/api/users');
}



}