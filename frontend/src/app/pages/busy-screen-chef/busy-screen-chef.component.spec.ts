import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyScreenChefComponent } from './busy-screen-chef.component';

describe('BusyScreenChefComponent', () => {
  let component: BusyScreenChefComponent;
  let fixture: ComponentFixture<BusyScreenChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusyScreenChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusyScreenChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
