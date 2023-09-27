import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-form',
    template: '<div></div>',
})
export class MockAppFormComponent {
    @Input() timer: number = 0;
    @Input() size: number = 0;
    @Input() ids: string[] = [];
    @Output() timerChange: EventEmitter<number> = new EventEmitter();
    @Output() sizeChange: EventEmitter<number> = new EventEmitter();
    @Output() idsChange: EventEmitter<string[]> = new EventEmitter();
}
