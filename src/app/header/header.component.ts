import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataCollect: HttpService) { }
    loginUser!: boolean;
    loginUserId!: string;
    
  ngOnInit(): void {
    this.get();
  }
  get(){
    this.loginUser = this.dataCollect.status;
    this.loginUserId = this.dataCollect.userId;
  }
  logout(){
    this.loginUser = false;
  }
}
