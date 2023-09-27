import { Component, Input } from '@angular/core';
import { IAppRow } from 'src/app/models/AppRow';

@Component({
    selector: 'app-table-row',
    template: '<div></div>',
})
export class MockAppTableRowComponent {
    @Input() row: IAppRow;
    @Input() id: string;
}
