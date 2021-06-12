import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallProductComponent } from './viewall-product.component';

describe('ViewallProductComponent', () => {
  let component: ViewallProductComponent;
  let fixture: ComponentFixture<ViewallProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
