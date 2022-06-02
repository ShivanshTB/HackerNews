import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
  pasts: any = [];
  
  constructor(private pastService: HttpService) { }

  ngOnInit(): void {
    this.getpast();
  }

  getpast() {
    for (let i = 200; i < 330; i++) {
      this.pastService.getData(i).subscribe((data:any)=>{
        if(data.type !="comment"&& data.hasOwnProperty('title')){
          this.pasts.push(data);
        }
      },(err)=> alert(err.message));
    }
  }
}
