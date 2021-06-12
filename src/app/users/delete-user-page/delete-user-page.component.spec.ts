import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserPageComponent } from './delete-user-page.component';

describe('DeleteUserPageComponent', () => {
  let component: DeleteUserPageComponent;
  let fixture: ComponentFixture<DeleteUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
