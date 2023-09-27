import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { AppService } from 'src/app/services/app/app.service';
import { MockAppService } from 'src/app/mocks/app.service';
import { MockAppFormComponent } from 'src/app/mocks/app-form.component';
import { MockAppTableComponent } from 'src/app/mocks/app-table.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                MockAppFormComponent,
                MockAppTableComponent,
            ],
            providers: [
                {
                    provide: AppService,
                    useClass: MockAppService,
                },
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
