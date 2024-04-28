import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEnvComponent } from './work-env.component';

describe('WorkEnvComponent', () => {
  let component: WorkEnvComponent;
  let fixture: ComponentFixture<WorkEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkEnvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
