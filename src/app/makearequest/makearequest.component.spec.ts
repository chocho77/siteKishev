import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakearequestComponent } from './makearequest.component';

describe('MakearequestComponent', () => {
  let component: MakearequestComponent;
  let fixture: ComponentFixture<MakearequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakearequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakearequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
