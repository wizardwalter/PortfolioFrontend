import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../shared/review.service';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css'],
})
export class EditReviewComponent implements OnInit {
  id;
  review;
  constructor(public activatedRoute: ActivatedRoute, public reviewService: ReviewService, public router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(async (params) => {
      this.id = await params.get('id');
      this.reviewService.getReview(this.id).subscribe( async res =>{
        console.log(res)
        this.review = await res['review'];
      })
  })
}
  onSubmit(form: NgForm) {
      this.reviewService.editReview(this.id, form.value.text).subscribe(async res =>{
          await res;
          await this.router.navigateByUrl('/reviews')
      })
    };
  }

