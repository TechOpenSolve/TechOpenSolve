import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRepoComponent } from './category-repo.component';

describe('CategoryRepoComponent', () => {
  let component: CategoryRepoComponent;
  let fixture: ComponentFixture<CategoryRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryRepoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
