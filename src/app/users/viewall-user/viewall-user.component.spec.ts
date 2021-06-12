import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallUserComponent } from './viewall-user.component';

describe('ViewallUserComponent', () => {
  let component: ViewallUserComponent;
  let fixture: ComponentFixture<ViewallUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
