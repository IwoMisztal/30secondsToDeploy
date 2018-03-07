import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostscreenComponent } from './lostscreen.component';

describe('LostscreenComponent', () => {
  let component: LostscreenComponent;
  let fixture: ComponentFixture<LostscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
