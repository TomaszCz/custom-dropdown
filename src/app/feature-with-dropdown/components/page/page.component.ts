import { Component } from '@angular/core';
import { Value } from 'src/app/shared/custom-dropdown/custom-dropwodn.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent {

  selected: Value<number>;

  values = [
    { label: 'Bicycle', icon: 'la la-bicycle', customValue: 1 },
    { label: 'Motorcycle', icon: 'la la-motorcycle', customValue: 2 },
    { label: 'Car', icon: 'la la-car', customValue: 3 },
    { label: 'Train', icon: 'la la-train', customValue: 4 },
    { label: 'Plane', icon: 'la la-plane', customValue: 5 },
    { label: 'Ship', icon: 'la la-ship', customValue: 6 }
  ] as Value<number>[];

  append(): void {
    this.values.push(this.values[Math.floor(Math.random() * this.values.length)]);
  }

  doSthWithSelectedValue(v: Value<number>) {
    this.selected = v;
  }
}
