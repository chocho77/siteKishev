import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storknestswing125giantwithnetComponent } from './storknestswing125giantwithnet.component';

describe('Storknestswing125giantwithnetComponent', () => {
  let component: Storknestswing125giantwithnetComponent;
  let fixture: ComponentFixture<Storknestswing125giantwithnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storknestswing125giantwithnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Storknestswing125giantwithnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
