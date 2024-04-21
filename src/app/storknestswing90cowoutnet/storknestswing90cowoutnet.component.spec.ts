import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storknestswing90cowoutnetComponent } from './storknestswing90cowoutnet.component';

describe('Storknestswing90cowoutnetComponent', () => {
  let component: Storknestswing90cowoutnetComponent;
  let fixture: ComponentFixture<Storknestswing90cowoutnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storknestswing90cowoutnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Storknestswing90cowoutnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
