import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFromCartComponent } from './delete-from-cart.component';

describe('DeleteFromCartComponent', () => {
  let component: DeleteFromCartComponent;
  let fixture: ComponentFixture<DeleteFromCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFromCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFromCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
