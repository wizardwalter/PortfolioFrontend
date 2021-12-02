import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'reviews/create', component: NewReviewComponent},
  {path: 'reviews/edit/:id', component: EditReviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
