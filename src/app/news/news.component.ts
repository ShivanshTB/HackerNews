import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: any = [];
  newsId: any = [];
  idForNews!: number;
  
  constructor(private newsService: HttpService) {}

  ngOnInit(): void {
    this.newsIdFetch();
  }

  newsIdFetch() {
    this.newsService.getnewsId().subscribe((data: any)=>{
        this.newsId.push(...data);
        this.newsId = this.newsId.slice(0, 40);
        this.newsId.forEach((element: any)=>{
          this.idForNews = element;
          this.newsService.getData(this.idForNews).subscribe((data: any) => {
            this.news.push(data);
          });
        });
      },
      (err) => alert(err.message)
    );
  }
}
