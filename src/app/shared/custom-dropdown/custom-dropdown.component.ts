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

  trackByFn(index: number, _: Value): number {
    return index;
  }

  valueChange(value: string): void {
    this.filteredValues = this.values.filter(x => x.label.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1);
    this.showDropdown = (this.filteredValues && this.filteredValues.length > 0) === true ? true : false;
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  select(v: Value): void {
    this.listFilter = v.label;
    this.showDropdown = false;
  }

  clear(): void {
    this.listFilter = '';
    this.showDropdown = false;
    this.filteredValues = this.values;
  }

}
