import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  file: any;
  fileName: string = "No Image Selected";
  imageUrl: string | ArrayBuffer | null = "https://bulma.io/images/placeholders/256x256.png";

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(formObj: NgForm) {
    let Data = {
      name: formObj.value.name,
      email: formObj.value.email,
      password: formObj.value.password
    };
  let formData = new FormData();
  let userObj = formObj.value;

  formData.append("photo", this.file);
  formData.append("name", Data.name);
  formData.append("email", Data.email);
  formData.append("password", Data.password);
  formData.append("userObj", JSON.stringify(userObj));
  console.log(formData)
  console.log(this.file)
  await this.userService.signUp(formData)
  await this.router.navigateByUrl("/");
  }

  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
      }

    }
  };

}
