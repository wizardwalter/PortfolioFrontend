import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ReviewService } from '../shared/review.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  constructor(public reviewService: ReviewService, public router: Router) { }
  currentUser;
  ngOnInit(): void {
   this.currentUser = JSON.parse(localStorage.getItem('user'))
   if(!this.currentUser){
     this.router.navigateByUrl('/login')
   }
  }
  onSubmit(form :NgForm){
    this.reviewService.addReview(form.value.text, this.currentUser._id).subscribe( async res=>{
      await res;
      await this.router.navigateByUrl('/reviews')
    })
  }
}
