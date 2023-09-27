import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AppService } from './app.service';
import { AppRow, IAppServerRow } from 'src/app/models/AppRow';
import { AppChild } from 'src/app/models/AppChild';
import { BigFloat32 } from 'bigfloat';

describe('AppService', () => {
    let service: AppService;

    const serverData: IAppServerRow[] = [
        {
            id: '1',
            int: '123456',
            float: '123.456',
            color: '#000000',
            child: {
                id: '1',
                color: '#ffffff',
            },
        },
        {
            id: '2',
            int: '789456123',
            float: '789.45678923318',
            color: '#0000ff',
            child: {
                id: '2',
                color: '#00ffff',
            },
        },
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AppService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should create and destroy web worker', () => {
        expect(service).toBeTruthy();

        service.setupWorker();

        expect(service.worker).toBeTruthy();

        service.destroyWorker();

        expect(service.worker).toBeFalsy();
    });

    it('should start Pseudo Socket', async () => {
        expect(service).toBeTruthy();

        service.setupWorker();

        spyOn(service.worker, 'postMessage');

        service.startPseudoSocket();

        expect(service.worker.postMessage).toHaveBeenCalledWith({
            type: 'start',
        });

        service.destroyWorker();
    });

    it('should push array size to Pseudo Socket', async () => {
        expect(service).toBeTruthy();

        service.setupWorker();

        spyOn(service.worker, 'postMessage');

        service.pushSize(1000);

        expect(service.worker.postMessage).toHaveBeenCalledWith({
            type: 'size',
            value: 1000,
        });

        service.destroyWorker();
    });

    it('should push timer to Pseudo Socket', async () => {
        expect(service).toBeTruthy();

        service.setupWorker();

        spyOn(service.worker, 'postMessage');

        service.pushTimer(500);

        expect(service.worker.postMessage).toHaveBeenCalledWith({
            type: 'timer',
            value: 500,
        });

        service.destroyWorker();
    });

    it('should parse server data properly', fakeAsync(() => {
        expect(service).toBeTruthy();

        service.setupWorker();

        service.worker.onmessage(<MessageEvent<IAppServerRow[]>>{
            data: serverData,
        });

        tick(2);

        const input = serverData[0];
        const output = service.data$.value[0];

        expect(service.data$.value.length).toEqual(serverData.length);
        expect(output).toBeInstanceOf(AppRow);
        expect(output.id).toBe(input.id);
        expect(output.int).toBe(BigInt(input.int));
        expect(output.float.toString(10)).toBe(
            new BigFloat32(input.float).toString(10)
        );
        expect(output.color).toBe(input.color);
        expect(output.child).toBeInstanceOf(AppChild);
        expect(output.child.id).toBe(input.child.id);
        expect(output.child.color).toBe(input.child.color);

        service.destroyWorker();
    }));
});
