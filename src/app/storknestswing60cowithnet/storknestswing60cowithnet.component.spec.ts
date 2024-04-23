import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storknestswing60cowithnetComponent } from './storknestswing60cowithnet.component';

describe('Storknestswing60cowithnetComponent', () => {
  let component: Storknestswing60cowithnetComponent;
  let fixture: ComponentFixture<Storknestswing60cowithnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storknestswing60cowithnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Storknestswing60cowithnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
