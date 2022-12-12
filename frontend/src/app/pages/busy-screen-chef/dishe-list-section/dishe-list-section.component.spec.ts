import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisheListSectionComponent } from './dishe-list-section.component';

describe('DisheListSectionComponent', () => {
  let component: DisheListSectionComponent;
  let fixture: ComponentFixture<DisheListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisheListSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisheListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
