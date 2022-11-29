import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLogComponent } from './product-log.component';

describe('ProductLogComponent', () => {
  let component: ProductLogComponent;
  let fixture: ComponentFixture<ProductLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
