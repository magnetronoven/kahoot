import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  creatPost(){
    console.log("banaan");
    const data = {
      id: 2,
      name: 'mandje'
    }

    this.http.get('http://localhost:4201/banaan').subscribe(data => {
      console.log(data);
    });
  }

}
