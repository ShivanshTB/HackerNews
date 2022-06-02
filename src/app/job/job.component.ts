import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  jobs: any = [];
  jobsId: any = [];
  idForJobs!: number;
  
  constructor(private jobsService: HttpService) {}

  ngOnInit(): void {
    this.jobFetch();
  }

  jobFetch() {
    this.jobsService.getjobId().subscribe((data: any) => {
        this.jobsId.push(...data);
        this.jobsId = this.jobsId.slice(0, 40);
        this.jobsId.forEach((element: any) => {
          this.idForJobs = element;
          this.jobsService.getData(this.idForJobs).subscribe((data: any) => {
            this.jobs.push(data);
          });
        });
      },
      (err) => alert(err.message)
    );
  }
}
