import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormComponent } from './app-form.component';
import { FormsModule } from '@angular/forms';

describe('AppFormComponent', () => {
  let component: AppFormComponent;
  let fixture: ComponentFixture<AppFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
