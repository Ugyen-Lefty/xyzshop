import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredproductsComponent } from './filteredproducts.component';

describe('FilteredproductsComponent', () => {
  let component: FilteredproductsComponent;
  let fixture: ComponentFixture<FilteredproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
