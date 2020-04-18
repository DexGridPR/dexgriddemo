import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { User } from '../../service/user.model';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  theUser: User

  constructor(private dialogRef: MatDialog, public auth: AuthService,) { }

  ngOnInit() {
    this.auth.user$.subscribe(user$ => {
      this.theUser = user$;
    })
  }

  async activate() {
    console.log("Activating this account");
    await this.auth.activateAccount();
    return this.dialogRef.closeAll();
  }

  closeD() {
    this.dialogRef.closeAll();
  }

}
