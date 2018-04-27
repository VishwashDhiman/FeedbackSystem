import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFeedComponent } from './teacher-feed.component';

describe('TeacherFeedComponent', () => {
  let component: TeacherFeedComponent;
  let fixture: ComponentFixture<TeacherFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
