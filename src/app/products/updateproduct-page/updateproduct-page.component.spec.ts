import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproductPageComponent } from './updateproduct-page.component';

describe('UpdateproductPageComponent', () => {
  let component: UpdateproductPageComponent;
  let fixture: ComponentFixture<UpdateproductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateproductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateproductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
