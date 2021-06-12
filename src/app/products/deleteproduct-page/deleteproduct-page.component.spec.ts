import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproductPageComponent } from './deleteproduct-page.component';

describe('DeleteproductPageComponent', () => {
  let component: DeleteproductPageComponent;
  let fixture: ComponentFixture<DeleteproductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteproductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteproductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
