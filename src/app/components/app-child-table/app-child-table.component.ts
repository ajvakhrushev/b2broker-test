import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAppChild } from 'src/app/models/AppChild';

@Component({
    selector: 'app-child-table',
    templateUrl: './app-child-table.component.html',
    styleUrls: ['./app-child-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppChildTableComponent {
    @Input() data: IAppChild = null;
}
