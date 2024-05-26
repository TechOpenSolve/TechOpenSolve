import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerGrowthComponent } from './career-growth.component';

describe('CareerGrowthComponent', () => {
  let component: CareerGrowthComponent;
  let fixture: ComponentFixture<CareerGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerGrowthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
