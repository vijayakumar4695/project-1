import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderidComponent } from './vieworderid.component';

describe('VieworderidComponent', () => {
  let component: VieworderidComponent;
  let fixture: ComponentFixture<VieworderidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
