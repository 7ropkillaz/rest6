import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenuRestarauntPageComponent } from './list-menu-restaraunt-page.component';

describe('ListMenuRestarauntPageComponent', () => {
  let component: ListMenuRestarauntPageComponent;
  let fixture: ComponentFixture<ListMenuRestarauntPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMenuRestarauntPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenuRestarauntPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
