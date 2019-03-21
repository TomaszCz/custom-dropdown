import { Component, OnInit, Input } from '@angular/core';
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
  listFilter: string;

  ngOnInit() {
    this.filteredValues = this.values;
  }

  valueChange(value: string) {
    this.filteredValues = this.values.filter(x => x.label.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1);
    this.showDropdownEvaluate();
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
  }

}
