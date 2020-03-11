import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import { AccountverifyService } from 'src/app/service/accountverify.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public operator: string;

  constructor( private _operator: AccountverifyService ) { }

  ngOnInit() {
  }

  pickOperator(operator) {
    console.log(operator);
    this._operator.closeAccount(operator);
    // this.dialogRef.close;
  }

  defaultOperator() {
    console.log("Default Operator")
    const operator = "Default"
    this._operator.closeAccount(operator);
  }

  // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  //   const isSubmitted = form && form.submitted;
  //   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  // }

}

// /** @title Input with a custom ErrorStateMatcher */
// @Component({
//   selector: 'input-error-state-matcher-example',
//   templateUrl: './input-error-state-matcher-example.html',
//   styleUrls: ['./input-error-state-matcher-example.css'],
// })
// export class InputErrorStateMatcherExample {
//   emailFormControl = new FormControl('', [
//     Validators.required,
//     Validators.email,
//   ]);

//   // matcher = new MyErrorStateMatcher();
// }
