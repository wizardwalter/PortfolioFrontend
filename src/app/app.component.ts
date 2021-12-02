import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public userService: UserService){}
  title = 'my-portfolio';
  windowHeight;
  windowWidth;

  ngOnInit() {
    this.userService.autoAuthUser();
    this.fillScreen()
  }

  fillScreen(){
    this.windowHeight = window.screen.height +"px";
    this.windowWidth = window.screen.width+"px";
  }
}
