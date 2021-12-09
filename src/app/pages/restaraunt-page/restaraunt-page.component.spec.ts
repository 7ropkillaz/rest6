import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarauntPageComponent } from './restaraunt-page.component';

describe('RestarauntPageComponent', () => {
  let component: RestarauntPageComponent;
  let fixture: ComponentFixture<RestarauntPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestarauntPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestarauntPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
