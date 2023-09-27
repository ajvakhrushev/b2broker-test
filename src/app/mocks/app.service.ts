import { Injectable } from '@angular/core';
import { AppRow } from 'src/app/models/AppRow';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: null,
})
export class MockAppService {
    worker: Worker;
    data$: BehaviorSubject<AppRow[]> = new BehaviorSubject(<AppRow[]>[]);
    timer$: BehaviorSubject<number> = new BehaviorSubject(300);
    size$: BehaviorSubject<number> = new BehaviorSubject(1000);
    ids$: BehaviorSubject<string[]> = new BehaviorSubject(<string[]>[]);

    pushTimer(value: number): void {}
    pushSize(value: number): void {}
    startPseudoSocket(): void {}
    setupWorker(): void {}
    destroyWorker(): void {}
}
