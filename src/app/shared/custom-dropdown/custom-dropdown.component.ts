import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Value } from './custom-dropwodn.model';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.less']
})
export class CustomDropdownComponent implements OnInit {
  @Input() values: Value[];
  filteredValues: Value[];
  showDropdown: boolean;

  constructor(private ref: ChangeDetectorRef) { }

  // tslint:disable-next-line:variable-name
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this.filteredValues = this.values.filter(x => x.label.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1);
    this.showDropdownEvaluate();
  }

  ngOnInit() {
    this.filteredValues = this.values;
  }

  showDropdownEvaluate() {
    this.showDropdown = (this.filteredValues && this.filteredValues.length > 0) === true ? true : false;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  select(v: Value): void {
    this.listFilter = v.label;
    this.showDropdown = false;
    this.ref.detectChanges();
  }

}
