import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugShowListComponent } from './rug-show-list.component';

describe('RugShowListComponent', () => {
  let component: RugShowListComponent;
  let fixture: ComponentFixture<RugShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugShowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
