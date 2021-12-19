import { Component, OnChanges, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input()
  optionList: Array<string>;

  @Output()
  optionListChange = new EventEmitter<string[]>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.optionList) {
      this.optionListChange.emit(changes.optionList.currentValue);
    }
  }

  addCountry() {
    this.optionList.push("child-added-country" + (this.optionList.length + 1));
    this.optionListChange.emit(this.optionList);
  }
}