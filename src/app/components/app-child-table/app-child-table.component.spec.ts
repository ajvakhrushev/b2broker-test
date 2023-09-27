import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChildTableComponent } from './app-child-table.component';
import { MockAppColumnColorComponent } from 'src/app/mocks/app-column-color.component';
import { By } from '@angular/platform-browser';
import { AppChild } from 'src/app/models/AppChild';

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

    it('should not render rows in case of absence data', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.query(By.css('.body .row'))).toBeNull();

        fixture.componentRef.setInput('data', null);
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('.body .row'))).toBeNull();
    });

    it('should render rows with proper data', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.query(By.css('.body .row'))).toBeNull();

        const data = new AppChild('1', '#ff0000');

        fixture.componentRef.setInput('data', data);
        fixture.detectChanges();

        const nodes = fixture.debugElement.queryAll(By.css('.body .row .column'));

        expect(nodes.length).toBe(2);
        expect(nodes[0].nativeElement.innerText).toBe(data.id);
        expect(nodes[1].componentInstance.color).toBe(data.color);
    });
});
