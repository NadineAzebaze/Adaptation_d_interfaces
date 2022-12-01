import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDishComponent } from './type-dish.component';

describe('TypeDishComponent', () => {
  let component: TypeDishComponent;
  let fixture: ComponentFixture<TypeDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
