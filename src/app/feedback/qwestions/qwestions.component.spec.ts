import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QwestionsComponent } from './qwestions.component';

describe('QwestionsComponent', () => {
  let component: QwestionsComponent;
  let fixture: ComponentFixture<QwestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QwestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QwestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
