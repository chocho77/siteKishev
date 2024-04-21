import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storknestswing90cofinemeshrainbowComponent } from './storknestswing90cofinemeshrainbow.component';

describe('Storknestswing90cofinemeshrainbowComponent', () => {
  let component: Storknestswing90cofinemeshrainbowComponent;
  let fixture: ComponentFixture<Storknestswing90cofinemeshrainbowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storknestswing90cofinemeshrainbowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Storknestswing90cofinemeshrainbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
