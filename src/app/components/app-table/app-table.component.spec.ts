import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableComponent } from './app-table.component';
import { MockAppTableRowComponent } from 'src/app/mocks/app-table-row.component';
import { By } from '@angular/platform-browser';
import { AppRow } from 'src/app/models/AppRow';
import { BigFloat32 } from 'bigfloat';
import { AppChild } from 'src/app/models/AppChild';

describe('AppTableComponent', () => {
    let component: AppTableComponent;
    let fixture: ComponentFixture<AppTableComponent>;

    const data = [
        new AppRow(
            '1',
            BigInt(1),
            new BigFloat32(1),
            '#000000',
            new AppChild('1', '#ffffff')
        ),
    ];

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

    it('should not render rows in case the data does not present', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.queryAll(By.css('.body .row')).length).toBe(0);

        fixture.componentRef.setInput('data', null);
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('.body .row')).length).toBe(0);
    });

    it('should render rows if the data is present', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.queryAll(By.css('.body .row')).length).toBe(0);

        fixture.componentRef.setInput('data', data);
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('.body .row')).length).toBe(1);
    });

    it('should render rows and set "id" if the "ids" are present', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.queryAll(By.css('.body .row')).length).toBe(0);

        fixture.componentRef.setInput('data', data);
        fixture.componentRef.setInput('ids', ['2']);
        fixture.detectChanges();

        const nodes = fixture.debugElement.queryAll(By.css('.body .row'));

        expect(nodes[0].componentInstance.row).toEqual(data[0]);
        expect(nodes[0].componentInstance.id).toEqual('2');
    });

});
