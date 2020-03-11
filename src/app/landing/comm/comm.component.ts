import { Component, OnInit } from '@angular/core';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.scss']
})
export class CommComponent implements OnInit {

  constructor( private _submitfire: SubmitfireService, private dialogRef: MatDialog ) { }

  ngOnInit() {
  }

  submitMessage(name, communication, comment) {
    console.log("Sending message")
    console.log("name:" , name)
    this._submitfire.submitMessage(name, communication, comment)
    this.dialogRef.closeAll();
  }

}
