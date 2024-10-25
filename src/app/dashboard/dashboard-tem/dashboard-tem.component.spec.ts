import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTemComponent } from './dashboard-tem.component';

describe('DashboardTemComponent', () => {
  let component: DashboardTemComponent;
  let fixture: ComponentFixture<DashboardTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
