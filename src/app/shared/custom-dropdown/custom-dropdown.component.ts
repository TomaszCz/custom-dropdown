import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Value } from './custom-dropwodn.model';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.less']
})
export class CustomDropdownComponent<T> implements OnInit {
  @Input() values: Value<T>[];
  @Output() selected = new EventEmitter<Value<T> | null>();

  filteredValues: Value<T>[];
  showDropdown: boolean;
  listFilter: string;

  ngOnInit() {
    this.filteredValues = this.values;
  }

  trackByFn(index: number, _: Value<T>): number {
    return index;
  }

  valueChange(value: string): void {
    this.filteredValues = this.values.filter(x => x.label.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1);
    this.showDropdown = this.filteredValues && this.filteredValues.length > 0;
    this.selected.emit(null);
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  select(v: Value<T>): void {
    this.listFilter = v.label;
    this.showDropdown = false;
    this.selected.emit(v);
  }

  clear(): void {
    this.listFilter = '';
    this.showDropdown = false;
    this.filteredValues = this.values;
    this.selected.emit(null);
  }

}
