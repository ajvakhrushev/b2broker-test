import { Injectable } from '@angular/core';
import { BigFloat32 } from 'bigfloat';
import { BehaviorSubject } from 'rxjs';
import { AppChild } from 'src/app/models/AppChild';
import { AppRow, IAppServerRow } from 'src/app/models/AppRow';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    worker: Worker;
    data$: BehaviorSubject<AppRow[]> = new BehaviorSubject(<AppRow[]>[]);
    timer$: BehaviorSubject<number> = new BehaviorSubject(300);
    size$: BehaviorSubject<number> = new BehaviorSubject(1000);
    ids$: BehaviorSubject<string[]> = new BehaviorSubject(<string[]>[]);

    constructor() {
        this.pushSize = this.pushSize.bind(this);
        this.pushTimer = this.pushTimer.bind(this);
        this.onWorkerMessage = this.onWorkerMessage.bind(this);
    }

    startPseudoSocket(): void {
        this.worker?.postMessage({ type: 'start' });
    }

    pushSize(value: number): void {
        this.worker?.postMessage({ type: 'size', value });
    }

    pushTimer(value: number): void {
        this.worker?.postMessage({ type: 'timer', value });
    }

    setupWorker(): void {
        if (typeof Worker === 'undefined') {
            throw new Error(
                'Web workers are not supported in this environment.'
            );
        }

        this.worker = new Worker(new URL('../../app.worker', import.meta.url));

        this.worker.onmessage = this.onWorkerMessage;
    }

    destroyWorker(): void {
        this.worker?.terminate();

        delete this.worker;
    }

    private parseData(data: IAppServerRow[] = []): AppRow[] {
        return data.map((next: IAppServerRow) => {
            return new AppRow(
                next.id,
                BigInt(next.int),
                new BigFloat32(next.float),
                next.color,
                new AppChild(next.child.id, next.child.color)
            );
        });
    }

    private onWorkerMessage(event: MessageEvent<IAppServerRow[]>): void {
        this.data$.next(this.parseData(event.data.slice(-10)));
    }
}
