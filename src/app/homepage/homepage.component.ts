import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  projects = [];
  websites = [];
  certs =[];
  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", function(){
      window.addEventListener('scroll', function() {
          if (window.scrollY > 275) {
            document.getElementById('whole-nav').classList.add('fixed-top');
            document.getElementById('whole-nav').style.marginTop = '0';
          } else {
            document.getElementById('whole-nav').classList.remove('fixed-top');
            document.getElementById('whole-nav').style.marginTop = '10';
          }
      });
    });
    (function() {
      let elements;
      let elements2
      let windowHeight;

      function init() {
        elements = document.getElementsByClassName('hidden');
        elements2 = document.getElementsByClassName('hidden2');
        windowHeight = window.innerHeight;
      }

      function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var positionFromTop = elements[i].getBoundingClientRect().top;

          if (positionFromTop - windowHeight <= 0) {
            element.classList.add('animate__fadeInRightBig');
            element.classList.remove('hidden');
          }
        }
        for (var i = 0; i < elements2.length; i++) {
          var element2 = elements2[i];
          var positionFromTop2 = elements2[i].getBoundingClientRect().top;


          if (positionFromTop2 - windowHeight <= 0) {
            element2.classList.add('animate__fadeIn');
            element2.classList.remove('hidden2');
          }
        }

      }

      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);

      init();
      checkPosition();
    })();
    this.certs.push(
      {
      picture:"https://res.cloudinary.com/walterscloudinary/image/upload/v1636735741/webPortfolio/sql_cert_uspuyp.jpg",
      title:"SQL Certificate from Udemy"
      },
      {
      picture:"https://res.cloudinary.com/walterscloudinary/image/upload/v1636735741/webPortfolio/web_dev_cert_szsayo.jpg",
      title:"Professional Web Developer Certificate from Udemy"
      },
      {
      picture:"https://res.cloudinary.com/walterscloudinary/image/upload/v1636735740/webPortfolio/MEAN_stack_cert_lmidfu.jpg",
      title:"Professional MEAN Stack Certificate from Udemy"
      },

    )
    this.projects.push(
      {
        picture: "https://res.cloudinary.com/walterscloudinary/image/upload/v1634055826/webPortfolio/patalap_bv81nl.png",
        title: "Patalap keyboard game",
        description: "press buttons on your keyboard to hear different beats and animations using paper.js.",
        link:"https://wizardwalter.github.io/PatalapGame/patalap.html"
      },
      {
        picture:"https://res.cloudinary.com/walterscloudinary/image/upload/v1634056102/webPortfolio/pacman_nl9aux.png",
        title: "Pacman",
        description: "watch Pacman bounce around the screen.",
        link:"https://wizardwalter.github.io/PacMan/"
      },
      {
        picture:"https://res.cloudinary.com/walterscloudinary/image/upload/v1634059725/webPortfolio/eyes_sgyfqj.png",
        title: "Eyes",
        description: "a pair of eyes follows your cursor all over the screen.",
        link:"https://wizardwalter.github.io/eyes-exercise/"
      },
      {
        picture:"https://res.cloudinary.com/walterscloudinary/image/upload/v1634056261/webPortfolio/MIT_to_harvard_zcnvyh.png",
        title: "Bus Tracker",
        description: "All the bustops from MIT to Harvard campus.",
        link:"https://wizardwalter.github.io/real-time-bus-tracking/"
      },
      {
        picture:"https://res.cloudinary.com/walterscloudinary/image/upload/v1634059975/webPortfolio/hanoi_towers_etrotz.png",
        title: "Hanoi Towers",
        description: "enter number of discs and click make move until all discs are on the last pole.",
        link:"https://wizardwalter.github.io/hanoiTowers/"
      },
      {
        picture:"https://res.cloudinary.com/walterscloudinary/image/upload/v1634060400/webPortfolio/bank_app_ojoy0d.png",
        title: "Mock Bank",
        description: "create an account, deposit and withdraw money and watch your account balance update.",
        link:"https://mybankingapp101.s3.us-east-2.amazonaws.com/index.html#/"
      },

  )
  this.websites.push({
    picture:"https://res.cloudinary.com/walterscloudinary/image/upload/v1634060677/webPortfolio/k9cs_oezgom.png",
        title: "K9CS",
        description: "Full responsive website I built and styled with help from a friend.",
        link:"https://k9-frontend.herokuapp.com/#/"
  })
  }

}
