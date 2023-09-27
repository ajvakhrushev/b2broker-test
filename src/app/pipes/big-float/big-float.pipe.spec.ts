import { BigFloat32 } from 'bigfloat';
import { BigFloatPipe } from './big-float.pipe';

describe('BigFloatPipe', () => {
    it('create an instance', () => {
        const pipe = new BigFloatPipe();
        expect(pipe).toBeTruthy();
    });

    it('transform value to string', () => {
        const pipe = new BigFloatPipe();
        const value = new BigFloat32(123.456);

        expect(pipe.transform(value)).toEqual('123.4560000000000030');
    });

    it('transform falsy to string', () => {
        const pipe = new BigFloatPipe();

        expect(pipe.transform(null)).toEqual('');
    });
});
