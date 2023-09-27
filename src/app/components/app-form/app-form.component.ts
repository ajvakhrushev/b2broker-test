import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';

const REGEXP_IDS = /^[\d|/,]+$/;

@Component({
    selector: 'app-form',
    templateUrl: './app-form.component.html',
    styleUrls: ['./app-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFormComponent implements OnChanges {
    @Input() timer: number = 0;
    @Input() size: number = 0;
    @Input() ids: string[] = [];
    @Output() timerChange: EventEmitter<number> = new EventEmitter();
    @Output() sizeChange: EventEmitter<number> = new EventEmitter();
    @Output() idsChange: EventEmitter<string[]> = new EventEmitter();

    idsError: string = null;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['ids']) {
            this.idsError = null;
        }
    }

    onIdsModelChange($event: string) {
        if (!$event || REGEXP_IDS.test($event)) {
            const list: string[] =
                $event.split(',')
                      .map((next: string): string => next.trim());

            this.idsChange.emit(list);

            this.idsError = null;
        } else {
            this.idsError = 'Error: Only numbers and coma are allowed';
        }
    }
}
