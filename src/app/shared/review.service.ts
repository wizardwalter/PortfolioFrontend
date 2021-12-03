import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(public http: HttpClient, public router: Router) {}
   baseUrl = 'https://myportfolio-backend101.herokuapp.com';
  // baseUrl = 'http://localhost:3000'

  getReviews() {
    return this.http.get(this.baseUrl + '/reviews');
  }

  getReview(id:any){
    return this.http.get(this.baseUrl + "/reviews/"+ id)
  };

  addReview(form:string, currentUser:any) {
    console.log({text:form, userId: currentUser})
    return this.http.post(this.baseUrl + '/reviews/create', {text:form, userId: currentUser});
  };

  editReview(id:any, text:any): Observable<any>{
    console.log('text: ', text)
    return this.http.put(this.baseUrl + '/reviews/' + id, {text:text})
  };

  deleteReview(id:any){
    return this.http.delete(this.baseUrl + '/reviews/' + id);
  };
}
