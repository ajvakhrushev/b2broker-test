import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppColumnColorComponent } from './app-column-color.component';
import { By } from '@angular/platform-browser';

describe('AppColumnColorComponent', () => {
    let component: AppColumnColorComponent;
    let fixture: ComponentFixture<AppColumnColorComponent>;

    const color = 'rgb(255, 240, 0)';

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppColumnColorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppColumnColorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the color', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.query(By.css('span'))).toBeNull();

        fixture.componentRef.setInput('color', color);

        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('span'))).not.toBeNull();
        expect(
            fixture.debugElement.query(By.css('span')).nativeElement.innerText
        ).toBe(color);
    });

      it('should render proper background color', () => {
        expect(component).toBeTruthy();

        expect(fixture.debugElement.query(By.css('span'))).toBeNull();

        fixture.componentRef.setInput('color', color);

        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('span'))).not.toBeNull();
        expect(
            fixture.debugElement.query(By.css('span')).nativeElement.style.backgroundColor
        ).toBe(color);
    });
});
