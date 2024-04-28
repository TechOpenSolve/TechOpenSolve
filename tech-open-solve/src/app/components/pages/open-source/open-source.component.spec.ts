import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceComponent } from './open-source.component';

describe('OpenSourceComponent', () => {
  let component: OpenSourceComponent;
  let fixture: ComponentFixture<OpenSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenSourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
