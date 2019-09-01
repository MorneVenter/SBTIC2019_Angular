import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TransactionDataModal} from '../../Models/transaction-data.modal';
import {SuggestionDataModel} from '../../Models/suggestion.model';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {

    t1 = new TransactionDataModal(new Date(), 512, 'Krispy Kreme', 'Fast Food', 'Sandton');
    t2 = new TransactionDataModal(new Date('2019-01-16'), 21.50, 'Airtime - 21.50', 'other', 'Pretoria North');
    t3 = new TransactionDataModal(new Date('2019-01-22'), 55.22, 'KFC', 'other', 'Pretoria North');
    t4 = new TransactionDataModal(new Date('2019-01-22'), 156.20, 'Beer x 6 500ml', 'other', 'Pretoria North');
    t5 = new TransactionDataModal(new Date('2019-01-23'), 94.00, 'Pick n Pay', 'other', 'Pretoria North');
    t6 = new TransactionDataModal(new Date('2019-02-03'), 264.50, 'BT Games', 'other', 'Sandton');
    t7 = new TransactionDataModal(new Date('2019-02-05'), 75.99, 'Captain Morgan Spiced Gold 1L', 'other', 'Potchefstroom');
    s1 = new SuggestionDataModel('Spend less money on pastries.', 'Excessive amount spent at Krispy Kreme.');
    s2 = new SuggestionDataModel('Spend less money on video games.', 'Excessive amount spent at BT Games.');
    s3 = new SuggestionDataModel('Manage your alcohol intake', 'Large amounts of alcohol purchased recently.');
    ngOnInit() {
    }
}
