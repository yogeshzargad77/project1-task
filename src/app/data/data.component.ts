import { Component, OnInit } from '@angular/core';
import { ServicedataService } from '../servicedata.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
public userData : any;
public allData : any;
user:any;
  constructor(private serv : ServicedataService) {
    this.serv.getAllData().subscribe((res:any)=>{
      this.user=res;
    })
    this.getDataFromBackend();
    this.getAllDataFromBackend();
   }

  ngOnInit(): void {
  }

  getDataFromBackend(){

    console.log(this.serv.getData());
    this.serv.getData().subscribe(
      (res)=>{
      console.log(res);
      this.userData=res;
      },
    (err)=>{
      console.log(err);
    }
    )
  }

  getAllDataFromBackend(){
    this.serv.getAllData().subscribe(
      (res)=>{
        console.log(res);
        this.allData= res;
      },
      (err)=>{
        console.log(err);
      }
      
    )
  }

}
