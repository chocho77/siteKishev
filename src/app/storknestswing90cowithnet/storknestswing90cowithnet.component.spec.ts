import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storknestswing90cowithnetComponent } from './storknestswing90cowithnet.component';

describe('Storknestswing90cowithnetComponent', () => {
  let component: Storknestswing90cowithnetComponent;
  let fixture: ComponentFixture<Storknestswing90cowithnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storknestswing90cowithnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Storknestswing90cowithnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
