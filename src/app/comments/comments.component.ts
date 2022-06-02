import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any = [];

  constructor(private commentService: HttpService) { }

  ngOnInit(): void {
    this.getComment();
  }
  getComment() {
    for (let i = 100; i < 300; i++) {
      this.commentService.getData(i).subscribe((data:any)=>{
        if(data.type == "comment"){
          this.comments.push(data);
        }
      },(err)=> alert(err.message));
    }
  }
}
