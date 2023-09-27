import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-column-color',
    template: '<div></div>',
})
export class MockAppColumnColorComponent {
    @Input() color: string = null;
}
