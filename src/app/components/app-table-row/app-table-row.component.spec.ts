import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableRowComponent } from './app-table-row.component';
import { MockAppColumnColorComponent } from 'src/app/mocks/app-column-color.component';
import { MockAppChildTableComponent } from 'src/app/mocks/app-child-table.component';
import { MockBigFloatPipe } from 'src/app/mocks/big-float.pipe';

describe('AppTableRowComponent', () => {
    let component: AppTableRowComponent;
    let fixture: ComponentFixture<AppTableRowComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppTableRowComponent,
                MockAppColumnColorComponent,
                MockAppChildTableComponent,
                MockBigFloatPipe,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppTableRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
