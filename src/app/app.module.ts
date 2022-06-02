import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ThreadsComponent } from './threads/threads.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowComponent } from './show/show.component';
import { LoginComponent } from './login/login.component';
import { AskComponent } from './ask/ask.component';
import { CommentsComponent } from './comments/comments.component';
import { PastComponent } from './past/past.component';
import { JobComponent } from './job/job.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ThreadsComponent,
    WelcomeComponent,
    ShowComponent,
    LoginComponent,
    AskComponent,
    CommentsComponent,
    PastComponent,
    JobComponent,
    NewsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
