import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommComponent } from 'src/app/landing/comm/comm.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

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

  openComm() {
    console.log("Opening Communication panel")
    const dialog = this.dialog.open( CommComponent, {
      // width: '90%', 
      maxWidth: '90%'
    });
    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
