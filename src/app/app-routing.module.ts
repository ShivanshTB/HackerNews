import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskComponent } from './ask/ask.component';
import { CommentsComponent } from './comments/comments.component';
import { JobComponent } from './job/job.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PastComponent } from './past/past.component';
import { ShowComponent } from './show/show.component';
import { ThreadsComponent } from './threads/threads.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"",redirectTo: 'new', pathMatch:'full'},
  {path:'new',component:NewsComponent},
  {path:'jobs',component:JobComponent},
  {path:'show',component:ShowComponent},
  {path:'past',component:PastComponent},
  {path:'ask',component:AskComponent},
  {path:'comments',component:CommentsComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'threads',component:ThreadsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
