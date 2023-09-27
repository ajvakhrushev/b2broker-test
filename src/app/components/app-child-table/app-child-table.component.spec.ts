import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChildTableComponent } from './app-child-table.component';
import { MockAppColumnColorComponent } from 'src/app/mocks/app-column-color.component';

describe('AppChildTableComponent', () => {
    let component: AppChildTableComponent;
    let fixture: ComponentFixture<AppChildTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppChildTableComponent, MockAppColumnColorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppChildTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
