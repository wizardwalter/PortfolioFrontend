import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient, public router: Router) {}
  baseUrl = 'http://localhost:3000';
  isAuthenticated = false;
  isLoading: boolean = false;
  // public currentUserSource = new ReplaySubject<User>(1);
  // currentUser = this.currentUserSource.asObservable();
  private token: any;
  private tokenTimer : number = 0;
  private authStatusListener = new Subject<boolean>();

  getToken() {
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  };

  getIsAuth(){
    return this.isAuthenticated;
  }



  signUp(authData) {
    this.isLoading = true;
    return  this.http
      .post<{ token: string, expiresIn:number, user:User}>(this.baseUrl + '/users/create', authData)
      .subscribe(res => {
        console.log(res)
        const token = res.token;
        this.token = token;
        if(token){
          localStorage.setItem('user', JSON.stringify(res.user));
          const expiresInDuration = res.expiresIn;
          this.setAdminTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date (now.getTime() + expiresInDuration * 1000);
          this.saveAdminData(token, expirationDate);
          this.router.navigate(['/'])
          .then(() => {
            window.location.reload();
          });
        }

      });
  }

   login(email: string, password: string) {
    const authData: User = { email: email, password: password };
     return  this.http
      .post<{ token: string, expiresIn:number, user:User}>(this.baseUrl + '/users/login', authData)
      .subscribe(res => {
        const token = res.token;
        this.token = token;
        if(token){
         localStorage.setItem('user', JSON.stringify(res.user));
          const expiresInDuration = res.expiresIn;
          this.setAdminTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date (now.getTime() + expiresInDuration * 1000);
          this.saveAdminData(token, expirationDate);
          this.router.navigate(['/'])
          .then(() => {
            window.location.reload();
          });
        }

      });
  }
  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/'])
    .then(()=>{
      window.location.reload();
    })
  };

  setAdminTimer(duration:number){
      this.tokenTimer = window.setTimeout(()=>{
        this.logout()
      }, duration * 10000);
    }

   saveAdminData(token: string, expirationDate : Date){
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expirationDate.toISOString())
    }

   clearAuthData(){
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
      localStorage.removeItem('user');
    };
    private setAuthTimer(duration : number){
      this.tokenTimer = window.setTimeout(()=>{
        this.logout()
      }, duration * 1000);
    }

    autoAuthUser(){
      const authInformation = this.getAuthData();
      if(!authInformation){
        return;
      }
      const now = new Date();
      const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
      if(expiresIn > 0){
        this.token = authInformation.token;
        this.isAuthenticated = true;
        this.setAuthTimer(expiresIn / 1000);
        this.authStatusListener.next(true);
      }
    }

     getAuthData(){
      const token = localStorage.getItem('token');
      const expirationDate = localStorage.getItem('expiration');
      if(!token || !expirationDate){
        return;
      }
      return{
        token: token,
        expirationDate: new Date(expirationDate)
      }
    }



  }


