import { Component, Input } from '@angular/core';
import { IAppRow } from 'src/app/models/AppRow';

@Component({
    selector: 'app-table',
    template: '<div></div>',
})
export class MockAppTableComponent {
    @Input() data: IAppRow[] = [];
    @Input() ids: string[] = [];
}
