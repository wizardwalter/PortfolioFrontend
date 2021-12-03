import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { ReviewService } from '../shared/review.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  constructor(public reviewService: ReviewService) { }
  currentUser;
  ngOnInit(): void {
   this.currentUser = JSON.parse(localStorage.getItem('user'))
  }
  onSubmit(form :NgForm){
    this.reviewService.addReview(form.value.text, this.currentUser._id).subscribe(res=>{
      console.log(res)
    })
  }
}
