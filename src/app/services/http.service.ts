import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { login } from '../login/login';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  public status !:boolean;
  public userId !: string;
  
  url = "https://hacker-news.firebaseio.com/v0/";
  back =   ".json?print=pretty";
  forUser = "http://localhost:3000/posts";

  getData(id:number){
      return this.http.get(this.url+"item/"+id+this.back).pipe(
      catchError((error:any)=> throwError(error)));
  }

  getnewsId(){
      return this.http.get(this.url+"newstories/"+this.back).pipe(
      catchError((error:any)=> throwError(error)));
  }
  
  getjobId(){
    return this.http.get(this.url+"jobstories/"+this.back).pipe(
      catchError((error:any)=> throwError(error)));
  }

  getaskId(){
    return this.http.get(this.url+"askstories/"+this.back).pipe(
      catchError((error:any)=> throwError(error)));
  }
  getshowId(){
    return this.http.get(this.url+"showstories/"+this.back).pipe(
      catchError((error:any)=> throwError(error)));
  }
 
  getuser(){
    return this.http.get(this.forUser).pipe(
      catchError((error:any)=> throwError(error)));
  }
  postUser(data:login){
    return this.http.post(this.forUser,data);
  }
}
