import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './login/login.interceptor';
import {
  CloudinaryModule,
  CloudinaryConfiguration,
} from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { NewReviewComponent } from './new-review/new-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ReviewsComponent,
    LoginComponent,
    SignUpComponent,
    NewReviewComponent,
    EditReviewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    CloudinaryModule.forRoot({ Cloudinary }, {
      cloud_name: 'walterscloudinary',
    } as CloudinaryConfiguration)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
