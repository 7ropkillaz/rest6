import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDishesMenuPageComponent } from './list-dishes-menu-page.component';

describe('ListDishesMenuPageComponent', () => {
  let component: ListDishesMenuPageComponent;
  let fixture: ComponentFixture<ListDishesMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDishesMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDishesMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
