import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringProcessComponent } from './hiring-process.component';

describe('HiringProcessComponent', () => {
  let component: HiringProcessComponent;
  let fixture: ComponentFixture<HiringProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiringProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiringProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
