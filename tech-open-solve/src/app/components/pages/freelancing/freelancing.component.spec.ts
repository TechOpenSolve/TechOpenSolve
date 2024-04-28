import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancingComponent } from './freelancing.component';

describe('FreelancingComponent', () => {
  let component: FreelancingComponent;
  let fixture: ComponentFixture<FreelancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelancingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreelancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
