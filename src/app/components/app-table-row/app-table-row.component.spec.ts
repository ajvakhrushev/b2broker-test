import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppTableRowComponent } from './app-table-row.component';
import { MockAppColumnColorComponent } from 'src/app/mocks/app-column-color.component';
import { MockAppChildTableComponent } from 'src/app/mocks/app-child-table.component';
import { MockBigFloatPipe } from 'src/app/mocks/big-float.pipe';
import { AppRow } from 'src/app/models/AppRow';
import { BigFloat32 } from 'bigfloat';
import { AppChild } from 'src/app/models/AppChild';

describe('AppTableRowComponent', () => {
    let component: AppTableRowComponent;
    let fixture: ComponentFixture<AppTableRowComponent>;

    const data = new AppRow(
        '1',
        BigInt(1),
        new BigFloat32(1),
        '#000000',
        new AppChild('1', '#ffffff')
    );

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

    it('should not render columns in case of absence data', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.queryAll(By.css('.column')).length).toBe(0);

        fixture.componentRef.setInput('row', null);
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('.column')).length).toBe(0);
    });

    it('should render columns in case if we pass data', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.queryAll(By.css('.column')).length).toBe(0);

        fixture.componentRef.setInput('row', data);
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('.column')).length).toBe(5);
    });

    it('should render proper data in columns', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.queryAll(By.css('.column')).length).toBe(0);

        fixture.componentRef.setInput('row', data);
        fixture.detectChanges();

        const nodes = fixture.debugElement.queryAll(By.css('.column'));

        expect(nodes[0].nativeElement.innerText).toBe(data.id);
        expect(nodes[1].nativeElement.innerText).toBe(data.int.toString());
        expect(nodes[2].nativeElement.innerText).toBe(data.float.toString(10));
        expect(nodes[3].componentInstance.color).toBe(data.color);
        expect(nodes[4].children.at(0).componentInstance.data).toBe(data.child);
    });

    it('should render custom id in case one is present', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.queryAll(By.css('.column')).length).toBe(0);

        fixture.componentRef.setInput('row', data);
        fixture.detectChanges();

        let nodes = fixture.debugElement.queryAll(By.css('.column'));

        expect(nodes[0].nativeElement.innerText).toBe(data.id);

        fixture.componentRef.setInput('id', '2');
        fixture.detectChanges();

        nodes = fixture.debugElement.queryAll(By.css('.column'));

        expect(nodes[0].nativeElement.innerText).not.toBe(data.id);
        expect(nodes[0].nativeElement.innerText).toBe('2');
    });
});
