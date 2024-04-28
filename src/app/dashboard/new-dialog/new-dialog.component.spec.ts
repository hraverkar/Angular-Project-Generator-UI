import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDialogComponent } from './new-dialog.component';

describe('NewDialogComponent', () => {
  let component: NewDialogComponent;
  let fixture: ComponentFixture<NewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
