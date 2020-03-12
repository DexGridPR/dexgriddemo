import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountverifyService {

  // operator: string;
  private operator = new BehaviorSubject<string>("Santa Isabel");
  currentOperator = this.operator.asObservable();


  constructor() { }

  closeAccount(operator) {
    console.log("Closing Account Dialog");
    // this.operator = operator;
    this.operator.next(operator);
    console.log("this.operator: " + this.operator);
  }
}
