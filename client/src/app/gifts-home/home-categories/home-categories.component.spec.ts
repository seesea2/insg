import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HomeCategoriesComponent } from './home-categories.component';

describe('HomeCategoriesComponent', () => {
  let component: HomeCategoriesComponent;
  let fixture: ComponentFixture<HomeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCategoriesComponent],
      imports: [MatCardModule, MatDividerModule, MatProgressSpinnerModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
