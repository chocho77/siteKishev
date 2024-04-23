import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storknestswing60cowoutnetComponent } from './storknestswing60cowoutnet.component';

describe('Storknestswing60cowoutnetComponent', () => {
  let component: Storknestswing60cowoutnetComponent;
  let fixture: ComponentFixture<Storknestswing60cowoutnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storknestswing60cowoutnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Storknestswing60cowoutnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
