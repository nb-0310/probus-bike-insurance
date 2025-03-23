import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsItemComponent } from './ins-item.component';

describe('InsItemComponent', () => {
  let component: InsItemComponent;
  let fixture: ComponentFixture<InsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
