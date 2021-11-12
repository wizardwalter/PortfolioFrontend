import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-portfolio';
  windowHeight;
  windowWidth;

  ngOnInit() {
    this.fillScreen()

  }

  fillScreen(){
    this.windowHeight = window.screen.height +"px";
    this.windowWidth = window.screen.width+"px";
  }
}
