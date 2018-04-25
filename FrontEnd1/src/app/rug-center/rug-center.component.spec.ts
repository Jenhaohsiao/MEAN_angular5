import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugCenterComponent } from './rug-center.component';

describe('RugCenterComponent', () => {
  let component: RugCenterComponent;
  let fixture: ComponentFixture<RugCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
