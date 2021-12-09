import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMenuPageComponent } from './type-menu-page.component';

describe('TypeMenuPageComponent', () => {
  let component: TypeMenuPageComponent;
  let fixture: ComponentFixture<TypeMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
