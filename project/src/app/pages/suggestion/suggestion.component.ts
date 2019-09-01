import {Component, Input, OnInit} from '@angular/core';
import {SuggestionDataModel} from '../../Models/suggestion.model';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  @Input()
  hasHeader = false;
  @Input()
  mySuggestion: SuggestionDataModel;

  constructor() { }
  ngOnInit() {
  }

}
