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
    s1 = new SuggestionDataModel('Spend less money on pastries.', 'Excessive amount spent at Krispy Kreme');
    ngOnInit() {
    }
}
