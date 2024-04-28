import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenInTechComponent } from './women-in-tech.component';

describe('WomenInTechComponent', () => {
  let component: WomenInTechComponent;
  let fixture: ComponentFixture<WomenInTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenInTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenInTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
