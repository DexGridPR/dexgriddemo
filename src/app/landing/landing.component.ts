import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollElement(target) {
    console.log(target);
    target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  scrollElementWork(worktogether) {
    console.log(worktogether);
    worktogether.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
