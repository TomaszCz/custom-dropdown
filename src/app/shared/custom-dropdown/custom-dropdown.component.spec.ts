import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDropdownComponent } from './custom-dropdown.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Value } from './custom-dropwodn.model';

describe('CustomDropdownComponent', () => {
  let component: CustomDropdownComponent<any>;
  let fixture: ComponentFixture<CustomDropdownComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDropdownComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.values = [
      { label: 'Bicycle', icon: 'la la-bicycle', customValue: 'lalala' },
      { label: 'Motorcycle', icon: 'la la-motorcycle', customValue: 'lalala' },
      { label: 'Car', icon: 'la la-car', customValue: 'lalala' },
      { label: 'Train', icon: 'la la-train', customValue: 'lalala' },
      { label: 'Plane', icon: 'la la-plane', customValue: 'lalala' },
      { label: 'Ship', icon: 'la la-ship', customValue: 'lalala' }
    ] as Value<string>[];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should perform filtering properly display filtered list based on matching query', async () => {
    const inputEl = fixture.debugElement.query(By.css('input[name="filter"]')).nativeElement;
    inputEl.value = 'cycle';
    inputEl.dispatchEvent(new Event('input'));
    await fixture.detectChanges();
    await fixture.whenStable();
    const elements = fixture.debugElement.queryAll(By.css('.item'));
    expect(elements.length).toBe(2);
  });

  it('should display no elements and hide the list if no elements match the specified query', async () => {
    const inputEl = fixture.debugElement.query(By.css('input[name="filter"]')).nativeElement;
    inputEl.value = 'qwertyuiop';
    inputEl.dispatchEvent(new Event('input'));
    await fixture.detectChanges();
    await fixture.whenStable();
    const elements = fixture.debugElement.queryAll(By.css('.item'));
    expect(elements.length).toBe(0);
  });
});
