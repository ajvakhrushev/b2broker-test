import { Component, Input } from '@angular/core';
import { IAppChild } from 'src/app/models/AppChild';

@Component({
    selector: 'app-child-table',
    template: '<div></div>',
})
export class MockAppChildTableComponent {
    @Input() data: IAppChild = null;
}
