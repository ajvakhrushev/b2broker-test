import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-column-color',
    templateUrl: './app-column-color.component.html',
    styleUrls: ['./app-column-color.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppColumnColorComponent {
    @Input() color: string = null;
}
