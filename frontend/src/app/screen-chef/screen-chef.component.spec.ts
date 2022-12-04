import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenChefComponent } from './screen-chef.component';

describe('ScreenChefComponent', () => {
  let component: ScreenChefComponent;
  let fixture: ComponentFixture<ScreenChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
