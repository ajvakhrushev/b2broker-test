import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAppRow } from 'src/app/models/AppRow';

@Component({
    selector: 'app-table',
    templateUrl: './app-table.component.html',
    styleUrls: ['./app-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTableComponent {
    @Input() data: IAppRow[] = [];
    @Input() ids: string[] = [];

    trackByFn(index: number, item: IAppRow): string {
        return item.id;
    }
}
