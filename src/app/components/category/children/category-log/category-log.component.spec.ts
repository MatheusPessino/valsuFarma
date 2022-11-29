import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLogComponent } from './category-log.component';

describe('CategoryLogComponent', () => {
  let component: CategoryLogComponent;
  let fixture: ComponentFixture<CategoryLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
