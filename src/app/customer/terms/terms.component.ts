import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  closeD() {
    this.dialogRef.closeAll();
  }

}
