import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  asks:any = [];
  askId:any = [];
  idForAsk!: number;

  constructor(private askService: HttpService) { }

  ngOnInit(): void {
    this.getask();
  }
  getask(){
      this.askService.getaskId().subscribe((data:any)=>{
        this.askId.push(...data);
        this.askId = this.askId.slice(0,40);
        this.askId.forEach((element:any) => {
          this.idForAsk = element; 
          this.askService.getData(this.idForAsk).subscribe((data:any)=>{
            this.asks.push(data);
          })
        });
      },(err)=>alert(err.message));
  }
}
