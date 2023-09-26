import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, Subscription, combineLatest, combineLatestWith, interval, startWith, switchMap, tap } from 'rxjs';
import { IAppRow } from 'src/app/models/AppRow';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  timer$: Observable<number> = new Observable();
  size$: Observable<number> = new Observable();
  ids$: Observable<string[]> = new Observable();
  data$: Observable<IAppRow[]> = new Observable();
  subscriptions$: Subscription[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    const {
      timer$,
      size$,
      ids$,
      data$
    } = this.appService;

    this.timer$ = timer$.asObservable();
    this.size$ = size$.asObservable();
    this.ids$ = ids$.asObservable();
    this.data$ = data$.asObservable();

    this.appService.setupWorker();

    this.subscriptions$.push(
      this.timer$.subscribe(this.appService.pushTimer),
      this.size$.subscribe(this.appService.pushSize)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(
      (next: Subscription) => next.unsubscribe()
    );
  }

  onTimerChange(value: number = 300): void {
    this.appService.timer$.next(value);
  }

  onSizeChange(value: number = 1000): void {
    this.appService.size$.next(value);
  }

  onIdsChange(value: string[] = []): void {
    this.appService.ids$.next(value);
  }
}
