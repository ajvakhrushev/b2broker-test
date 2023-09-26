import { Injectable } from '@angular/core';
import { BigFloat32 } from 'bigfloat';
import { BehaviorSubject } from 'rxjs';
import { AppRow, IAppServerRow } from 'src/app/models/AppRow';

@Injectable({
  providedIn: 'root'
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
  }

  parseData(data: IAppServerRow[] = []): AppRow[] {
    return data.map((next: IAppServerRow) => {
      return new AppRow(
        next.id,
        BigInt(next.int),
        new BigFloat32(next.float),
        next.color,
        next.child
      );
    });
  }

  startPseudoSocket(): void {
    this.worker?.postMessage({type: 'start'});
  }

  pushSize(value: number): void {
    this.worker?.postMessage({type: 'size', value});
  }

  pushTimer(value: number): void {
    this.worker?.postMessage({type: 'timer', value});
  }

  setupWorker(): void {
    if (typeof Worker === 'undefined') {
      throw new Error('Web workers are not supported in this environment.');
    }

    this.worker = new Worker(new URL('../../app.worker', import.meta.url));

    this.worker.onmessage = ({ data }) => this.data$.next(this.parseData(data.slice(-10)));
  }
}
