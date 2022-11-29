import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLogComponent } from './brand-log.component';

describe('BrandLogComponent', () => {
  let component: BrandLogComponent;
  let fixture: ComponentFixture<BrandLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
