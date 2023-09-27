import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableComponent } from './app-table.component';
import { MockAppTableRowComponent } from 'src/app/mocks/app-table-row.component';

describe('AppTableComponent', () => {
    let component: AppTableComponent;
    let fixture: ComponentFixture<AppTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppTableComponent, MockAppTableRowComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
