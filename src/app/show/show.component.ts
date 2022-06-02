import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  shows:any =[];
  showsId: any = [];
  idForShow!: number;
  
  constructor(private showService: HttpService) { }

  ngOnInit(): void {
    this.getshow();
  }
  getshow(){
      this.showService.getshowId().subscribe((data:any)=>{
        this.showsId.push(...data)
        this.showsId = this.showsId.slice(0,40);
        this.showsId.forEach((element:any) => {
          this.idForShow = element; 
          this.showService.getData(this.idForShow).subscribe((data:any)=>{
            this.shows.push(data);
          })
        });
      },(err)=>alert(err.message));
  }
}
