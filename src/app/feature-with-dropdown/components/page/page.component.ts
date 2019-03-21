import { Component } from '@angular/core';
import { Value } from 'src/app/shared/custom-dropdown/custom-dropwodn.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent {

  values = [
    { label: 'Bicycle', icon: 'la la-bicycle' },
    { label: 'Motorcycle', icon: 'la la-motorcycle' },
    { label: 'Car', icon: 'la la-car' },
    { label: 'Train', icon: 'la la-train' },
    { label: 'Plane', icon: 'la la-plane' },
    { label: 'Ship', icon: 'la la-ship' }
  ] as Value[];
}
