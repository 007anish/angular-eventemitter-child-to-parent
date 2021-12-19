import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  countriesList = ["country1", "country2"];
  constructor() { }

  ngOnInit() {
  }

  countriesListChanged(list: string[]) {
    console.log("countriesListChanged: ", list);
    console.log("countriesList in parent: ", this.countriesList);
  }

  addCountry() {
    this.countriesList.push("parent-added-country" + (this.countriesList.length + 1));
    this.countriesList = [...this.countriesList];
  }
}