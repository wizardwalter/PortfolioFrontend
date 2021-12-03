import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../shared/review.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(public userService: UserService, public reviewService: ReviewService, public router: Router) { }
  reviews;
  currentUser;
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'))
   this.reviewService.getReviews().subscribe(res=>{
     console.log('comments',res['comments'][0].user)
      this.reviews = res['comments'];
    })
    console.log('currentUser._id:',this.currentUser._id)
  }
  deleteReview(id){
    this.reviewService.deleteReview(id).subscribe(res=>{
      window.location.reload();
    })
  }

}
