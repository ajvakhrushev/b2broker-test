import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFormComponent {
  @Input() timer: number = 0;
  @Input() size: number = 0;
  @Input() ids: string[] = [];
  @Output() timerChange: EventEmitter<number> = new EventEmitter();
  @Output() sizeChange: EventEmitter<number> = new EventEmitter();
  @Output() idsChange: EventEmitter<string[]> = new EventEmitter();

  idsReg = /^[\d|/,]+$/;
  idsError: string = null;
  stableIds: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ids']) {
      this.stableIds = changes['ids'].currentValue;
      this.idsError = null;
    }
  }

  onIdsModelChange($event: string) {
    if (!$event || this.idsReg.test($event)) {
      const list: string[] =
        $event.split(',')
              .map((next: string): string => next.trim());

      this.idsChange.emit(list);

      this.idsError = null;
    } else {
      this.idsError = 'Error, Allowed only numbers and coma';
    }
  }
}
