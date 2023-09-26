import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppColumnColorComponent } from './app-column-color.component';

describe('AppColumnColorComponent', () => {
  let component: AppColumnColorComponent;
  let fixture: ComponentFixture<AppColumnColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppColumnColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppColumnColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
