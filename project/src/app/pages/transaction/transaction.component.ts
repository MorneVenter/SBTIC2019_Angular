import {Component, Input, OnInit} from '@angular/core';
import {TransactionDataModal} from '../../Models/transaction-data.modal';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input()
  tModel: TransactionDataModal;
  @Input()
  hasHeader = false;
  @Input()
  isWarning = false;
  constructor() { }

  ngOnInit() {
  }

}
