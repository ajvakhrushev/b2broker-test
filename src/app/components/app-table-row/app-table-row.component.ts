import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAppRow } from 'src/app/models/AppRow';

@Component({
    selector: 'app-table-row',
    templateUrl: './app-table-row.component.html',
    styleUrls: ['./app-table-row.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTableRowComponent {
    @Input() row: IAppRow;
    @Input() id: string;
}
