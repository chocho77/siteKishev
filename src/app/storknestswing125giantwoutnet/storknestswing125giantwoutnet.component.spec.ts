import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storknestswing125giantwoutnetComponent } from './storknestswing125giantwoutnet.component';

describe('Storknestswing125giantwoutnetComponent', () => {
  let component: Storknestswing125giantwoutnetComponent;
  let fixture: ComponentFixture<Storknestswing125giantwoutnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storknestswing125giantwoutnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Storknestswing125giantwoutnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
