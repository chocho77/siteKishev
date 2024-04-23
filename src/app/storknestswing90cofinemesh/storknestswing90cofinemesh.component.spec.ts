import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storknestswing90cofinemeshComponent } from './storknestswing90cofinemesh.component';

describe('Storknestswing90cofinemeshComponent', () => {
  let component: Storknestswing90cofinemeshComponent;
  let fixture: ComponentFixture<Storknestswing90cofinemeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storknestswing90cofinemeshComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Storknestswing90cofinemeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
